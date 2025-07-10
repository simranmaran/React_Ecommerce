import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Calendar, Users, CreditCard, MapPin, Star, Wifi, Car, Coffee, Dumbbell, Check } from 'lucide-react'

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  restaurant: Coffee,
  gym: Dumbbell
}

function Booking() {
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [rooms, setRooms] = useState(1)
  const [specialRequests, setSpecialRequests] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const hotel = localStorage.getItem('selectedHotel')
    if (hotel) {
      setSelectedHotel(JSON.parse(hotel))
    }

    // Set default dates (today and tomorrow)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    setCheckIn(today.toISOString().split('T')[0])
    setCheckOut(tomorrow.toISOString().split('T')[0])
  }, [])

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diffTime = Math.abs(end - start)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const calculateTotal = () => {
    if (!selectedHotel) return 0
    const nights = calculateNights()
    const subtotal = selectedHotel.price * nights * rooms
    const taxes = subtotal * 0.12 // 12% tax
    return subtotal + taxes
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000))

    const booking = {
      id: `BK-${Date.now()}`,
      hotel: selectedHotel,
      checkIn,
      checkOut,
      guests,
      rooms,
      specialRequests,
      total: calculateTotal(),
      status: 'Confirmed',
      bookingDate: new Date().toISOString(),
      userId: user.id
    }

    // Save booking to localStorage
    const existingBookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]')
    existingBookings.push(booking)
    localStorage.setItem('hotelBookings', JSON.stringify(existingBookings))

    setLoading(false)
    setShowSuccess(true)

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/my-bookings')
    }, 3000)
  }

  if (!selectedHotel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Hotel Selected</h2>
          <p className="text-gray-600 mb-6">Please select a hotel from the home page first.</p>
          <button
            onClick={() => navigate('/home')}
            className="btn-primary"
          >
            Browse Hotels
          </button>
        </div>
      </div>
    )
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="card p-12 text-center max-w-md mx-auto animate-fade-in">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Your reservation at {selectedHotel.name} has been successfully confirmed.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to your bookings...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Review your selection and provide booking details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hotel Details */}
          <div className="lg:col-span-2">
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Selected Hotel</h2>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={selectedHotel.image}
                  alt={selectedHotel.name}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{selectedHotel.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{selectedHotel.location}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{selectedHotel.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({selectedHotel.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    {selectedHotel.amenities.map(amenity => {
                      const Icon = amenityIcons[amenity]
                      return (
                        <div key={amenity} className="p-1 bg-gray-100 rounded">
                          <Icon className="h-3 w-3 text-gray-600" />
                        </div>
                      )
                    })}
                  </div>
                  <div className="text-2xl font-bold text-primary-600">
                    ${selectedHotel.price}
                    <span className="text-sm text-gray-600 font-normal"> per night</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="input-field pl-10"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Rooms
                    </label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(parseInt(e.target.value))}
                      className="input-field"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={3}
                    className="input-field"
                    placeholder="Any special requests or preferences..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing Booking...' : 'Confirm Booking 🎉'}
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-medium">
                    {checkIn ? new Date(checkIn).toLocaleDateString() : '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-medium">
                    {checkOut ? new Date(checkOut).toLocaleDateString() : '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nights:</span>
                  <span className="font-medium">{calculateNights()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rooms:</span>
                  <span className="font-medium">{rooms}</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Room rate:</span>
                  <span>${selectedHotel.price} × {calculateNights()} nights × {rooms} room{rooms > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>${(selectedHotel.price * calculateNights() * rooms).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & fees:</span>
                  <span>${(selectedHotel.price * calculateNights() * rooms * 0.12).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary-600">${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-800">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-sm font-medium">Secure Payment</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking