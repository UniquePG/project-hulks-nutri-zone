import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 hulk-gradient rounded-lg flex items-center justify-center">
                <Dumbbell className="text-black" size={24} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">
                Hulks <span className="text-brand-primary">Nutri</span> Zone
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed text-sm">
              Premium supplement destination for elite athletes and fitness enthusiasts. Certified trainers help you reach your goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-brand-primary mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-brand-primary transition-colors">Shop All</Link></li>
              <li><Link to="/trainer-choice" className="hover:text-brand-primary transition-colors">Trainer's Choice</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-brand-primary mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary" />
                <span>+91 8770506113</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary" />
                <span>info@hulksnutrizone.com</span>
              </li>
              <li className="flex items-center gap-3 italic">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <span>Near SBI atm, katariya chauraha, Dabra 475110</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-brand-primary mb-6">Newsletter</h4>
            <p className="text-xs text-white/50 mb-4">Get the latest workout plans and discount updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-brand-primary transition-colors"
                id="newsletter-email"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1.5 hulk-gradient px-3 py-1.5 rounded-md text-black font-bold text-xs uppercase"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Hulks Nutri Zone. Unleash The Beast.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
