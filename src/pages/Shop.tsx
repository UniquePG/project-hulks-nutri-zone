import { useState } from "react";
import { motion } from "motion/react";
import { Search, SlidersHorizontal, Grid, List as ListIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  { id: "1", name: "Massive Whey Isolate", price: "4,899", category: "Proteins", image: "https://images.unsplash.com/photo-1593095191071-8806300f284c?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "2", name: "Gamma Blast Pre-Workout", price: "2,499", category: "Performance", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
  { id: "3", name: "Pure Micronized Creatine", price: "1,299", category: "Core", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "4", name: "BCAAs Rocket Fuel", price: "1,899", category: "Recovery", image: "https://images.unsplash.com/photo-1610970882739-44936d6d494a?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
  { id: "5", name: "Vegan Hulk Protein", price: "3,499", category: "Proteins", image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "6", name: "Night Fury Casein", price: "3,999", category: "Recovery", image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
  { id: "7", name: "Alpha Multivitamin", price: "999", category: "Health", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "8", name: "Iron Grip Fat Burner", price: "1,799", category: "Performance", image: "https://images.unsplash.com/photo-1471864190281-ad5fe9ac5924?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
];

const categories = ["All", "Proteins", "Performance", "Recovery", "Core", "Health"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20" id="shop-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left pt-10">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase italic tracking-tighter mb-4">
            The <span className="text-brand-primary">Armor</span>y
          </h1>
          <p className="text-white/50 max-w-2xl">
            Everything you need to build the physique of your dreams. All products are verified for purity and potency.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
            <input 
              type="text" 
              placeholder="Search armor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-colors text-lg"
              id="shop-search"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-4 rounded-2xl font-display font-bold uppercase tracking-widest text-xs whitespace-nowrap transition-all border ${
                  selectedCategory === cat 
                    ? "hulk-gradient text-black border-transparent shadow-lg shadow-brand-primary/20" 
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <p className="text-sm font-display font-bold text-white/30 uppercase tracking-widest">
            Showing {filteredProducts.length} Results
          </p>
          <div className="flex gap-2">
            <button className="p-2 bg-white/5 text-brand-primary rounded-lg border border-brand-primary/20"><Grid size={20} /></button>
            <button className="p-2 bg-white/5 text-white/30 rounded-lg hover:text-white transition-colors"><ListIcon size={20} /></button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="py-40 text-center">
            <div className="text-brand-primary mb-4 flex justify-center">
              <Search size={64} className="opacity-20" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase italic">No armor found</h3>
            <p className="text-white/30">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
