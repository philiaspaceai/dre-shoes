import { Heart, Search, ShoppingBag, Play, ChevronLeft, ChevronRight, Menu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Utility Top Bar */}
      <div className="bg-black text-[10px] font-bold tracking-widest uppercase text-white py-[8px] px-8 flex justify-between items-center hidden md:flex">
        <div className="flex items-center">
          <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/>
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent transition-colors">Find a Store</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-accent transition-colors">Help</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-accent transition-colors">Join Us</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-accent transition-colors">Sign In</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="flex-1 flex items-center">
          <a href="#" className="flex items-center">
             <span className="text-2xl font-black tracking-tighter uppercase">DRE.SHOES</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="border-b-2 border-black pb-1">New & Featured</a>
          <a href="#" className="hover:opacity-50 transition-opacity pb-1">Men</a>
          <a href="#" className="hover:opacity-50 transition-opacity pb-1">Women</a>
          <a href="#" className="hover:opacity-50 transition-opacity pb-1">Kids</a>
          <a href="#" className="hover:opacity-50 transition-opacity pb-1">Sale</a>
          <a href="#" className="text-accent hover:opacity-50 transition-opacity pb-1">Install App</a>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 hover:bg-gray-200 transition-colors w-48">
            <Search className="w-4 h-4 text-black mr-2 opacity-70" />
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="bg-transparent outline-none w-full text-[10px] font-bold uppercase tracking-widest placeholder-gray-500"
            />
          </div>
          <button className="p-2 hover:opacity-50 transition-opacity lg:hidden">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:opacity-50 transition-opacity flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest hidden md:inline">Cart (0)</span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
          </button>
          <button className="p-2 hover:opacity-50 transition-opacity lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-gray-900 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3" 
          alt="Featured Shoe" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-end text-white text-center z-10">
          <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-accent">Dre.Shoes Signature</p>
          <h1 className="text-[80px] md:text-[140px] font-black uppercase tracking-tighter leading-[0.85] mb-6 flex flex-col items-center">
             <span>NOT FOR</span>
             <span className="text-outline-white">SALE</span>
          </h1>
          <p className="text-xs font-bold uppercase tracking-widest max-w-2xl px-4 mb-8">
            In the ultimate urban jungle, the urban runner is ready to conquer the streets.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-accent text-white px-8 py-4 font-bold uppercase text-[10px] tracking-widest hover:brightness-110 transition-all">
              Shop Now
            </button>
            <button className="bg-white text-black px-8 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-200 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
          <button className="w-10 h-10 border border-white/30 flex justify-center items-center hover:bg-white hover:text-black transition-colors text-white">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 border border-white/30 flex justify-center items-center hover:bg-white hover:text-black transition-colors text-white">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-white"></span>
           <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
           <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-6 py-16 lg:px-12 bg-white">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Trending</h2>
          <a href="#" className="hidden sm:block text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-accent hover:border-accent transition-colors">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative aspect-[4/5] bg-gray-100 overflow-hidden cursor-pointer border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800" 
              alt="Trending 1" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-accent">Dre.Shoes Zegama Trail</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">WILDLY<br/>COMFORTABLE</h3>
              <button className="bg-white text-black px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto">
                Notify Me
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative aspect-[4/5] bg-gray-100 overflow-hidden cursor-pointer border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800" 
              alt="Trending 2" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-accent">Free Metcon 7</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">TRAIN<br/>RIGHT</h3>
              <button className="bg-white text-black px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative aspect-[4/5] bg-gray-100 overflow-hidden cursor-pointer border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800" 
              alt="Trending 3" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-black"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-accent">Jordan</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">PRECIOUS<br/>MEDALS</h3>
              <button className="bg-accent text-white px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:brightness-110 transition-colors w-full sm:w-auto">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
