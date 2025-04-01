import { motion } from 'framer-motion';
import { Code2, Palette, Globe, BookOpen, Camera, Coffee } from 'lucide-react';


const categories = [
  {
    id: 1,
    name: "Development",
    icon: Code2,
    count: 42,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "Design",
    icon: Palette,
    count: 28,
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    name: "Travel",
    icon: Globe,
    count: 35,
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 4,
    name: "Education",
    icon: BookOpen,
    count: 24,
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: 5,
    name: "Photography",
    icon: Camera,
    count: 31,
    color: "from-red-500 to-rose-400",
  },
  {
    id: 6,
    name: "Lifestyle",
    icon: Coffee,
    count: 26,
    color: "from-indigo-500 to-violet-400",
  },
];


const Categories = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center mb-12'>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" >
          Explore Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover content that matters to you. Browse through our diverse range of topics.
          </p>
        </div>



    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {categories.map((category) => (
        <motion.div
        key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
        >
         <div className='bg-white rounded-xl shadow-lg p-6 relative overflow-hidden'>
         <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.count} articles
                  </p>
                </div>
         </div>

        </motion.div>
      ))}
    </div>



      </div>
    </section>
  )
}

export default Categories