import { motion } from "motion/react";
import { ShoppingCart, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  isTrainerChoice?: boolean;
  key?: string | number;
}

export default function ProductCard({ id, name, price, image, category, isTrainerChoice }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card rounded-2xl overflow-hidden neon-border"
      id={`product-${id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-black/20">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {isTrainerChoice && (
          <div className="absolute top-4 left-4 hulk-gradient px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_10px_rgba(163,230,53,0.5)]">
            <ShieldCheck size={12} className="text-black" />
            <span className="text-[10px] font-display font-bold text-black uppercase tracking-wider">Trainer's Choice</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="hulk-gradient w-full py-3 rounded-lg font-display font-bold text-black uppercase tracking-widest flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <ShoppingCart size={18} />
            Add to Pack
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-display font-bold text-brand-primary uppercase tracking-[0.2em]">{category}</span>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={10} fill="currentColor" />
            <span className="text-xs font-bold text-white">4.9</span>
          </div>
        </div>
        <h3 className="font-display font-bold text-lg mb-4 group-hover:text-brand-primary transition-colors leading-tight">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-display font-bold italic tracking-tighter">
            ₹{price}
          </span>
          <Link 
            to={`/shop`} 
            className="text-[10px] font-display font-bold uppercase tracking-widest text-white/50 hover:text-brand-primary transition-colors underline underline-offset-4"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
