import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Join 5,000+ HR Professionals</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform HR with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join the premier community where HR professionals collaborate, learn, and grow together in AI adoption. Access cutting-edge resources, expert mentorship, and practical tools to revolutionize your HR practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/join-waitlist" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105">
                <span>Join the Waitlist</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5,000+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-gray-600">AI Tools</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">Live Workshop in Progress</span>
                </div>
                
                <h3 className="text-2xl font-bold">AI-Powered Recruitment Strategies</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Sarah Chen" className="w-8 h-8 rounded-full" />
                      <span className="font-medium">Sarah Chen, CHRO</span>
                    </div>
                    <p className="text-sm text-blue-100">"Our hiring efficiency improved by 40% using these AI strategies!"</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Michael Rodriguez" className="w-8 h-8 rounded-full" />
                      <span className="font-medium">Michael Rodriguez, HR Director</span>
                    </div>
                    <p className="text-sm text-blue-100">"The mentorship program transformed our AI implementation approach."</p>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <span className="text-sm text-blue-200">234 participants • 45 min remaining</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              New Workshop!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;