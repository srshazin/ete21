#!/bin/bash
# DOCS: https://developers.cloudflare.com/workers/wrangler/commands/#pagess
echo "Running deploy daemon..."
wrangler pages deploy dist --project-name "ete21"  --branch "main"
