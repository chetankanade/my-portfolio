import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-yellow-300 py-12 px-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Dev<span className="text-portfolio-accent">Portfolio</span>
            </a>
            <p className="mt-2 text-gray max-w-md">
              Creating responsive, accessible, and performant web experiences
              that deliver results.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            &copy; {currentYear} Chetan Kanade. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-black">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
