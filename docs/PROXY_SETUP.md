# Custom Proxy Setup (EC2 + Caddy)

This guide explains how to replace the temporary `corsproxy.io` with your own secure reverse proxy using your existing EC2 instance and Caddy.

## Step 1: DNS Configuration
You need to point a subdomain to your EC2 instance.
1. Log in to your domain provider (where `arboraistudio.com` is managed).
2. Add a new **A Record**:
   - **Host/Name:** `api` (or `jobs`)
   - **Value/Points to:** `YOUR_EC2_PUBLIC_IP`
   - **TTL:** Automatic or 1 hour

## Step 2: EC2 Security Group
Ensure your EC2 instance allows incoming traffic on port 443 (HTTPS).
1. Go to AWS Console > EC2 > Security Groups.
2. Edit **Inbound Rules**.
3. Add a rule for **HTTPS (Port 443)** from **Anywhere (0.0.0.0/0)**.

## Step 3: Caddy Configuration
On your EC2 instance, update your `Caddyfile` (usually at `/etc/caddy/Caddyfile`).

```caddy
api.arboraistudio.com {
    # Reverse proxy to the Dover jobs API
    reverse_proxy https://cover-gen-user-data.vercel.app {
        header_up Host {upstream_hostport}
    }

    # Enable CORS for the main website
    header Access-Control-Allow-Origin "https://arboraistudio.com"
    header Access-Control-Allow-Methods "GET, OPTIONS"
    header Access-Control-Allow-Headers "Content-Type"

    # Handle preflight (OPTIONS) requests
    @options {
        method OPTIONS
    }
    handle @options {
        respond "" 204
    }
}
```

After saving the file, restart Caddy:
```bash
sudo systemctl reload caddy
```

## Step 4: Update Website Code
Once the proxy is live, update the endpoint in the website source code.

1. Open `app/career/page.tsx`.
2. Change the `JOBS_ENDPOINT`:
```typescript
// Replace:
// const JOBS_ENDPOINT = "https://corsproxy.io/?https://cover-gen-user-data.vercel.app/api/jobs";

// With your new proxy:
const JOBS_ENDPOINT = "https://api.arboraistudio.com/api/jobs";
```

## Why do this?
1. **Ownership:** You are no longer dependent on a free third-party service (`corsproxy.io`).
2. **Reliability:** Your own EC2 instance has guaranteed uptime.
3. **Security:** You control exactly which origins (like `arboraistudio.com`) can access your data.
4. **Performance:** Eliminates the extra hop through the public proxy's servers.
