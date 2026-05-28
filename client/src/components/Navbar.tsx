import { useState } from 'react';
import { MdSearch, MdPersonOutline, MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/95 border-b border-surface">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                
                {/* Left: Logo Area */}
                <div className="w-16 md:w-auto flex items-center gap-2 md:gap-4">
                    <Link to="/" className="font-logo text-xl md:text-2xl lg:text-3xl text-primary uppercase font-bold tracking-widest">
                        LUMINA
                    </Link>
                </div>

                {/* Middle: Clean Navigation to the new page */}
                <div className="hidden md:flex items-center">
                    <Link to="/menu" className="text-sm font-bold text-text-main hover:text-primary transition-colors uppercase tracking-wider">
                        Full Menu
                    </Link>
                </div>

                {/* Right: Search and Icons */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="relative flex items-center">
                        <button 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={`text-text-main hover:text-primary transition-colors p-2 z-10 ${isSearchOpen ? 'absolute right-0' : 'relative'}`}
                        >
                            <MdSearch className="text-2xl" />
                        </button>
                        <input 
                            type="text" 
                            className={`bg-surface border border-surface text-text-main text-sm rounded-sm focus:outline-none focus:border-primary transition-all duration-300 ease-in-out ${
                                isSearchOpen ? 'w-36 md:w-48 pl-4 py-1.5 opacity-100' : 'w-0 pl-0 pr-0 py-1.5 opacity-0 pointer-events-none'
                            }`} 
                            placeholder="Search..."
                        />
                    </div>
                    <button className="text-text-main hover:text-primary transition-colors p-2">
                        <MdPersonOutline className="text-2xl" />
                    </button>
                    <button className="text-text-main hover:text-primary transition-colors p-2 relative">
                        <MdShoppingCart className="text-2xl" />
                        <span className="absolute top-0 right-0 bg-primary text-background text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                </div>

            </div>
        </nav>
    );
}