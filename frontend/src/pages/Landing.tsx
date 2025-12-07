import { useState } from 'react';

export default function Landing() {
  const [showChat, setShowChat] = useState(false);

  const handleStartCoaching = () => {
    setShowChat(true);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+15645296454';
  };

  if (showChat) {
    // Redirect to chat interface
    window.location.href = '/chat';
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-2xl font-bold text-gray-900">Purposeful Live Coaching</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Life with <span className="text-purple-600">AI-Powered</span><br />
            Evidence-Based Coaching
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get instant support from an AI coach trained on cutting-edge research from Huberman, Attia, Walker, and leading scientists. 
            Start your transformation journey in seconds—no signup required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleStartCoaching}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Start Talking to Your AI Coach Now</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-8">No signup. No credit card. Just start talking.</p>

          <div className="text-gray-500 mb-8">OR</div>

          {/* Phone CTA */}
          <button
            onClick={handleCallNow}
            className="inline-flex items-center space-x-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call 24/7: +1 (564) 529-6454</span>
          </button>

          <p className="text-sm text-gray-500 mt-2">Talk to your AI coach anytime, day or night.</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Evidence-Based</h3>
            <p className="text-gray-600 text-sm">Built on research from leading scientists and proven protocols</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Compassionate AI</h3>
            <p className="text-gray-600 text-sm">Warm, supportive coaching that understands your unique journey</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Self-Learning</h3>
            <p className="text-gray-600 text-sm">Platform gets smarter with every interaction, personalizing to you</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">HIPAA Compliant</h3>
            <p className="text-gray-600 text-sm">Enterprise-grade security with AI safety guardrails</p>
          </div>
        </div>

        {/* Why Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Purposeful Live Coaching?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">31+ integrated wellness modules</h4>
                <p className="text-gray-600 text-sm">Comprehensive approach to your health and wellbeing</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Autism intervention tracking</h4>
                <p className="text-gray-600 text-sm">Specialized support for families and individuals</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Sleep optimization protocols</h4>
                <p className="text-gray-600 text-sm">Science-backed strategies for better rest</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Nutrition & supplement guidance</h4>
                <p className="text-gray-600 text-sm">Evidence-based recommendations for optimal health</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Mental health support</h4>
                <p className="text-gray-600 text-sm">Compassionate guidance when you need it most</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Habit formation science</h4>
                <p className="text-gray-600 text-sm">Build lasting change through proven methods</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Identity transformation</h4>
                <p className="text-gray-600 text-sm">Become the person you're meant to be</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-semibold mb-1">Progress analytics & insights</h4>
                <p className="text-gray-600 text-sm">Track your journey with data-driven insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-600 mb-8">Start your journey in the next 10 seconds.</p>
          <button
            onClick={handleStartCoaching}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Free Now
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500 text-sm">
          <p className="mb-2">Built on research from Andrew Huberman, Peter Attia, Matthew Walker, and 100+ leading scientists</p>
          <p>© 2025 Purposeful Live Coaching. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
