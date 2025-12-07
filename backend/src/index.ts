import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection (will be configured later)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Purposeful Live Coaching API',
    version: '1.0.0',
  });
});

// API info endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'Purposeful Live Coaching API',
    version: '1.0.0',
    description: 'Backend API for AI-powered evidence-based coaching',
    endpoints: {
      health: '/health',
      chat: '/api/chat',
      sessions: '/api/sessions',
    },
  });
});

// Chat endpoint (placeholder - will be enhanced with AI)
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Placeholder response (will be replaced with actual AI logic)
    const response = {
      id: Date.now().toString(),
      role: 'assistant',
      content: 'I understand. Let me help you with that. This is a placeholder response that will be replaced with actual AI-powered coaching guidance based on evidence from leading scientists.',
      timestamp: new Date().toISOString(),
      sessionId: sessionId || 'default',
    };

    res.json(response);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Session endpoint (placeholder)
app.get('/api/sessions/:sessionId', async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;

    // Placeholder response
    res.json({
      sessionId,
      messages: [],
      createdAt: new Date().toISOString(),
      status: 'active',
    });
  } catch (error) {
    console.error('Session error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Purposeful Live Coaching API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🤖 Chat endpoint: http://localhost:${PORT}/api/chat`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  pool.end();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, closing server...');
  pool.end();
  process.exit(0);
});
