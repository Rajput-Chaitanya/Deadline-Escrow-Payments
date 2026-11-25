const { createClient } = require('@supabase/supabase-js'), crypto = require('crypto');
const opt = { auth: { persistSession: false } };
const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, opt);
const pub = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, opt);
const hash = s => crypto.createHash('sha256').update(s + process.env.HASH_SALT).digest('hex');
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const b = req.body || {}, handle = String(b.handle || '').toLowerCase().trim(), email = String(b.email || '').toLowerCase().trim(), name = String(b.name || '').trim();
  if (!/^[a-z0-9_.]{3,20}$/.test(handle) || !/^\S+@\S+\.\S+$/.test(email) || name.length < 2 || !/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(b.password || '') || !['Individual', 'Business'].includes(b.type) || !b.region)
    return res.status(400).json({ error: 'Please check your details.' });
  let dev = ((req.headers.cookie || '').match(/(?:^|; )dl_dev=([a-f0-9]{48})/) || [])[1];
  if (!dev) { dev = crypto.randomBytes(24).toString('hex'); res.setHeader('Set-Cookie', `dl_dev=${dev}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=63072000`); }
  const dh = hash(dev), ip = hash(String(req.headers['x-forwarded-for'] || '').split(',')[0]);
  const a = await admin.from('device_accounts').select('*', { count: 'exact', head: true }).eq('device_hash', dh);
  if (a.count >= 3) return res.status(429).json({ error: 'This device already has 3 accounts. Log in to one of them.' });
  const d = await admin.from('device_accounts').select('*', { count: 'exact', head: true }).eq('ip_hash', ip).gte('created_at', new Date(Date.now() - 864e5).toISOString());
  if (d.count >= 6) return res.status(429).json({ error: 'Too many sign-ups from this network today.' });
  const { data, error } = await pub.auth.signUp({ email, password: b.password, options: { emailRedirectTo: process.env.SITE_URL + '/app' } });
  if (error || !data.user) return res.status(400).json({ error: error ? error.message : 'Could not create account.' });
  if (data.user.identities && data.user.identities.length === 0) return res.status(409).json({ error: 'That email already has an account.' });
  const id = data.user.id, r1 = await admin.from('profiles').insert({ id, handle, name, type: b.type, region: b.region });
  const r2 = r1.error ? r1 : await admin.from('device_accounts').insert({ user_id: id, device_hash: dh, ip_hash: ip });
  if (r2.error) { await admin.auth.admin.deleteUser(id); const m = r2.error.message || ''; return res.status(409).json({ error: /handle/.test(m) ? 'That handle is taken.' : /DEVICE_LIMIT/.test(m) ? 'This device already has 3 accounts.' : 'Could not create account.' }); }
  res.json({ ok: true });
};
