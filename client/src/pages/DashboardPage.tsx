import { MdCheck, MdRestaurantMenu, MdDirectionsCar, MdHome, MdInfoOutline } from 'react-icons/md';
const orderHistory = [
    { id: 1, title: "Kyoto Platter & Miso", date: "Oct 24 • Delivered to 124 Park Ave", points: 120, price: 54.00, img: "/images/sushi.jpg" },
    { id: 2, title: "Black Truffle Wagyu", date: "Oct 18 • Delivered to 124 Park Ave", points: 85, price: 28.00, img: "/images/truffle-burger.jpg" },
    { id: 3, title: "Glazed Short Ribs", date: "Oct 12 • Dine-in Experience", points: 145, price: 34.00, img: "/images/smoked-ribs.jpg" },
];

export default function DashboardPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
            
            {/* Header */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                    Welcome back, <span className="text-primary">Julian</span>
                </h1>
                <p className="text-text-muted">Hungry? We've got something special for you tonight.</p>
            </div>

            {/* Top Grid: Status & Live Order */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Gold Elite Status Card */}
                <div className="bg-surface rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* SVG Donut Chart */}
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                            {/* Background track */}
                            <circle cx="64" cy="64" r="56" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-background" />
                            {/* Progress track (Approx 83% full) */}
                            <circle cx="64" cy="64" r="56" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="351" strokeDashoffset="60" strokeLinecap="round" className="text-primary" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-text-main leading-none">2,500</span>
                            <span className="text-[10px] text-text-muted uppercase tracking-wider">Points</span>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1 block">Gold Elite Status</span>
                        <h2 className="text-2xl font-bold mb-3">Almost Platinum</h2>
                        <p className="text-text-muted text-sm mb-6">
                            You're <span className="text-primary font-bold">500 pts</span> away from your next reward. Unlock a complimentary Chef's Dessert at 3,000 pts.
                        </p>
                        <button className="border border-primary text-primary hover:bg-primary/10 transition-colors px-6 py-2 rounded-full text-sm font-bold w-full md:w-auto">
                            Redeem Points
                        </button>
                    </div>
                </div>

                {/* Live Order Tracker Card */}
                <div className="bg-surface rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1 block">Live Order</span>
                            <h3 className="font-bold text-text-main">Order #LM-9240</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-text-muted text-[10px] uppercase tracking-wider block mb-1">Estimated arrival</span>
                            <span className="font-bold text-primary">12:45 PM</span>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative mb-10 px-4">
                        {/* Background Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-background rounded-full"></div>
                        {/* Active Line (Fills to step 2) */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1 bg-primary rounded-full"></div>
                        
                        <div className="relative flex justify-between">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center z-10"><MdCheck /></div>
                                <span className="text-[10px] text-text-main font-bold uppercase tracking-wider">Received</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center z-10"><MdRestaurantMenu /></div>
                                <span className="text-[10px] text-text-main font-bold uppercase tracking-wider">In Prep</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-background border border-surface text-text-muted flex items-center justify-center z-10"><MdDirectionsCar /></div>
                                <span className="text-[10px] text-text-muted uppercase tracking-wider">Ready</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-background border border-surface text-text-muted flex items-center justify-center z-10"><MdHome /></div>
                                <span className="text-[10px] text-text-muted uppercase tracking-wider">Arrived</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3 flex items-center gap-3 border border-white/5">
                        <MdInfoOutline className="text-primary text-lg" />
                        <p className="text-sm text-text-muted">Chef Marco is preparing your <span className="text-primary font-bold">Wagyu Burger</span>.</p>
                    </div>
                </div>

            </div>

            {/* Order History Section */}
            <section className="pt-4">
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-2xl font-bold">Order History</h2>
                    <button className="text-primary text-xs font-bold uppercase tracking-wider hover:underline underline-offset-4">
                        View Full History
                    </button>
                </div>

                <div className="space-y-4">
                    {orderHistory.map((order) => (
                        <div key={order.id} className="bg-surface rounded-xl p-4 border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors hover:border-primary/30">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="w-16 h-16 rounded-lg bg-background overflow-hidden flex-shrink-0">
                                    {/* Using a placeholder div if the image isn't available yet in public folder */}
                                    {order.img ? (
                                        <img src={order.img} alt={order.title} className="w-full h-full object-cover opacity-80" />
                                    ) : (
                                        <div className="w-full h-full bg-white/5"></div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main mb-1">{order.title}</h4>
                                    <p className="text-xs text-text-muted mb-1">{order.date}</p>
                                    <p className="text-xs text-primary font-bold">⭐ +{order.points} Points Earned</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between w-full md:w-auto md:gap-8 border-t border-white/5 md:border-0 pt-4 md:pt-0">
                                <span className="font-bold text-text-main">${order.price.toFixed(2)}</span>
                                <button className="bg-primary/10 text-primary hover:bg-primary hover:text-background transition-colors px-6 py-2 rounded-full text-sm font-bold">
                                    ↻ Reorder
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}