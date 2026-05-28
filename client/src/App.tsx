import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FullMenuPage from './pages/FullMenuPage';
import { useState } from 'react';
import CartDrawer from './components/CartDrawer';
import DashboardPage from './pages/DashboardPage';


export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  tag: string;
} 

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/30 text-text-main">
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <Routes>
          {/* The Home Page */}
          <Route path="/" element={<HomePage />} />
          {/* The New Full Menu Page */}
          <Route path="/menu" element={<FullMenuPage />} />
          <Route path="/account" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;