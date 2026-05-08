export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Welcome to Spice Shop
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Discover the finest spices and seasonings from around the world.
            Elevate your culinary creations with our premium selection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Spices
            </button>
            <button className="bg-white hover:bg-gray-50 text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-lg font-semibold transition-colors">
              Sign Up
            </button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Spice Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hot & Spicy</h3>
              <p className="text-gray-600">Add heat to your dishes with our collection of chili peppers and spicy blends.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Herbs & Aromatics</h3>
              <p className="text-gray-600">Fresh herbs and aromatic spices to enhance the flavor of your meals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🧄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Garlic & Onions</h3>
              <p className="text-gray-600">Essential base flavors with our premium garlic and onion powders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Spice Up Your Kitchen?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers and start your spice journey today.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
