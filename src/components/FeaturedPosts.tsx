import { motion } from "framer-motion";
import { Share2, ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    excerpt:
      "Exploring how artificial intelligence is reshaping our daily routines and what to expect in the coming years.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Sustainable Living in Urban Spaces",
    excerpt:
      "Practical tips and innovative solutions for maintaining an eco-friendly lifestyle in busy city environments.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "The Art of Mindful Travel",
    excerpt:
      "Discover how to make your journeys more meaningful and enriching through mindful travel practices.",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
  },
];

const FeaturedPosts = () => {
  return <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Featured Posts</h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
        Hand-picked articles that showcase the best of our content across various categories.
        </p>
      
      </div>


     {/* Cards */}
     
     <div className="grid md:grid-col-2 lg:grid-cols-3 gap-3">
      {featuredPosts.map((post)=> (
        <motion.article
        key={post.id}
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        whileHover={{y:-5}}
        
        className="bg-white rounded-xl shadow-lg overflow-hidden group"
        >
          <div className="relative overflow-hidden">
            <img src={post.image} alt={post.title}
            
className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"

            />

              
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            <button className="absolute top-4 right-4 p-2 bg-white/90 backrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">

              <Share2 className="w-4 h-4 text-gray-600"/>
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>

            <button className="inline-flex items-center text-purple-600 font-medium group/button cursor-pointer">Read More

              <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform"/>
            </button>
          </div>
        </motion.article>
      ))}
     </div>






    </div>


  </section>;
};

export default FeaturedPosts;
