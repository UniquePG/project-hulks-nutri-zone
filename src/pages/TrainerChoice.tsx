import { motion } from "motion/react";
import { ShieldCheck, Zap, Flame, Heart, TrendingUp, Info } from "lucide-react";
import { Link } from "react-router-dom";

const stacks = [
  {
    id: "bulk-king",
    name: "The Bulk King Stack",
    objective: "Maximum Mass & Strength",
    trainer: "Coach Ajay Gurjar",
    products: ["Massive Whey Isolate", "Pure Micronized Creatine", "Mass Gainer Pro"],
    benefits: ["Explosive strength", "Fast recovery", "Dense muscle gain"],
    price: "8,999",
    color: "from-brand-primary/20",
    icon: TrendingUp,
  },
  {
    id: "shred-master",
    name: "Shred Master Stack",
    objective: "Lean Muscle & Fat Loss",
    trainer: "Coach Ajay Gurjar",
    products: ["Whey Isolate", "Fat Burner Pro", "BCAAs Rocket Fuel"],
    benefits: ["Increased calorie burn", "Muscle retention", "Extreme focus"],
    price: "6,499",
    color: "from-orange-500/20",
    icon: Flame,
  },
  {
    id: "daily-beast",
    name: "Daily Beast Core",
    objective: "Vitality & Performance",
    trainer: "Coach Ajay Gurjar",
    products: ["Alpha Multivitamin", "Fish Oil Plus", "ZMA Recovery"],
    benefits: ["Immune support", "Better sleep", "Joint health"],
    price: "3,299",
    color: "from-blue-500/20",
    icon: Heart,
  }
];

export default function TrainerChoice() {
  return (
    <div className="py-20" id="trainer-choice-page">
      {/* Hero */}
      <section className="relative py-24 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 -skew-y-3 origin-center scale-110" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 mx-auto">
              <ShieldCheck size={14} className="text-brand-primary" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-brand-primary">Certified Trainer Verified</span>
            </div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase italic tracking-tighter mb-6 leading-none">
              Expert <span className="text-brand-primary">Stacks</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Don't guess your nutrition. These combinations are optimized for synergy, ensuring every supplement works with the other for maximum results.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card rounded-[2.5rem] p-8 border-brand-primary/10 hover:border-brand-primary/30 transition-all flex flex-col group overflow-hidden`}
              id={`stack-${stack.id}`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${stack.color} to-transparent blur-3xl -mr-32 -mt-32 opacity-50`} />
              
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 transition-transform group-hover:scale-110">
                  <stack.icon className="text-brand-primary" size={28} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary mb-1">Objective</div>
                  <div className="text-sm font-bold text-white/90">{stack.objective}</div>
                </div>
              </div>

              <h2 className="font-display font-black text-3xl uppercase italic tracking-tighter mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                {stack.name}
              </h2>

              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                  <ShieldCheck size={12} className="text-brand-primary" />
                </div>
                <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Recommended by {stack.trainer}</span>
              </div>

              <div className="flex-grow mb-8">
                <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Pack Includes:</h4>
                <ul className="flex flex-col gap-3">
                  {stack.products.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                      <Zap size={14} className="text-brand-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white/30 mt-8 mb-4">Key Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.benefits.map((b) => (
                    <span key={b} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/50 font-bold uppercase">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-display font-bold uppercase tracking-widest text-white/30 mb-1">Stack Price</div>
                  <div className="text-3xl font-display font-bold italic tracking-tighter">₹{stack.price}</div>
                </div>
                <button className="hulk-gradient px-8 py-4 rounded-2xl font-display font-black text-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                  Buy Bundle
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Advice CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 glass-card rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border-brand-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/5 animate-pulse z-0" />
          <div className="relative z-10 md:max-w-xl">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic tracking-tighter mb-6 leading-tight">
              Need a <span className="text-brand-primary underline decoration-brand-primary/30">Custom</span> Stack?
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Every body is different. If none of these presets fit your specific metabolism or split, our trainers can design a unique stack just for you.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 text-brand-primary font-display font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all"
            >
              Consult with Coach Ajay <Zap size={18} />
            </Link>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <div className="glass-card p-8 rounded-3xl border-white/10 bg-black/40 backdrop-blur-3xl min-w-[300px]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-display font-black text-xl text-black">1</div>
                  <p className="text-sm font-bold uppercase tracking-widest">Share Your Goals</p>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-display font-black text-xl">2</div>
                  <p className="text-sm font-bold uppercase tracking-widest">Expert Analysis</p>
                </div>
                <div className="flex items-center gap-4 opacity-30">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-display font-black text-xl">3</div>
                  <p className="text-sm font-bold uppercase tracking-widest">Recieve Armor</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Maximum Synergy",
                desc: "Ingredients are chosen to enhance each other's effects, like Caffeine with L-Theanine for focus without jitters."
              },
              {
                title: "Optimized Timing",
                desc: "Each stack comes with a precise timing guide so you know exactly when to fuel for peak performance."
              },
              {
                title: "Cost Efficiency",
                desc: "Buying these bundles saves you up to 15% compared to purchasing individual tubs separately."
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <Info className="text-brand-primary shrink-0" size={24} />
                <div>
                  <h3 className="font-display font-bold uppercase tracking-widest text-white/90 mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
