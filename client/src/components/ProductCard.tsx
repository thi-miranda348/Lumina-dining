import { MdShoppingCart } from "react-icons/md";

// Defining the TypeScript interface for your JSON data
interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    tag: string;
}

export default function ProductCard({ item }: { item: MenuItem }) {
    return (
        <div className="bg-surface rounded-xl overflow-hidden flex flex-col h-full border border-white/5">
            {/* Image Container */}
            <div className="relative h-48 w-full">
                <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-full h-full object-cover" 
                />

                {item.category && (
                    <span className="absolute top-3 left-3 bg-background/20 text-primary text-[10px] font-bold px-2 py-1 rounded-sm tracking-wider backdrop-blur-sm">
                        {item.category}
                    </span>
                )}
            </div>
            
            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-text-main font-bold text-lg">{item.name}</h3>
                    <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                </div>
                
                <p className="text-text-muted text-sm flex-grow mb-6 line-clamp-2">
                    {item.description}
                </p>
                
                {/* Standard Add to Cart Button */}
                <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-text-main text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <MdShoppingCart className="text-lg" /> Add to Cart
                </button>
            </div>
        </div>
    );
}