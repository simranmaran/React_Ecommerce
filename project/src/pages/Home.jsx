import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { categories, products } from '../data/products'
import { Star, ShoppingBag, Heart, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

function Home() {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    setFeaturedProducts(products.filter(product => product.featured))
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product)
    // Show success message or animation here
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome {user?.name}! ✨
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the latest fashion trends and beauty essentials just for you! 💕
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Shop Now 🛍️
              </Link>
              <Link
                to="/products?category=dresses"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-200"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <Sparkles className="h-8 w-8 text-yellow-300" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Heart className="h-6 w-6 text-pink-300" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
          <ShoppingBag className="h-6 w-6 text-purple-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category 🎀
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="group card p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 mx-auto object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Trending Now 🔥
              </h2>
              <p className="text-gray-600">Most loved products by our customers</p>
            </div>
            <Link
              to="/products"
              className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="card overflow-hidden group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.originalPrice && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                    <div className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Trending</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      // Add to wishlist functionality
                    }}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-50"
                  >
                    <Heart className="h-4 w-4 text-gray-600 hover:text-pink-500" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.reviewCount})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-600">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(product)
                    }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special Offers Just for You! 🎁
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get up to 50% off on selected items. Limited time offer!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products?sale=true"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Shop Sale Items 🏷️
            </Link>
            <Link
              to="/products?category=jewelry"
              className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              New Jewelry Collection ✨
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home