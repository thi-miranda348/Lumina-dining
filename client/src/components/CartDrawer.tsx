import { MdClose, MdDeleteOutline } from "react-icons/md";

const mockCartItems = [
    { id: 1, name: "Wagyu Burger", quantity: 2, price: 32.00, imageUrl: "/images/truffle-burger.jpg", description: "Double patty, aged cheddar" },
    { id: 5, name: "Truffle Fries", quantity: 1, price: 10.00, imageUrl: "/images/parmesan-fries.jpg", description: "Parmesan, truffle oil dust" }
];

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <>
            {/* The Background Overlay (Darkens the screen when cart is open) */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* The Slide-Out Drawer */}
            <div 
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-background border-l border-surface z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-surface">
                    <div className="flex items-center gap-4">
                        <button onClick={onClose} className="text-text-muted hover:text-text-main transition-colors">
                            <MdClose className="text-2xl" />
                        </button>
                        <h2 className="text-xl font-bold">Your Order</h2>
                    </div>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        ★ 400 Points
                    </span>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {mockCartItems.map(item => (
                        <div key={item.id} className="flex gap-4">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold">{item.name}</h3>
                                    <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                                </div>
                                <p className="text-text-muted text-xs mb-3">{item.description}</p>
                                
                                <div className="flex items-center justify-between">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center bg-surface rounded-full px-3 py-1 w-24 justify-between border border-white/5">
                                        <button className="text-text-muted hover:text-text-main font-bold">−</button>
                                        <span className="text-sm font-bold">{item.quantity}</span>
                                        <button className="text-text-muted hover:text-text-main font-bold">+</button>
                                    </div>
                                    
                                    {/* Delete Button */}
                                    <button className="text-text-muted hover:text-red-400 transition-colors">
                                        <MdDeleteOutline className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Drawer Footer (Checkout Logic) */}
                <div className="p-6 border-t border-surface bg-background">
                    
                    {/* Points Toggle */}
                    <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-white/5 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">🎁</div>
                            <div>
                                <h4 className="font-bold text-sm">Redeem Points</h4>
                                <p className="text-text-muted text-xs">Apply 400 Points for $5 off</p>
                            </div>
                        </div>
                        {/* CSS Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="flex justify-between items-center mb-6 text-sm">
                        <span className="text-text-muted">Points to Earn</span>
                        <span className="text-primary font-bold">+45 Points</span>
                    </div>

                    {/* Receipt Math */}
                    <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between">
                            <span className="text-text-muted">Subtotal</span>
                            <span>$42.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-text-muted">Tax</span>
                            <span>$3.50</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-primary font-bold">Reward Discount</span>
                            <span className="text-primary font-bold">-$5.00</span>
                        </div>
                        <div className="flex justify-between pt-4 border-t border-surface items-end">
                            <span className="text-xl font-bold">Total</span>
                            <span className="text-2xl font-bold">$40.50</span>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-background font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex justify-center items-center gap-2">
                        Checkout ➔
                    </button>
                    <p className="text-center text-[10px] text-text-muted mt-4">
                        Prices include applicable taxes and service fees.
                    </p>
                </div>

            </div>
        </>
    );
}