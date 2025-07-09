import React from 'react';
import { Check, Crown, Users, Zap, ArrowRight, Clock } from 'lucide-react';

const Pricing = () => {
  const aiCuriousFeatures = [
    'Founding Member Badge',
    '**Community Connection** - Member calendar, live event invitations, and community-wide announcements.',
    '**Innovation Hub** - Curated AI tools, ready-to-use GPTs, practical prompt libraries, and Share & Learn space.',
    '**Live Learning Access** - Monthly webinars and discussions with HR innovators and AI practitioners.',
  ];

  const aiReadyFeatures = [
    '**Peer-to-Peer Learning** - Join member-led channels on prompting, building AI agents, app development, and implementation strategy. This is where use cases come to life.' ,
    '**Demos & Deep Dives** - Get access to product demos, implementation walkthroughs, and behind-the-scenes sessions with other HR professionals and builders.',
    '**Community Directory Access** - Explore the full member directory to connect, collaborate, and build relationships with fellow AI for HR leaders.'
  ];

  const aiForwardFeatures = [
    '**Masterclasses** - Unlock four (4) AI for HR learning tracks, complete with guided sessions, community examples, and real-world use cases across HR compliance, analytics, recruiting, implementation, etc.',
    '**Office Hours** - Join live mentorship sessions with guest experts and contributors. Get feedback, unstick implementation blocks, or test a new build — together.',
    '**Trailblazer Library** - Access a private archive of member-only content — including replays of live mentorship sessions, exclusive AI demos, and walkthroughs that won\'t be published elsewhere. This is your behind-the-scenes learning lab.',
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Membership Path to AI for HR Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Choose the membership level that matches your AI for HR journey and professional goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* AI Curious Plan */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Curious</h3>
              <p className="text-gray-600 mb-4">Perfect for HR Professionals getting started with AI</p>
              
              {/* Pre-launch Offer Banner */}
              <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-bold text-sm">PRE-LAUNCH SPECIAL</span>
                </div>
                <div className="text-sm font-bold">First 50 members lock in $100/year for life!</div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-xl text-gray-500 line-through">$150</span>
                  <span className="text-4xl font-bold text-gray-900">$100</span>
                </div>
                <span className="text-gray-600">locked in for life</span>
                <div className="text-sm text-gray-500 mt-1">New members after launch: $150/year</div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Secure Your Spot Now
              </button>
              <p className="text-gray-600 text-sm mt-2">Limited to the first 50 members!</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
              {aiCuriousFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700" dangerouslySetInnerHTML={{
                    __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}></span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Ready Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden border-2 border-blue-600">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI Ready</h3>
              <p className="text-blue-100 mb-4">Accelerated learning with peer-to-peer guidance</p>
              
              {/* Pre-launch Offer Banner */}
              <div className="bg-yellow-400 text-yellow-900 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-bold text-sm">PRE-LAUNCH SPECIAL</span>
                </div>
                <div className="text-lg font-bold">First 50 members lock in $250/year for life!</div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl text-blue-200 line-through">$400</span>
                  <span className="text-4xl font-bold">$250</span>
                </div>
                <span className="text-blue-100">locked in for life</span>
                <div className="text-sm text-blue-200 mt-1">New members after launch: $400/year</div>
              </div>
              
              <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Secure Your Spot Now
              </button>
              <p className="text-blue-100 text-sm mt-2">Limited to the first 50 members!</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold mb-4">Everything in AI Curious, plus:</h4>
              {aiReadyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100" dangerouslySetInnerHTML={{
                    __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}></span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white border-2 border-gray-800 lg:scale-105 lg:shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI Forward Leader</h3>
              <p className="text-gray-300 mb-4">Masterclass learning for HR professionals ready to lead with AI
</p>
              
              {/* Pre-launch Offer Banner */}
              <div className="bg-yellow-400 text-yellow-900 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="font-bold text-sm">PRE-LAUNCH SPECIAL</span>
                </div>
                <div className="text-lg font-bold">First 50 members lock in $500/year for life!</div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$800</span>
                  <span className="text-4xl font-bold">$500</span>
                </div>
                <span className="text-gray-300">locked in for life</span>
                <div className="text-sm text-gray-400 mt-1">New members after launch: $800/year</div>
              </div>
              
              <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Secure Your Spot Now
              </button>
              <p className="text-gray-300 text-sm mt-2">Limited to the first 50 members!</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold mb-4">Everything in AI Ready, plus:</h4>
              {aiForwardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300" dangerouslySetInnerHTML={{
                    __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Comparison */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Choose the Right Plan for Your Needs
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Community Access</h4>
              <p className="text-gray-600 text-sm">Connect with peers and access basic resources</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Accelerated Learning</h4>
              <p className="text-gray-600 text-sm">Structured curriculum with expert-designed modules</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Personal Mentorship</h4>
              <p className="text-gray-600 text-sm">One-on-one guidance from industry experts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Enterprise Solutions</h4>
              <p className="text-gray-600 text-sm">Custom implementations and dedicated support</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Can I upgrade between tiers anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade to any higher tier at any time. Your progress and community connections will be preserved, and you'll only pay the prorated difference.</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Is the pre-launch price really locked in for life?</h4>
              <p className="text-gray-600">Yes! Pre-launch members keep their special pricing forever as long as they maintain their membership. This exclusive rate will never increase for founding members.</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial available?</h4>
              <p className="text-gray-600">We offer a 7-day money-back guarantee for all memberships. If you're not satisfied within the first week, we'll provide a full refund.</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">What happens when you reach 150 pre-launch members?</h4>
              <p className="text-gray-600">Once we reach 150 founding members, the pre-launch period ends and all new members will pay the regular pricing. Founding members keep their locked-in rates forever.</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-2">What's included in AI-Forward Leader custom consulting?</h4>
              <p className="text-gray-600">AI-Forward Leader members get dedicated AI implementation consulting, custom workshop development, and ongoing strategic guidance tailored to their organization's specific needs.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your HR with AI?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of HR professionals who are already leveraging AI to drive better business outcomes. Lock in your founding member rate before we reach 150 members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center space-x-2">
              <span>Lock in AI-Forward for $500/year</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Lock in AI Curious
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Lock in AI Ready
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">⚡ Founding member rates locked in for life - First 150 only</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;