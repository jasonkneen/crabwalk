# 🦀 Crabwalk

Real-time companion monitor for [Clawdbot](https://github.com/clawdbot/clawdbot) agents by [@luccasveg](https://x.com/luccasveg).

Watch your AI agents work across WhatsApp, Telegram, Discord, and Slack in a live node graph. See thinking states, tool calls, and response chains as they happen.

![Crabwalk Home](public/home.png)

![Crabwalk Monitor](public/monitor.png)

## Features

- **Live activity graph** - ReactFlow visualization of agent sessions and action chains
- **Multi-platform** - Monitor agents across all messaging platforms simultaneously
- **Real-time streaming** - WebSocket connection to clawdbot gateway
- **Action tracing** - Expand nodes to inspect tool args and payloads
- **Session filtering** - Filter by platform, search by recipient

## Installation

### Docker (recommended)

```bash
docker run -d \
  -p 3000:3000 \
  -e CLAWDBOT_API_TOKEN=your-token \
  ghcr.io/luccast/crabwalk:latest
```

Or with docker-compose:

```bash
curl -O https://raw.githubusercontent.com/luccast/crabwalk/master/docker-compose.yml
CLAWDBOT_API_TOKEN=your-token docker-compose up -d
```

### From source

```bash
git clone https://github.com/luccast/crabwalk.git
cd crabwalk
npm install
CLAWDBOT_API_TOKEN=your-token npm run dev
```

Open `http://localhost:3000/monitor`

## Configuration

Requires clawdbot gateway running on the same machine.

### Gateway Token

Find your token in the clawdbot config file:

```bash
cat ~/.clawdbot/clawdbot.json | grep api_token
```

Or copy it directly:

```bash
export CLAWDBOT_API_TOKEN=$(cat ~/.clawdbot/clawdbot.json | grep -o '"api_token": *"[^"]*"' | cut -d'"' -f4)
```

## Stack

TanStack Start, ReactFlow, Framer Motion, tRPC, TanStack DB
