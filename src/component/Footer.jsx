
import FacbookImg from "../assets/Facebook.png";
import InstImg from "../assets/Instagram.png";
import TwxImg from "../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="AI Hub Logo" className="h-10 w-auto" />
              <h2 className="text-3xl font-bold tracking-tighter text-white">

              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
            </p>

            {/* <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
                            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaDiscord /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                        </div> */}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            <div className="md:col-span-3">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Resources</h3>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Social Links</h3>
              <ul className="flex gap-2 space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-white"><img src={FacbookImg} alt="" /></a></li>
                <li><a href="#" className="hover:text-white"><img src={InstImg} alt="" /></a></li>
                <li><a href="#" className="hover:text-white"><img src={TwxImg} alt="" /></a></li>
                
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

          <div className="md:col-span-3">
            <ul className="space-y-4 text-zinc-400 flex gap-3 ">
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
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Made with ❤️ for AI enthusiasts
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;