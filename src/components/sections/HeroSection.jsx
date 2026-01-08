const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Blob/Shape (Optional, for visual interest) */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0H0V810H1440V0Z"
            fill="url(#paint0_linear_1_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2"
              x1="720"
              y1="0"
              x2="720"
              y2="810"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366F1" stopOpacity="0.1" />
              <stop offset="1" stopColor="#F9FAFB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Pre-title Tag */}
          <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300 mb-4">
            الابتكار يلتقي بالتصميم
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            حلول ويب عصرية
            <br className="hidden sm:inline" />
            <span className="text-indigo-600 dark:text-indigo-400">
              لنمو أعمالك الرقمية
            </span>
          </h1>

          {/* Subtitle/Description */}
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            نحن نبني تجارب مستخدم سلسة ومواقع سريعة الاستجابة باستخدام أحدث التقنيات مثل React وVite وTailwind CSS.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
            >
              اكتشف خدماتنا
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
            >
              تحدث مع خبير
            </a>
          </div>
        </div>

        {/* Hero Image/Mockup (Optional) */}
        <div className="mt-16 md:mt-24">
          <div className="relative mx-auto max-w-6xl">
            <img
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 transform transition duration-500 hover:scale-[1.01]"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern web development interface mockup"
            />
            {/* Optional: Floating elements for dynamism */}
            <div className="absolute top-0 -left-4 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 -right-4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;