const statsData = [
  { id: 1, name: 'Projects Completed', value: '340+', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 2, name: 'Happy Clients', value: '150+', icon: 'M17.65 6.35A7.95 7.95 0 0012 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8c0-1.85-.63-3.55-1.65-4.95zM12 16a4 4 0 100-8 4 4 0 000 8z' },
  { id: 3, name: 'Years Experience', value: '12', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 4, name: 'Awards Won', value: '25', icon: 'M11.04 20.29l-5.87-5.87a1 1 0 010-1.41l5.87-5.87a1 1 0 011.41 0l5.87 5.87a1 1 0 010 1.41l-5.87 5.87a1 1 0 01-1.41 0z' },
];

const StatsDisplay = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Achievements
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Numbers speak louder than words. See our impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-1 border-t-4 border-indigo-500 dark:border-indigo-400"
            >
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={stat.icon}
                  ></path>
                </svg>
              </div>
              <p className="text-5xl font-extrabold text-gray-900 dark:text-white text-center">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400 text-center">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsDisplay;