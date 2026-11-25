# Deadline — Trust. Commit. Deliver.

This is a static, responsive landing page for Deadline with a scroll-driven narrative, interactive Trust Passport, five-pillar selector, evidence context, responsive navigation, and a real `/demo/` route containing the supplied working prototype.

## Run locally

From the project directory:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Open `http://localhost:3000/` and use **Launch interactive demo** to open `http://localhost:3000/demo/`.

## Notes

The landing page intentionally distinguishes the current prototype from the intended product. The demo is device-local and its payments are simulated. Payment protection is described as an optional layer that would require appropriately regulated partners. No customer, partnership, pricing, contact, or regulatory claims were added beyond the supplied materials.

The MSME figures retain the definitions and caveats from the founder briefing: ₹8.1 lakh crore is an Economic Survey 2025–26 estimate of delayed payments locked across the MSME sector, while 2,56,892 is the count of applications filed on MSME Samadhaan up to 31 December 2025.

## Deployment

The project is configured as a static website. Serve the repository root as the static output; `index.html`, `public/`, and `demo/` must remain available. The managed Preview runtime uses port 3000.
