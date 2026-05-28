import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import type { MenuItem } from '../App';

export default function FullMenuPage() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State for the active filter button
  const [activeFilter, setActiveFilter] = useState('All');

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

  if (isLoading) return <div className="min-h-screen flex items-center justify-center text-primary font-bold animate-pulse">LOADING MENU...</div>;

  // The Filter Logic
  const filteredData = activeFilter === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeFilter);

  const categories = ['All', 'Entrees', 'Sides', 'Beverages', 'Desserts'];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b border-surface pb-6">

        {/* Dynamic Category Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-2 md:px-4 py-2 rounded-full text-sm font-bold tracking-wider transition-all ${
                activeFilter === category 
                ? 'bg-primary text-background' 
                : 'border border-surface text-text-muted hover:border-primary/50 hover:text-text-main'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Render the filtered grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

    </main>
  );
}