"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const aiCoach_1 = require("./services/aiCoach");
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Database connection (will be configured later)
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'Purposeful Live Coaching API',
        version: '1.0.0',
    });
});
// API info endpoint
app.get('/', (req, res) => {
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
// Chat endpoint with AI Coach integration
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId, conversationHistory = [] } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }
        // Detect crisis situations
        const isCrisis = (0, aiCoach_1.detectCrisis)(message);
        // Get AI Coach response
        const aiResponse = await (0, aiCoach_1.getAICoachResponse)(message, conversationHistory);
        // Prepare response
        const response = {
            id: Date.now().toString(),
            role: 'assistant',
            content: aiResponse,
            timestamp: new Date().toISOString(),
            sessionId: sessionId || 'default',
            isCrisis,
        };
        res.json(response);
    }
    catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to process your message. Please try again.'
        });
    }
});
// Session endpoint (placeholder)
app.get('/api/sessions/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;
        // Placeholder response
        res.json({
            sessionId,
            messages: [],
            createdAt: new Date().toISOString(),
            status: 'active',
        });
    }
    catch (error) {
        console.error('Session error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Error handling middleware
app.use((err, req, res, next) => {
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
