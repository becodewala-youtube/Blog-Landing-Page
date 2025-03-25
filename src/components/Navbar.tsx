import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = ["Home", "Categories", "About", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ">
              ModernBlog
            </span>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item}
              </a>
            ))}

            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Monbile navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-2"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
           {showSearch && (
            <motion.div 
            initial={{height: 0, opacity:0}}
            animate={{height: 'auto', opacity:1}}
            exit={{height: 0, opacity:0}}
            className="overflow-hidden"
            
            
            >
          <input type="text" 
             placeholder="Search articles..."
             className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

            </motion.div>
           )}



        </AnimatePresence>



      </div>

     {/* Mobile-menu */}

        <AnimatePresence>
      {isOpen && (
          
       <motion.div 
       initial={{opacity:0,y:-10}}
       animate={{opacity:1,y:0}}
       exit={{opacity:1,y:-10}}
       className="md:hidden"
       >
        <div  className=" px-2 pt-2 pb-3 space-x-1 bg-white border-b border-gray-100">
         {navItems.map((item)=>(
            <a className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors">

                {item}
            </a>
         ))}


        </div>


       </motion.div>


      )}



        </AnimatePresence>

    </nav>
  );
};

export default Navbar;
