# MCP Tools Setup Guide

This project uses Model Context Protocol (MCP) servers to give the AI agent advanced capabilities like SEO analysis and Google Search Console access.

## 1. Prerequisites

*   **Python 3.11+**
*   **Node.js & npm**
*   **Gemini CLI** (installed and configured)

## 2. Install Dependencies

Install the Python dependencies for the Google Search Console (GSC) tool:

```bash
pip install -r mcp-analysis/mcp-gsc/requirements.txt
```

## 3. Configuration

We use a local `.gemini/settings.json` file to configure the MCP servers. A template is provided.

1.  **Copy the example file:**
    ```bash
    cp .gemini/settings.json.example .gemini/settings.json
    ```

2.  **Configure Google Search Console (GSC):**
    *   **Get Credentials:**
        1.  Go to [Google Cloud Console](https://console.cloud.google.com/).
        2.  Create a project and enable the **Google Search Console API**.
        3.  Create a **Service Account** (Role: Owner).
        4.  Create a JSON Key for that service account and download it.
        5.  **Rename** the key file to `service_account_credentials.json`.
        6.  **Move** it to: `mcp-analysis/mcp-gsc/service_account_credentials.json` (This file is git-ignored).
    *   **Grant Access:**
        1.  Copy the `client_email` from your JSON key.
        2.  Go to [Google Search Console](https://search.google.com/search-console).
        3.  Select your property -> Settings -> Users and permissions.
        4.  **Add User**: Paste the email and give "Full" or "Owner" permission.

3.  **Configure Google Keyword Insight (RapidAPI):**
    *   **Get API Key:**
        1.  Visit [Google Keyword Insight on RapidAPI](https://rapidapi.com/dominus-dominus-default/api/google-keyword-insight1).
        2.  Subscribe (Free tier available).
        3.  Copy your `X-RapidAPI-Key`.
    *   **Update Settings:**
        1.  Open `.gemini/settings.json`.
        2.  Replace `YOUR_RAPIDAPI_KEY_HERE` with your actual key.

## 4. Verify

Restart your Gemini CLI session. You should see new tools available (e.g., `list_properties`, `Keyword_Research`).
