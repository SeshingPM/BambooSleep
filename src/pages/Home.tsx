import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Wind, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';

const products = {
  sheets: [
    {
      name: "Luxury Bamboo Sheet Set",
      image: "https://images.unsplash.com/photo-1629585961025-261e8737bece?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      price: 129.99
    },
    {
      name: "Cooling Bamboo Sheets",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      price: 119.99
    },
    {
      name: "Organic Bamboo Bedding",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      price: 139.99
    }
  ],
  sleepwear: [
    {
      name: "Classic Bamboo Pajama Set",
      image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      price: 89.99
    },
    {
      name: "Bamboo Sleep Shirt",
      image: "https://images.unsplash.com/photo-1618677366787-9727aacca7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      price: 49.99
    },
    {
      name: "Bamboo Lounge Set",
      image: "https://images.unsplash.com/photo-1583852131971-d217d5b27eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      price: 79.99
    }
  ],
  blankets: [
    {
      name: "Plush Bamboo Throw",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      price: 69.99
    },
    {
      name: "Weighted Bamboo Blanket",
      image: "https://images.unsplash.com/photo-1629385701021-cb8972ac7d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      price: 149.99
    },
    {
      name: "Summer Bamboo Throw",
      image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      price: 59.99
    }
  ]
};

const Home: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BambooSleepReviews",
    "description": "Expert reviews and recommendations for bamboo sleepwear",
    "url": "https://bamboosleepreviews.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bamboosleepreviews.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        <title>BambooSleepReviews - Expert Guide to Eco-Friendly Sleepwear</title>
        <meta name="description" content="Discover the best bamboo sleepwear with expert reviews, comparisons, and eco-friendly recommendations. Sleep better with BambooSleepReviews." />
        <meta name="keywords" content="bamboo sleepwear, eco-friendly pajamas, sustainable nightwear, sleep comfort, bamboo fabric benefits" />
        <link rel="canonical" href="https://bamboosleepreviews.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Experience Sustainable Sleep
              </h1>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/reviews"
                  className="bg-white text-green-700 hover:bg-green-50 px-6 py-2 rounded-full font-semibold text-sm transition duration-300"
                >
                  Explore Reviews
                </Link>
                <Link
                  to="/compare"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-6 py-2 rounded-full font-semibold text-sm transition duration-300"
                >
                  Compare Products
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Top-Rated Bamboo Products
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="#sheets" className="px-6 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                  Sheets
                </a>
                <a href="#sleepwear" className="px-6 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                  Sleepwear
                </a>
                <a href="#blankets" className="px-6 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                  Blankets
                </a>
              </div>
            </div>

            <div className="space-y-16">
              {/* Sheets Section */}
              <section id="sheets" className="scroll-mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Bamboo Sheets</h3>
                  <Link to="/reviews?category=sheets" className="text-green-600 hover:text-green-700 font-semibold">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.sheets.map((product, index) => (
                    <ProductCard key={`sheet-${index}`} {...product} />
                  ))}
                </div>
              </section>

              {/* Sleepwear Section */}
              <section id="sleepwear" className="scroll-mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Bamboo Sleepwear</h3>
                  <Link to="/reviews?category=sleepwear" className="text-green-600 hover:text-green-700 font-semibold">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.sleepwear.map((product, index) => (
                    <ProductCard key={`sleepwear-${index}`} {...product} />
                  ))}
                </div>
              </section>

              {/* Blankets Section */}
              <section id="blankets" className="scroll-mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Bamboo Blankets</h3>
                  <Link to="/reviews?category=blankets" className="text-green-600 hover:text-green-700 font-semibold">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.blankets.map((product, index) => (
                    <ProductCard key={`blanket-${index}`} {...product} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Why Choose Bamboo?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <Leaf className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Eco-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sustainable bamboo fabric that's kind to the environment
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <Wind className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Breathable</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Natural temperature regulation for comfortable sleep
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <Shield className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Hypoallergenic</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect for sensitive skin and allergies
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;