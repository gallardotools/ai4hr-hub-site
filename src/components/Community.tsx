import React from 'react';
import { MessageSquare, Users, Calendar, Lightbulb, TrendingUp, Star } from 'lucide-react';

const Community = () => {
  const communityStats = [
    { label: 'Active Members', value: '5,247', icon: Users, color: 'text-blue-600' },
    { label: 'Monthly Discussions', value: '1,834', icon: MessageSquare, color: 'text-teal-600' },
    { label: 'Expert Sessions', value: '89', icon: Calendar, color: 'text-purple-600' },
    { label: 'Success Stories', value: '342', icon: Star, color: 'text-yellow-600' }
  ];

  const discussions = [
    {
      title: 'Best AI Tools for Employee Onboarding',
      author: 'Sarah Johnson',
      role: 'HR Director at TechCorp',
      replies: 23,
      likes: 45,
      time: '2 hours ago',
      category: 'Tools & Tech'
    },
    {
      title: 'Implementing Predictive Analytics for Retention',
      author: 'Michael Chen',
      role: 'People Analytics Lead',
      replies: 31,
      likes: 67,
      time: '4 hours ago',
      category: 'Analytics'
    },
    {
      title: 'AI Bias in Recruitment - Lessons Learned',
      author: 'Lisa Rodriguez',
      role: 'Chief People Officer',
      replies: 18,
      likes: 52,
      time: '1 day ago',
      category: 'Ethics'
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join a Thriving Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow HR professionals, share experiences, and learn from real-world AI implementations across industries.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Discussions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Recent Discussions</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {discussion.category}
                    </span>
                    <span className="text-sm text-gray-500">{discussion.time}</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {discussion.title}
                  </h4>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={`https://images.pexels.com/photos/${415829 + index}/pexels-photo-${415829 + index}.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face`}
                        alt={discussion.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{discussion.author}</div>
                        <div className="text-xs text-gray-600">{discussion.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{discussion.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Features</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Expert Office Hours</h4>
                    <p className="text-gray-600">Weekly Q&A sessions with industry leaders</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Join Next Session
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Innovation Showcase</h4>
                    <p className="text-gray-600">Share your AI implementations and success stories</p>
                  </div>
                </div>
                <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                  Share Your Story
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Networking Events</h4>
                    <p className="text-gray-600">Monthly virtual and in-person meetups</p>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  View Events
                </button>
              </div>
            </div>
            
            {/* Member Spotlight */}
            <div className="mt-8 bg-gray-900 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-4">Member Spotlight</h4>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                  alt="Featured Member"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">Emily Watson</div>
                  <div className="text-gray-300 text-sm">VP of People, StartupXYZ</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "The AI in HR Hub community helped us reduce hiring time by 60% while improving candidate quality. The mentorship program was invaluable!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;