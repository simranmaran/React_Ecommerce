import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Calendar, MapPin, Users, Star, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const statusIcons = {
  'Confirmed': CheckCircle,
  'Pending': Clock,
  'Cancelled': XCircle,
  'Completed': CheckCircle
}

const statusColors = {
  'Confirmed': 'text-green-600 bg-green-100',
  'Pending': 'text-yellow-600 bg-yellow-100',
  'Cancelled': 'text-red-600 bg-red-100',
  'Completed': 'text-blue-600 bg-blue-100'
}

function MyBookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    // Load bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]')
    const userBookings = savedBookings.filter(booking => booking.userId === user.id)
    setBookings(userBookings.sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate)))
    setLoading(false)
  }, [user.id])

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === bookingId
        ? { ...booking, status: 'Cancelled' }
        : booking
    )
    setBookings(updatedBookings)
    
    // Update localStorage
    const allBookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]')
    const updatedAllBookings = allBookings.map(booking =>
      booking.id === bookingId
        ? { ...booking, status: 'Cancelled' }
        : booking
    )
    localStorage.setItem('hotelBookings', JSON.stringify(updatedAllBookings))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const calculateNights = (checkIn, checkOut) => {
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diffTime = Math.abs(end - start)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, <span className="font-semibold">{user.name}</span>! Here are your hotel reservations.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">{bookings.length}</div>
              <div className="text-sm text-gray-600">Total Bookings</div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        {bookings.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="bg-gray-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Calendar className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Bookings Yet</h2>
            <p className="text-gray-600 mb-6">
              You haven't made any hotel reservations yet. Start exploring our amazing hotels!
            </p>
            <button
              onClick={() => window.location.href = '/home'}
              className="btn-primary"
            >
              Browse Hotels
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking, index) => {
              const StatusIcon = statusIcons[booking.status]
              return (
                <div
                  key={booking.id}
                  className="card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 flex-1">
                      {/* Hotel Image */}
                      <img
                        src={booking.hotel.image}
                        alt={booking.hotel.name}
                        className="w-full md:w-48 h-32 object-cover rounded-lg"
                      />
                      
                      {/* Booking Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{booking.hotel.name}</h3>
                          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${statusColors[booking.status]}`}>
                            <StatusIcon className="h-4 w-4" />
                            <span>{booking.status}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{booking.hotel.location}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <div>
                              <div className="font-medium">Check-in</div>
                              <div className="text-gray-600">{formatDate(booking.checkIn)}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <div>
                              <div className="font-medium">Check-out</div>
                              <div className="text-gray-600">{formatDate(booking.checkOut)}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <div>
                              <div className="font-medium">{booking.guests} Guest{booking.guests > 1 ? 's' : ''}</div>
                              <div className="text-gray-600">{booking.rooms} Room{booking.rooms > 1 ? 's' : ''}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{booking.hotel.rating}</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {calculateNights(booking.checkIn, booking.checkOut)} night{calculateNights(booking.checkIn, booking.checkOut) > 1 ? 's' : ''}
                          </div>
                          <div className="text-sm text-gray-600">
                            Booked on {formatDate(booking.bookingDate)}
                          </div>
                        </div>
                        
                        {booking.specialRequests && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-sm font-medium text-blue-800">Special Requests</div>
                                <div className="text-sm text-blue-600">{booking.specialRequests}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Price and Actions */}
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end space-y-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">
                          ${booking.total.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">Total Amount</div>
                      </div>
                      
                      {booking.status === 'Confirmed' && (
                        <button
                          onClick={() => handleCancelBooking(booking.id)}
                          className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          Cancel Booking
                        </button>
                      )}
                      
                      <div className="text-xs text-gray-500">
                        Booking ID: {booking.id}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyBookings