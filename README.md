# Purposeful Live Coaching Platform

**A portable, self-hosted coaching platform with zero vendor lock-in.**

## 🎯 Overview

This platform provides:
- Video calling integration (Zoom)
- AI Coach chat interface
- Client health monitoring
- Session management
- Crisis detection and escalation

## 🏗️ Architecture

**Frontend:** React + Vite + Tailwind CSS
- Deployed on: Vercel / Netlify / Cloudflare Pages
- Portable, works anywhere

**Backend:** Node.js + Express + PostgreSQL
- Deployed on: Railway / Render / AWS / Your VPS
- Standard REST API, no vendor lock-in

**Database:** PostgreSQL
- Hosted on: Railway / Supabase / Your VPS
- Standard SQL, portable

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## 📦 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Railway)
```bash
cd backend
railway up
```

## 🔧 Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend.railway.app
VITE_ZOOM_MEETING_ID=8201808284
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:pass@host:5432/db
PORT=3000
NODE_ENV=production
```

## 📝 License

Proprietary - All rights reserved

## 👤 Author

Built for Purposeful Live Coaching
