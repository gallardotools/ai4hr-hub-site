import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Human Resources Officer',
      company: 'TechFlow Inc.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'AI for HR Community transformed our entire recruitment process. The structured learning modules and expert mentorship helped us implement AI tools that reduced our hiring time by 40% while significantly improving candidate quality.',
      rating: 5,
      results: '40% faster hiring, 60% better candidate fit'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director of People Analytics',
      company: 'Global Solutions Ltd.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'The community aspect is incredible. I\'ve connected with HR leaders from around the world, sharing best practices and learning from their AI implementation experiences. The premium mentorship sessions were game-changing.',
      rating: 5,
      results: 'Built predictive retention model with 85% accuracy'
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Human Resources',
      company: 'Innovation Corp',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'The ethics and compliance module was exactly what we needed. It helped us navigate the complex landscape of AI in HR while ensuring we maintain fairness and transparency in all our processes.',
      rating: 5,
      results: 'Implemented ethical AI framework across 5,000+ employees'
    },
    {
      name: 'David Thompson',
      role: 'Head of Talent Acquisition',
      company: 'StartupHub',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'Even with the free membership, the resource library and monthly workshops provided immense value. When we upgraded to premium, the ROI was immediate. Our team is now confident in leveraging AI for strategic HR decisions.',
      rating: 5,
      results: 'Saved 15 hours/week on administrative tasks'
    }
  ];

  const companyLogos = [
    'TechFlow Inc.',
    'Global Solutions',
    'Innovation Corp',
    'StartupHub',
    'DataTech Co.',
    'Future Systems'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by HR Leaders Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of HR professionals who have successfully transformed their organizations with AI-powered solutions.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-gray-600 mb-8">Trusted by HR teams at leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 mb-4" />

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Results */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-sm font-medium text-blue-800 mb-1">Key Results:</div>
                <div className="text-blue-700 font-semibold">{testimonial.results}</div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Email Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI for HR Community</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Not ready to join yet? Get the latest insights, tools, and community updates delivered to your inbox. 
              Stay connected with what's happening in the world of AI for HR.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap">
                Stay Updated
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              Join 2,000+ HR professionals already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;