import React from 'react';
import { Brain, Search, BarChart3, ShieldCheck, Clock, Users, Award, ArrowRight } from 'lucide-react';

const LearningModules = () => {
  const modules = [
    {
      icon: Brain,
      title: 'Masterclass 1: GenAI Use Cases for HR',
      duration: '3 weeks',
      lessons: 12,
      topics: [
        'Intro to large language models and text-based use cases',
        'Multi-modal use cases with images, sounds, and videos',
        'Using large language models for data and analytics related use cases',
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Masterclass 2: Build a No-code HR Chatbot',
      duration: '3 weeks',
      lessons: 15,
      topics: [
        'Intro to chatbot architecture and prompting layers',
        'Extend your chatbot and learn how to pressure test it ',
        'Explore the different flavors of chatbots + Capstone project',
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Masterclass 3: HR Automations with AI',
      duration: '3 weeks',
      lessons: 18,
      topics: [
        'Intro to basic concepts in automation',
        'Intro to APIs + AI to your automation',
        'Data structures and web concepts ',
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShieldCheck,
      title: 'Masterclass 4: Build Micro HR Apps with AI',
      duration: '3 weeks',
      lessons: 10,
      topics: [
        'Building basic front-end using simple UI frameworks with AI as an assistant',
        'Coding up the functionality of your microapp with AI as a coding assistant',
        'Saving and retrieving data to take your micro-app to the next level',
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="learning" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            <span>AI Forward Leader Membership Masterclasses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Structured Learning Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master AI for HR through our four comprehensive Masterclasses designed by industry experts and AI specialists.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{module.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{module.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center space-x-2 group-hover:bg-blue-600">
                  <span>Secure Your Spot</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Complete Learning Path</h3>
              <p className="text-blue-100 mb-6">
                Follow our structured curriculum to become an AI-powered HR leader. Each module builds upon the previous one, ensuring comprehensive understanding and practical application.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm text-blue-100">Total Weeks</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">55</div>
                  <div className="text-sm text-blue-100">Total Lessons</div>
                </div>
              </div>
              
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                View Full Curriculum
              </button>
            </div>
            
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{module.title}</div>
                    <div className="text-sm text-blue-100">{module.duration} • {module.lessons} lessons</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModules;