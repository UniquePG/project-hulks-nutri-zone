import { Link, NavLink } from "react-router-dom";
import { Dumbbell, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Trainer's Choice", path: "/trainer-choice" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-secondary/80 backdrop-blur-xl border-b border-white/10" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 hulk-gradient rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(163,230,53,0.5)]">
              <Dumbbell className="text-black" size={24} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">
              Hulks <span className="text-brand-primary">Nutri</span> Zone
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-display font-medium text-sm uppercase tracking-widest transition-colors hover:text-brand-primary ${
                    isActive ? "text-brand-primary" : "text-white/70"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 hulk-gradient rounded-full text-[10px] flex items-center justify-center font-bold text-black border-2 border-brand-secondary">
                0
              </span>
            </button>
            <Link
              to="/shop"
              className="hulk-gradient px-6 py-2 rounded-full font-display font-bold text-sm text-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform"
            >
              Get Jacked
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-brand-secondary border-b border-white/10 px-4 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-2xl uppercase tracking-tighter italic hover:text-brand-primary transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              <button className="flex items-center justify-between w-full font-display font-bold uppercase py-2">
                <span>View Cart</span>
                <ShoppingCart size={24} className="text-brand-primary" />
              </button>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="hulk-gradient w-full py-4 rounded-lg font-display font-bold text-lg text-black uppercase tracking-widest text-center"
              >
                Get Jacked
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
