"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAICoachResponse = getAICoachResponse;
exports.detectCrisis = detectCrisis;
exports.generateSessionSummary = generateSessionSummary;
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
// System prompt for the AI Coach
const SYSTEM_PROMPT = `You are an AI Coach for Purposeful Live Coaching, a platform dedicated to evidence-based wellness and personal transformation.

Your role is to provide:
- Compassionate, supportive guidance
- Evidence-based recommendations from leading scientists (Huberman, Attia, Walker, etc.)
- Practical, actionable advice
- Crisis detection and appropriate escalation

Core Principles:
1. EVIDENCE-BASED: Only recommend interventions supported by empirical research (RCTs, controlled experiments)
2. COMPASSIONATE: Be warm, understanding, and non-judgmental
3. ACTIONABLE: Provide specific, practical steps the person can take
4. SAFE: Detect crisis situations (suicide risk, severe mental health issues) and recommend professional help
5. HOLISTIC: Consider sleep, nutrition, exercise, stress, relationships, and purpose

Crisis Detection:
- If someone mentions suicide, self-harm, or severe mental health crisis, IMMEDIATELY recommend they:
  * Call 988 (Suicide & Crisis Lifeline)
  * Contact a mental health professional
  * Reach out to a trusted friend or family member
- Be direct but compassionate about the seriousness

Evidence Sources:
- Sleep: Matthew Walker (Why We Sleep)
- Longevity: Peter Attia (Outlive)
- Neuroscience: Andrew Huberman (Huberman Lab)
- Habit Formation: James Clear (Atomic Habits)
- Nutrition: Evidence from RCTs and meta-analyses
- Exercise: Evidence-based protocols

Response Style:
- Start with empathy and validation
- Ask clarifying questions when needed
- Provide 2-3 specific, actionable recommendations
- Cite evidence when relevant (e.g., "Research from Dr. Matthew Walker shows...")
- Keep responses concise but comprehensive (200-400 words)
- End with encouragement and next steps

Remember: You're a coach, not a therapist. For serious mental health issues, always recommend professional help.`;
async function getAICoachResponse(userMessage, conversationHistory = []) {
    try {
        // Build messages array
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content: userMessage },
        ];
        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7,
            max_tokens: 800,
        });
        const response = completion.choices[0]?.message?.content ||
            'I apologize, but I encountered an issue generating a response. Please try again.';
        return response;
    }
    catch (error) {
        console.error('OpenAI API error:', error);
        throw new Error('Failed to get AI Coach response');
    }
}
// Crisis detection function
function detectCrisis(message) {
    const crisisKeywords = [
        'suicide',
        'kill myself',
        'end my life',
        'want to die',
        'better off dead',
        'self-harm',
        'hurt myself',
        'no reason to live',
    ];
    const lowerMessage = message.toLowerCase();
    return crisisKeywords.some(keyword => lowerMessage.includes(keyword));
}
// Generate session summary
async function generateSessionSummary(messages) {
    try {
        const summaryPrompt = `Summarize this coaching session in 2-3 sentences, highlighting:
1. Main topics discussed
2. Key recommendations given
3. Action items for the client

Session messages:
${messages.map(m => `${m.role}: ${m.content}`).join('\n')}`;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: summaryPrompt }],
            temperature: 0.5,
            max_tokens: 200,
        });
        return completion.choices[0]?.message?.content || 'Session summary unavailable.';
    }
    catch (error) {
        console.error('Summary generation error:', error);
        return 'Session summary unavailable.';
    }
}
