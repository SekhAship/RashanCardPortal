import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="text-gray-600 body-font bg-blue-gray-800">
        {/* Main */}
        <div className="container px-5 py-5 mx-auto flex flex-wrap justify-between items-start">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-3">Quick Links</h3>
            <ul className="text-gray-200 space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/service" className="hover:underline">Service</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link to="/district-login" className="hover:underline">District Login</Link>
              </li>
              <li>
                <Link to="/partner-login" className="hover:underline">Partner Login</Link>
              </li>
              <li>
                <Link to="/register-operator" className="hover:underline">Register as Operator</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-3">Information</h3>
            <ul className="text-gray-200 space-y-2">
              <li>
                <Link to="/faqs" className="hover:underline">FAQs</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">Privacy &amp; Cookie</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:underline">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/operator-agreement" className="hover:underline">Operator Agreement</Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="w-full md:w-1/3">
            <h3 className="text-white text-lg font-bold mb-3">Address</h3>
            <ul className="text-gray-200 space-y-2">
              <li>
                <a
                  href="mailto:gautammanpur02@gmail.com"
                  className="hover:underline"
                >
                  <i className="fa-solid fa-envelope mr-2"></i>
                  gautammanpur02@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:8978375748" className="hover:underline">
                  <i className="fa-solid fa-phone mr-2"></i>
                  8978375748
                </a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot mr-2"></i>
                Word No 19, Netaji Nagar, Madhyamgram, Kolkata 700132
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container px-5 py-4 mx-auto flex justify-between items-center border-t border-gray-700 mt-4">
          
          {/* Social Media */}
          <span className="inline-flex">
            <a href="#" className="text-gray-100 hover:text-blue-400 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-100 hover:text-blue-400 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-100 hover:text-pink-400 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-100 hover:text-blue-600 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
