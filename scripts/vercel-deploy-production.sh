#!/usr/bin/env bash
set -euo pipefail
exec "${STAR_VERCEL_TOOLKIT_DIR:-/Users/icaroaguiar/dev/star/ops/vercel}/vercel-deploy-production.sh" "$@"
