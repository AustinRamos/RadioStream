# GrooveFM



# 🎵 Radio Stream Platform

Hey there! This is a simple radio streaming platform I'm building. It's got a Go backend for handling the low latency streams and a Next.js frontend for the UI.
low latency, concurrent, and high quality audio streaming framework, meant to be 'plug and play' for local internet radio stations.

## 🚀 Quick Start

### Backend (Go)
```bash
cd backend
go mod init radio-platform
go get github.com/gin-gonic/gin github.com/gin-contrib/cors
go run main.go
```
The server will start on `localhost:8080`

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Check it out at `localhost:3000`

## 📁 Project Structure

```
radio-platform/
├── backend/
│   ├── cmd/server/          # Main server code
│   └── internal/
│       ├── api/            # API handlers
│       ├── auth/           # Authentication stuff (coming soon)
│       └── streaming/      # Stream handling
│
└── frontend/
    └── src/
        ├── app/            # Next.js pages
        └── components/     # React components
            ├── stream/     # Stream-related components
            └── dialog/     # Popup dialogs
```

## 🏗️ Current Features
- Basic audio streaming
- Simple UI for playing streams
- Create new stream dialog
- Stream cards with live status

##  Coming Soon
- Real authentication
- Multiple stream support
- Chat for each stream
- Better stream quality options
- DJ scheduling
- Maybe some visualizers cause why not

## 🤔 Tech Stack
- **Backend**: Go (Gin) - chose this for good performance with streams
- **Frontend**: Next.js + TypeScript + Tailwind - modern stack that's fun to work with
- Planning to add WebSockets for chat and stream metadata

## 💭 Notes
This is still pretty basic but I'm working on making it cooler.

