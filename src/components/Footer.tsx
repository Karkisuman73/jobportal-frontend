import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="flex flex-wrap ml-20 gap-x-12 gap-y-8 px-6 py-10 lg:ml-60 lg:space-x-30">
        
        <div>
          <p className="text-2xl font-medium mb-2 underline">Job Offers</p>
          <ul className="space-y-1">
            <li>Employers</li>
            <li>Part-time jobs</li>
            <li>Students</li>
            <li>NGO</li>
            <li>Remote work</li>
          </ul>
        </div>

        
        <div>
          <p className="text-2xl font-medium mb-2 underline">Support</p>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>New openings</li>
          </ul>
        </div>

         <div>
          <p className="text-2xl font-medium mb-2 underline">Follow Us</p>
          <ul className="space-y-2">
            <li>
              <a
                className="flex items-center gap-2 hover:text-blue-600"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-pink-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-blue-400"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
        © 2025 Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
