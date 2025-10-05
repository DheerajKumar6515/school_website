
import 'remixicon/fonts/remixicon.css'
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  return (
    
    <footer className="bg-gray-800 text-white py-12" id='footer'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Logo and School Information */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold text-white">NS</h2>
          <p className="mt-4 text-gray-400 text-sm">
            123 School Road, Your City, Your State
          </p>
          <p className="mt-2 text-gray-400 text-sm">info@schoolname.com</p>
          <p className="mt-2 text-gray-400 text-sm">(123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact-us" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="ri-facebook-circle-line text-2xl"></i> {/* Add Font Awesome icons for social media */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="ri-twitter-x-line text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="ri-youtube-line text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-white">Subscribe to Our Newsletter</h3>
          <p className="mt-4 text-gray-400 text-sm">
            Stay updated with our latest news and events.
          </p>
          <form className="mt-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-600 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} NS Smart School. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

  );
}