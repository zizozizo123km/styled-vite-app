const CtaBanner = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gray-800 p-8 sm:p-16 lg:p-24 shadow-2xl">
          
          {/* Background Decoration */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#radial-gradient-cta)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="radial-gradient-cta">
                <stop stopColor="#8b5cf6" /> {/* Violet-500 */}
                <stop offset={1} stopColor="#1f2937" /> {/* Gray-800 */}
              </radialGradient>
            </defs>
          </svg>
          
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Ready to elevate your project?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join thousands of satisfied customers who trust our expertise to deliver cutting-edge solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-violet-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition duration-300"
              >
                Start Your Free Trial
              </a>
              <a href="#" className="text-lg font-semibold leading-6 text-white hover:text-gray-300 transition duration-300">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;