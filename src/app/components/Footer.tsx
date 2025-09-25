const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We provide the best travel and tech solutions to make your life
              easier and more exciting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" className="hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.936 4.936 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.924 4.924 0 0 0-8.384 4.482c-4.09-.205-7.719-2.165-10.148-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.215 2.188 4.099a4.904 4.904 0 0 1-2.229-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.936 4.936 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm3.703 8.517h-1.44c-.777 0-.928.369-.928.91v1.193h2.33l-.303 2.337h-2.027V19h-2.416v-5.044H9.387v-2.337h2.228V9.418c0-2.206 1.349-3.411 3.324-3.411.946 0 1.759.07 1.995.102v2.408z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 YourCompany. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
