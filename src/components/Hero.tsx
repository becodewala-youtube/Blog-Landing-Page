import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50'>
      <div className='absolute inset-0 overflow-hidden'>

        <div className='absolute -inset-[10px] opacity-50'>
{[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                width: '60%',
                height: '60%',
                left: `${i * 30}%`,
                top: `${i * 20}%`,
                backgroundColor: i === 0 ? '#c084fc50' : i === 1 ? '#f472b650' : '#7c3aed50',
              }}
            />
          ))}
        </div>
        </div>

{/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
       <motion.div
       initial={{opacity:0,y:20}}
       animate={{opacity:1,y:0}}
       transition={{duration: 0.5}}
       
       
       >
       

        <h1  className='text-5xl md:text-7xl  font-bold mb-5 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'> Explore Inspiring Stories & Ideas</h1>
        <p className='text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto'> Discover thought-provoking articles, creative insights, and expert perspectives
        that will expand your horizons.</p>

     <div className='flex flex-col sm:flex-row gap-4 justify-center'>
      <motion.button
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium flex items-center justify-center gap-2 group"
      
      >

         Read Latest

         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

      </motion.button>
        <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
            >
              Explore Categories
            </motion.button>
     </div>

   




       </motion.div>

      




      </div>
    </div>
  )
}

export default Hero
