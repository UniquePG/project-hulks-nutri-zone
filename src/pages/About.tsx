import { motion } from "motion/react";
import { Users, History, Award, CheckCircle2, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="py-20" id="about-page">
      <section className="relative py-24 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase italic tracking-tighter mb-8 leading-none">
              Born to <br /> <span className="text-brand-primary text-gradient">Conquer</span>
            </h1>
            <p className="text-white/50 max-w-3xl mx-auto text-xl leading-relaxed">
              Hulks Nutri Zone isn't just a supplement store—it's a sanctuary for the dedicated. We believe every beast deserves the highest quality fuel to break their limits.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
             <div className="aspect-square rounded-[3rem] overflow-hidden neon-glow">
               <img 
                 src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                 alt="Gym Culture"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
             </div>
             <div className="absolute -bottom-6 -left-6 hulk-gradient p-10 rounded-3xl shadow-2xl flex flex-col items-center">
               <Trophy className="text-black mb-4" size={40} />
               <div className="font-display font-black text-4xl text-black">100%</div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-black/60">Authenticity</div>
             </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="text-brand-primary font-display font-bold uppercase tracking-[0.4em] text-xs">Our Heritage</span>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase italic tracking-tighter leading-tight">
              The <span className="text-brand-primary">Beast</span> Protocol
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Founded in Dabra with a single mission: to eliminate the counterfeit supplement market and provide athletes with 100% genuine nutrition. We've grown from a small enthusiast shop to the region's most trusted zone for fitness excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: History, title: "10+ Years", desc: "Of fitness obsession" },
                { icon: Users, title: "1.3K+ Beasts", desc: "In our community" },
                { icon: Award, title: "Certified", desc: "Expert guidance" },
                { icon: CheckCircle2, title: "Verified", desc: "Batch tested purity" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <item.icon className="text-brand-primary" size={24} />
                  <h4 className="font-display font-bold uppercase tracking-widest text-sm">{item.title}</h4>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-32">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic tracking-tighter mb-16">
            Meet the <span className="text-brand-primary">Force</span> Behind the Zone
          </h2>
          <div className="flex justify-center">
            <div className="glass-card p-12 rounded-[3.5rem] border-brand-primary/20 max-w-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
               <div className="relative z-10">
                 <div className="w-32 h-32 rounded-full hulk-gradient mx-auto mb-8 shadow-[0_0_40px_rgba(163,230,53,0.5)] border-4 border-black border-dashed animate-[spin_20s_linear_infinite]" />
                 <h3 className="font-display font-black text-3xl uppercase italic tracking-tighter mb-2">Coach Ajay Gurjar</h3>
                 <p className="text-brand-primary font-display font-bold uppercase tracking-widest text-xs mb-8">Founder & Head Trainer</p>
                 <p className="text-white/60 italic leading-relaxed mb-8">
                   "Nutrition is 70% of the game. My goal is to make sure you're not wasting that effort on supplements that don't work. We bring you the elite selection used by pros."
                 </p>
                 <div className="flex justify-center gap-6">
                   <div className="text-center px-6 border-r border-white/10">
                     <div className="font-display font-bold text-2xl text-white">46</div>
                     <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Expert Posts</div>
                   </div>
                   <div className="text-center px-6">
                     <div className="font-display font-bold text-2xl text-white">284</div>
                     <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Zone Followers</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
