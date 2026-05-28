import { useState, useEffect } from 'react';
import { MdSearch, MdPersonOutline, MdShoppingCart } from "react-icons/md";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    // 1. New State to track which section is currently visible on screen
    const [activeSection, setActiveSection] = useState('entrees');

    // 2. The "Scroll Spy" Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['entrees', 'sides', 'beverages', 'desserts'];
            
            // Loop through each section to see where it is on the screen
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the screen (within 150px)
                    // and the bottom hasn't passed the top of the screen yet
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                    }
                }
            }
        };

        // Attach the listener when the component loads
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // The empty array means this runs once when the Navbar loads

    // Helper function to apply the active green underline
    const getLinkClass = (sectionName: string) => {
        const baseClass = "cursor-pointer transition-colors pb-1 border-b-2 ";
        // If it's the active section, make it primary color. Otherwise, make it transparent (hidden).
        return baseClass + (activeSection === sectionName ? "text-primary border-primary font-medium" : "border-transparent hover:text-primary hover:border-primary");
    };

    return (
        <nav className="sticky top-0 z-50 bg-background/95 border-b border-surface">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                
                <div className="w-16 md:w-auto flex items-center gap-2 md:gap-4">
                    <span className="font-logo text-xl md:text-2xl lg:text-3xl text-primary uppercase font-bold tracking-widest">
                        LUMINA
                    </span>
                </div>

                {/* 3. Updated Links with hrefs and dynamic active classes */}
                <ul className="hidden md:flex items-center justify-between gap-4 lg:gap-8 px-2 lg:px-4 py-1 lg:py-2 text-sm text-text-main">
                    <li><a href="#entrees" className={getLinkClass('entrees')}>Entrees</a></li>
                    <li><a href="#sides" className={getLinkClass('sides')}>Sides</a></li>
                    <li><a href="#beverages" className={getLinkClass('beverages')}>Beverages</a></li>
                    <li><a href="#desserts" className={getLinkClass('desserts')}>Desserts</a></li>
                </ul>

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
                    <button className="text-text-main hover:text-primary transition-colors p-2"><MdPersonOutline className="text-2xl" /></button>
                    <button className="text-text-main hover:text-primary transition-colors p-2 relative">
                        <MdShoppingCart className="text-2xl" />
                        <span className="absolute top-0 right-0 bg-primary text-background text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                </div>

            </div>
        </nav>
    );
}