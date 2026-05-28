import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import type { MenuItem } from '../App';

export default function HomePage() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/menu');
        const data = await response.json();
        setMenuData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch:", error);
        setIsLoading(false);
      }
    };
    fetchMenuData();
  }, []);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center text-primary font-bold animate-pulse">LOADING...</div>;

  const specialsData = menuData.filter(item => item.id === 1 || item.id === 5);
  // Only grab the first 3 entrees for the homepage preview
  const featuredEntrees = menuData.filter(item => item.category === "Entrees" && item.id !== 1).slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">

      <section className="pt-4">
        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1 block">Curated Selection</span>
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Chef's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialsData.map((item, index) => (
            <div key={item.id} className={`bg-surface rounded-2xl overflow-hidden relative flex flex-col justify-end min-h-[380px] p-6 border border-white/5 shadow-xl ${index === 0 ? 'md:col-span-2 p-8' : 'col-span-1'}`}>
              <img src={item.imageUrl} alt={item.name} loading="eager" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className={`relative z-10 ${index === 0 ? 'w-full md:w-3/4' : 'w-full'}`}>
                <h3 className={`${index === 0 ? 'text-3xl' : 'text-xl'} font-bold mb-2`}>{item.name}</h3>
                <p className="text-text-muted text-sm mb-6 line-clamp-2">{item.description}</p>
                <div className={`flex mt-auto ${index === 0
                    ? 'flex-row items-center justify-between lg:justify-start gap-4'
                    : 'flex-row items-center justify-between gap-4 lg:flex-col lg:items-start lg:gap-3'
                  }`}>

                  {/* The Price */}
                  <span className={`${index === 0 ? 'text-2xl' : 'text-lg'} text-primary font-bold`}>
                    ${item.price.toFixed(2)}
                  </span>

                  {/* The Button */}
                  <button className={`${index === 0
                      ? 'bg-primary text-background px-8'
                      : 'lg:w-full border border-primary text-primary px-4 hover:bg-primary/10'
                    } py-2.5 text-sm font-bold rounded-full transition-colors`}
                  >
                    {index === 0 ? 'Add to Cart' : 'Quick Add'}
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-8 border-t border-surface text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-left">Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          {featuredEntrees.map(item => <ProductCard key={item.id} item={item} />)}
        </div>

        {/* The Link to the new page */}
        <Link to="/menu" className="inline-block rounded-sm font-bold text-lg px-12 py-4 hover:scale-105 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
          See All Products ➔
        </Link>
      </section>

    </main>
  );
}