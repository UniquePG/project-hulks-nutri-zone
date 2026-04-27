import { motion } from "motion/react";
import { ArrowRight, Zap, Target, Shield, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Massive Whey Isolate",
    price: "4,899",
    category: "Proteins",
    image: "https://images.unsplash.com/photo-1593095191071-8806300f284c?q=80&w=2070&auto=format&fit=crop",
    isTrainerChoice: true,
  },
  {
    id: "2",
    name: "Gamma Blast Pre-Workout",
    price: "2,499",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop",
    isTrainerChoice: false,
  },
  {
    id: "3",
    name: "Pure Micronized Creatine",
    price: "1,299",
    category: "Core",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    isTrainerChoice: true,
  },
  {
    id: "4",
    name: "BCAAs Rocket Fuel",
    price: "1,899",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1610970882739-44936d6d494a?q=80&w=2070&auto=format&fit=crop",
    isTrainerChoice: false,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden" id="home-page">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-secondary to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 neon-glow">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-brand-primary">Authenticity Guaranteed 100%</span>
              </div>
              <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase italic leading-[0.85] mb-8">
                Unleash Your <br />
                <span className="text-brand-primary">Inner Hulk</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
                Elite performance supplements for those who refuse to be average. Certified by experts, fueld by science, and made for the beasts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="hulk-gradient px-10 py-5 rounded-full font-display font-black text-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                  Explore Shop <ArrowRight size={20} />
                </Link>
                <Link to="/trainer-choice" className="glass-card px-10 py-5 rounded-full font-display font-black text-white uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Trainer's Choice
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute right-8 bottom-24 hidden xl:flex flex-col gap-8">
          {[
            { label: "Active Beasts", value: "1.3K+" },
            { label: "Orders Fulfilled", value: "10K+" },
            { label: "Expert Trainers", value: "25+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-right"
            >
              <div className="text-4xl font-display font-black italic tracking-tighter text-brand-primary">{stat.value}</div>
              <div className="text-[10px] font-display font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Lab Tested", desc: "100% Safe Formulas" },
              { icon: Zap, title: "Fast Delivery", desc: "All India Shipping" },
              { icon: Target, title: "Expert Curated", desc: "Trainer Picked Stacks" },
              { icon: Trophy, title: "Premium Quality", desc: "Top Global Brands" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group hover:border-brand-primary transition-colors">
                  <item.icon className="text-brand-primary group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wider text-sm">{item.title}</h3>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <span className="text-brand-primary font-display font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Hulk Specials</span>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter leading-tight">
                Top <span className="text-brand-primary">Smashed</span> <br /> Categories
              </h2>
            </div>
            <Link 
              to="/shop" 
              className="group flex items-center gap-3 font-display font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors mb-4"
            >
              View Full Armor <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                isTrainerChoice={product.isTrainerChoice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Choice Highlight */}
      <section className="py-32 bg-brand-primary/5 border-y border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden neon-glow border-2 border-brand-primary/30">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Certified Trainer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl border-brand-primary/50 border shadow-2xl max-w-xs">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#a3e635" className="text-brand-primary" />)}
                </div>
                <p className="text-sm italic text-white/90 mb-4 font-medium leading-relaxed">
                  "I've verified every batch here. Hulks Nutri Zone only stocks what actually delivers results for my athletes."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full hulk-gradient" />
                  <div>
                    <div className="font-display font-bold text-xs uppercase tracking-wider">Coach Ajay Gurjar</div>
                    <div className="text-[10px] text-brand-primary uppercase font-bold tracking-widest">Certified Pro Trainer</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">
              <span className="text-brand-primary font-display font-bold uppercase tracking-[0.4em] text-xs">The Expert Edge</span>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter leading-[0.9]">
                Expert <span className="text-brand-primary">Verified</span> Choice
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Dont waste money on fillers. Our certified trainers handpick the most effective combinations (stacks) based on your specific goals—whether it is shredding fat, building raw strength, or maximum recovery.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Science backed dosages",
                  "No banned substances",
                  "Maximum bioavailability",
                  "Performance optimized",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-display font-bold uppercase tracking-wider">
                    <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center">
                      <Zap size={12} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/trainer-choice" 
                className="hulk-gradient self-start px-12 py-5 rounded-full font-display font-black text-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
              >
                See Trainer Stacks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative border-brand-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full -ml-48 -mb-48" />
            
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase italic tracking-tighter leading-none mb-8 relative z-10">
              Ready to <span className="text-brand-primary underline decoration-brand-primary/30">Bulk Up</span>?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 relative z-10">
              Join the elite zone. Subscribe now for 10% off your first certified trainer stack and get access to exclusive workout guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/shop" className="hulk-gradient px-12 py-6 rounded-full font-display font-black text-black uppercase tracking-widest hover:scale-105 transition-transform">
                Start Shopping Now
              </Link>
              <Link to="/contact" className="bg-white/5 hover:bg-white/10 px-12 py-6 rounded-full font-display font-bold uppercase tracking-widest transition-colors border border-white/10">
                Contact an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
