import React from 'react';

// Mock data for features
const features = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Lightning Fast Performance',
    description: 'Optimized infrastructure ensures minimal load times and maximum responsiveness across all devices.',
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Seamless Integration',
    description: 'Connect effortlessly with your existing tools and services using our robust API and webhooks.',
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Dedicated Support',
    description: 'Our expert team is available around the clock to assist you with any issues or questions you may have.',
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'Protect your data with advanced encryption, multi-factor authentication, and continuous monitoring.',
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 18H7.5m9-12h3.75m-3.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5" />
      </svg>
    ),
    title: 'Fully Customizable Dashboards',
    description: 'Tailor your workspace to fit your exact needs with drag-and-drop widgets and personalized layouts.',
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-1.814 8.25 8.25 0 013 7.048z" />
      </svg>
    ),
    title: 'Scalable Architecture',
    description: 'Grow without limits. Our infrastructure scales automatically to handle massive traffic spikes.',
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <div className="p-6 md:p-8 border border-indigo-900/50 rounded-xl shadow-2xl bg-gray-800/50 backdrop-blur-sm transition duration-300 hover:bg-gray-700/60 hover:border-indigo-600/70 transform hover:-translate-y-1">
      <div className="mb-4 text-indigo-400">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const FeaturesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-400 font-semibold uppercase tracking-wider text-sm">
            Core Capabilities
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Built for the Future of Digital Experience
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Discover the powerful features that set us apart and enable you to achieve unprecedented results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturesGrid;