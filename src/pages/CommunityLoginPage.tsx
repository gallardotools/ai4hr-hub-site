import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityLoginPage = () => {
  const handleCommunityLogin = () => {
    // This would redirect to the actual Circle community platform
    // For now, we'll just log to console
    console.log('Redirecting to Circle community platform...');
    // In production, this would be something like:
    // window.location.href = 'https://your-circle-community-url.com/login';
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden min-h-screen">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Login to the Community
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome back—jump right in with AI-savvy HR professionals leading real change in the HR space.
          </p>
        </div>

        {/* Login Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Your Community</h2>
              <p className="text-gray-600">
                Continue to our Circle community platform to connect with fellow HR professionals.
              </p>
            </div>

            <button
              onClick={handleCommunityLogin}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105 mb-6"
            >
              <span>Enter Your Community</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="text-center">
              <span className="text-gray-600">Not a member? </span>
              <Link to="/join-waitlist" className="text-blue-600 hover:text-blue-700 font-medium">
                Join the waitlist here.
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Having trouble logging in?</strong> Make sure you're using the same email address you used to join the community. Contact support if you need assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Community Features Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 4V8a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Active Discussions</h3>
            <p className="text-sm text-gray-600">Join ongoing conversations about AI implementation strategies</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Network</h3>
            <p className="text-sm text-gray-600">Connect with industry leaders and AI specialists</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Resource Library</h3>
            <p className="text-sm text-gray-600">Access exclusive tools, templates, and case studies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLoginPage;