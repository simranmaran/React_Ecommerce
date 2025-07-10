import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Award, Users, MapPin, Clock, Star, Heart, Shield, Headphones } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const aboutImages = [
  {
    url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
    title: 'Luxury Hotel Lobby'
  },
  {
    url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
    title: 'Premium Hotel Room'
  },
  {
    url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
    title: 'Hotel Restaurant'
  },
  {
    url: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
    title: 'Spa & Wellness'
  },
  {
    url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
    title: 'Conference Facilities'
  }
]

const stats = [
  {
    icon: MapPin,
    number: '500+',
    label: 'Partner Hotels',
    description: 'Worldwide locations'
  },
  {
    icon: Users,
    number: '1M+',
    label: 'Happy Customers',
    description: 'Satisfied guests'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'In hospitality'
  },
  {
    icon: Star,
    number: '4.8',
    label: 'Average Rating',
    description: 'Customer satisfaction'
  }
]

const features = [
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'We tailor every experience to your unique preferences and needs, ensuring your stay is exactly what you envisioned.'
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your safety and security are our top priorities. We use advanced encryption and follow strict safety protocols.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you with any questions or concerns.'
  },
  {
    icon: Headphones,
    title: 'Expert Concierge',
    description: 'Our experienced concierge team helps you discover the best local attractions, dining, and experiences.'
  }
]

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Hotel Paradise 🏨
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Creating unforgettable experiences through exceptional hospitality since 2009
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image Carousel */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: '500px' }}
          >
            {aboutImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Story Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hotel Paradise began as a dream to revolutionize the hospitality industry. Founded in 2009 by a team of passionate travelers and hospitality experts, we set out to create a platform that connects discerning guests with exceptional accommodations worldwide.
                </p>
                <p>
                  Over the past 15 years, we've grown from a small startup to a global leader in luxury hotel bookings, serving over 1 million satisfied customers across 500+ partner hotels. Our commitment to excellence, personalized service, and innovative technology has made us the preferred choice for travelers seeking unforgettable experiences.
                </p>
                <p>
                  Today, Hotel Paradise continues to push boundaries, constantly evolving to meet the changing needs of modern travelers while maintaining our core values of quality, trust, and exceptional service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Hotel Paradise Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card p-8 text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hotel Paradise?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional experiences that exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              To create extraordinary travel experiences by connecting guests with the world's finest accommodations, 
              while providing unparalleled service that transforms every journey into a cherished memory.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">Made with love for travelers worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About