import { animate, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import RecentPosts from './components/RecentPosts';
import Categories from './components/Categories';
import Footer from './components/Footer';

const App = () => {
  return (
    <motion.div
     initial={{opacity:0 }}
     animate={{opacity: 1}}
    transition={{duration:0.5}}

    className='min-h-screen bg-gray-50'
    
    >
        <Navbar />
        <main>
          <Hero/>
          <FeaturedPosts />
          <RecentPosts />
          <Categories />
          
          </main>   
       <Footer/>
      
      
      
       </motion.div>
  )
}

export default App