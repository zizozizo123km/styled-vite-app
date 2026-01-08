const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand/About */}
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">ModernApp</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building the future, one component at a time. Dedicated to modern, responsive, and accessible web design.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Home</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Features</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Support Center</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">API Status</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-200">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: info@modernapp.com</p>
            <p className="text-sm text-gray-400 mt-2">Phone: (555) 123-4567</p>
            <div className="flex space-x-4 mt-4">
              {/* Simple Social Icons Placeholder */}
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.183.52.096.71-.225.71-.498 0-.246-.01-.898-.01-1.764-2.56.556-3.098-1.23-3.098-1.23-.418-1.06-.99-1.34-0.99-1.34-.81-.55.06-.54.06-.54.89.06 1.36 0.92 1.36 0.92.79 1.36 2.07 0.97 2.58 0.74.08-.57.31-.97.56-1.19-1.96-.22-4.02-0.98-4.02-4.37 0-.97.35-1.76.92-2.38-.09-.22-.4-.94.09-2.34 0 0 .75-.24 2.44 0.91.7-.19 1.44-.28 2.18-.28.74 0 1.48.09 2.18.28 1.69-1.15 2.44-.91 2.44-.91.49 1.4.18 2.12.09 2.34.57.62.92 1.41.92 2.38 0 3.4-2.06 4.15-4.03 4.37.31.27.59.81.59 1.64 0 1.19-.01 2.15-.01 2.44 0 .27.19.59.71.49C19.364 19.855 22 16.237 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 6.06c-.77.34-1.6.56-2.47.66.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.86-2.72 1.05-.78-.83-1.89-1.35-3.13-1.35-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11.99-3.57-.18-6.74-1.89-8.86-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.92 3.59-.7-.02-1.35-.21-1.92-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.54 1.7 2.11 2.94 3.97 2.98-1.48 1.16-3.35 1.86-5.38 1.86-.35 0-.69-.02-1.03-.06 1.92 1.23 4.19 1.95 6.63 1.95 8.01 0 12.39-6.64 12.39-12.39 0-.19-.01-.38-.01-.57.85-.61 1.58-1.37 2.16-2.24z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} ModernApp. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-indigo-400 transition duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;