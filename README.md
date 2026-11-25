# Deadline: backend foundation
1. Supabase: SQL editor, run `supabase/schema.sql`. Authentication, Providers, Email: turn on "Confirm email". Set Site URL to your Vercel URL. Database, Extensions: enable `pg_cron`, then run the cron line in the schema.
2. Edit `public/config.js` with your project URL and anon key.
3. Vercel: import this folder, add the env vars from `.env.example`, deploy. Passport links look like `/p/<token>`.
4. Test accounts: sign up, confirm the email, then verify in the SQL editor: `select set_verified('<user id>','aadhaar','test1','XXXX 0000'); select set_verified('<user id>','pan','test2','ABC••1234F');`
   Real Aadhaar/PAN checks need a licensed KYC provider (Digio, Signzy, Karza or DigiLocker). Store only a hash and the masked value, as `set_verified` does.
## Escrow rule (the core idea)
Client funds a milestone before work starts. Provider delivers by `due_at`: full payout. Late: deduction of `late_bps_per_day` of that milestone per day late (default 2%/day), capped at `late_cap_bps` (default 20%), returned to the client. Not delivered by `due_at + cutoff_days` (default 10): the full amount goes back to the client. If the client stays silent after delivery for `review_days`, payment releases automatically with the same lateness rule.
Before real money: set `app_config.simulated_payments=false`, move custody to a licensed bank or payment partner, and call `fund_milestone` only from that partner's webhook.
