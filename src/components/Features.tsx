import React from 'react';
import { BookOpen, Calendar, MessageSquare, Database, Crown, Users, Zap, Shield, Clock } from 'lucide-react';

const Features = () => {
  const freeFeatures = [
    {
      icon: BookOpen,
      title: 'Comprehensive Resource Library',
      description: 'Access articles, case studies, templates, and implementation guides curated by industry experts.'
    },
    {
      icon: Calendar,
      title: 'Monthly Virtual Events',
      description: 'Join live workshops, webinars, and networking sessions with leading HR professionals.'
    },
    {
      icon: MessageSquare,
      title: 'Community Discussion Forum',
      description: 'Connect, collaborate, and share insights with fellow HR professionals worldwide.'
    },
    {
      icon: Database,
      title: 'Basic AI Tools Directory',
      description: 'Discover essential AI tools and platforms tailored for HR functions and processes.'
    }
  ];

  const premiumFeatures = [
    {
      icon: Crown,
      title: 'Structured Learning Modules',
      description: '4 comprehensive courses covering AI fundamentals, recruitment, analytics, and compliance.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship Sessions',
      description: 'One-on-one guidance from industry leaders and AI implementation specialists.'
    },
    {
      icon: Zap,
      title: 'Advanced AI Tool Recommendations',
      description: 'Personalized tool suggestions based on your specific HR needs and objectives.'
    },
    {
      icon: Shield,
      title: 'Exclusive Premium Content',
      description: 'Access to premium workshops, networking events, and downloadable implementation guides.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed with AI for HR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose between our free community access or premium membership with advanced learning and mentorship opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Free Membership */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Membership</h3>
              <p className="text-gray-600">Perfect for getting started with AI for HR</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-blue-600">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Join Free Community
            </button>
          </div>

          {/* Premium Membership */}
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Membership</h3>
              <p className="text-blue-100">Accelerated learning with expert guidance</p>
              
              {/* Pre-launch Offer Banner */}
              <div className="bg-yellow-400 text-yellow-900 rounded-lg p-3 mt-4 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-bold text-sm">PRE-LAUNCH SPECIAL</span>
                </div>
                <div className="text-sm font-bold">First 150 members get their first year for only $150!</div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-xl text-blue-200 line-through">$299</span>
                  <span className="text-3xl font-bold">$150</span>
                </div>
                <span className="text-blue-100">for your first year</span>
                <div className="text-sm text-blue-200 mt-1">Then $299/year</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-sm text-blue-100 font-medium">Everything in Free, plus:</div>
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Secure Your Spot Now
            </button>
            <p className="text-blue-100 text-sm mt-2 text-center">Limited to the first 150 members!</p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why choose AI for HR Community?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Learn from Experts</h4>
              <p className="text-gray-600 text-sm">Access insights from industry leaders who have successfully implemented AI in HR.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Practical Implementation</h4>
              <p className="text-gray-600 text-sm">Get hands-on experience with real-world case studies and implementation guides.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
              <p className="text-gray-600 text-sm">Connect with like-minded professionals and build lasting professional relationships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;