import React from 'react';

const FoundingAdvisorsPage = () => {
  const foundingAdvisors = [
    {
      name: 'Toroti Akogun',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Desmond Chen',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Susan P. Chen, Ph.D.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Vivian Chiu',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Cristal Feliciano',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Kim Freier',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Carlos Gallardo',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Deb Haas',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'KenNesha Hart',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Stacy R. Hastick',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Sarah Martinez',
      image: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Brannon Skillern',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Priya Tahiliani',
      image: 'https://images.pexels.com/photos/1181721/pexels-photo-1181721.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Stacey Talve',
      image: 'https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Surbhi Ugra',
      image: 'https://images.pexels.com/photos/1181729/pexels-photo-1181729.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Jesus Vidaurri',
      image: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Yu',
      image: 'https://images.pexels.com/photos/1181733/pexels-photo-1181733.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Rafael Zamora',
      image: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Katy Zorich',
      image: 'https://images.pexels.com/photos/1181737/pexels-photo-1181737.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Meet the <span className="text-blue-600">HR Pros</span> Behind the Scenes
          </h1>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-center">
            <div className="inline-block">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face"
                alt="Vanessa Gutierrez"
                className="w-64 h-64 rounded-full object-cover mx-auto mb-6 shadow-lg"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Vanessa Gutierrez</h3>
                <p className="text-gray-600 italic">Founder</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We came together to build a practitioner-led community that truly serves the needs of HR professionals across all disciplines.
            </p>
            <p>
              Our mission is rooted in the belief that the next wave of HR technology must be shaped by practitioners—those closest to the problems and best positioned to solve them. Without our active involvement, we risk repeating the cycle of adopting tools that don't meet our needs.
            </p>
            <p>
              The AI for HR Community is more than just a network—it's a collaborative space for HR professionals to learn, build, and push the boundaries of what's possible. Together, we're redefining what it means to be a modern HR professional in an AI-enabled world.
            </p>
          </div>
        </div>

        {/* Founding Advisors Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Founding Advisors
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            HR innovators who embody our "learn, share, and build" mission—seasoned CHROs, talent strategists, and AI-savvy people leaders from Fortune 500s, hyper-growth startups, and premier consultancies. United by people-first innovation and a give-more-than-you-get mindset, they steer the community's vision and keep every course, prompt, and playbook rooted in real-world HR impact.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {foundingAdvisors.map((advisor, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                {advisor.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join This Community of Leaders?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with these industry pioneers and hundreds of other forward-thinking HR professionals who are shaping the future of work with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
              Join the Community
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingAdvisorsPage;