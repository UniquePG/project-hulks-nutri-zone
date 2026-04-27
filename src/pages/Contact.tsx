import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-20 text-center">
            <span className="text-brand-primary font-display font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Get in Touch</span>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase italic tracking-tighter mb-6 leading-none">
              Contact <span className="text-brand-primary text-gradient">The Zone</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Have questions about a product or need a custom trainer stack? Our team is ready to help you unleash your beast.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border-brand-primary/20 bg-brand-primary/5">
              <h3 className="font-display font-bold text-2xl uppercase italic mb-8 text-white">Direct Lines</h3>
              <div className="flex flex-col gap-8">
                <a href="tel:+918770506113" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-all shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary mb-1">Primary Call</div>
                    <div className="text-xl font-bold text-white/90">+91 8770506113 / 7415157538</div>
                  </div>
                </a>
                <a href="mailto:info@hulksnutrizone.com" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-black transition-all shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary mb-1">Email Support</div>
                    <div className="text-xl font-bold text-white/90">info@hulksnutrizone.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 shrink-0">
                    <MapPin size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-primary mb-1">Headquarters</div>
                    <div className="text-lg font-medium leading-tight text-white/80 italic">Near SBI atm, katariya chauraha, Dabra 475110</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border-white/5 bg-white/5">
              <h3 className="font-display font-bold text-xl uppercase italic mb-6 text-white text-gradient">Social Zone</h3>
              <div className="flex gap-4">
                <a href="#" className="flex-grow hulk-gradient py-4 rounded-xl flex items-center justify-center gap-2 text-black font-display font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-transform">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="#" className="flex-grow bg-white/5 border border-white/10 py-4 rounded-xl flex items-center justify-center gap-2 text-white/50 font-display font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                  <Facebook size={16} /> Facebook
                </a>
              </div>
            </div>

            <div className="aspect-video w-full rounded-3xl overflow-hidden grayscale border border-white/10 group relative">
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:opacity-0 transition-opacity z-10 pointer-events-none" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114674.8016462446!2d78.33120199023438!3d25.889600100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39773b06c888c3a9%3A0xe7f9f095af2f6e9b!2sDabra%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714152000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                id="maps-iframe"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10"
              id="contact-form"
            >
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase italic tracking-tighter mb-8 leading-tight">
                Send a <span className="text-brand-primary">Message</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-colors hover:border-white/20 text-white"
                      id="name-input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-display font-bold uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-colors hover:border-white/20 text-white"
                      id="email-input"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[10px] font-display font-bold uppercase tracking-widest text-white/40 ml-2">Subject</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-10 focus:outline-none focus:border-brand-primary transition-colors hover:border-white/20 appearance-none text-white"
                    id="subject-select"
                  >
                    <option className="bg-brand-secondary">Order Inquiry</option>
                    <option className="bg-brand-secondary">Product Question</option>
                    <option className="bg-brand-secondary">Trainer Consultation</option>
                    <option className="bg-brand-secondary">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] font-display font-bold uppercase tracking-widest text-white/40 ml-2">Your Message</label>
                <textarea 
                  rows={6} 
                  placeholder="How can we help the beast?" 
                  className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 focus:outline-none focus:border-brand-primary transition-colors hover:border-white/20 resize-none text-white"
                  id="message-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="w-full hulk-gradient py-5 rounded-2xl font-display font-black text-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_0_30px_rgba(163,230,53,0.4)]"
              >
                Launch Message <Send size={20} />
              </button>

              <div className="mt-8 text-center">
                 <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">
                   Usually responds within 2 hours
                 </p>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
