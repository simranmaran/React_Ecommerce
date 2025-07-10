import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { mockOrders } from '../data/products'
import { Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react'

const statusIcons = {
  'Processing': Clock,
  'Shipped': Truck,
  'Delivered': CheckCircle,
  'Cancelled': Clock
}

const statusColors = {
  'Processing': 'text-yellow-600 bg-yellow-100',
  'Shipped': 'text-blue-600 bg-blue-100',
  'Delivered': 'text-green-600 bg-green-100',
  'Cancelled': 'text-red-600 bg-red-100'
}

function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)

  useEffect(() => {
    // In a real app, you would fetch orders from an API
    setOrders(mockOrders)
  }, [])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet. Start shopping to see your orders here!
            </p>
            <button
              onClick={() => window.location.href = '/products'}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Shopping 🛍️
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">
            Welcome back, <span className="font-semibold">{user?.name}</span>! Here are your recent orders.
          </p>
        </div>

        <div className="space-y-6">
          {orders.map((order, index) => {
            const StatusIcon = statusIcons[order.status]
            return (
              <div
                key={order.id}
                className="card p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Order {order.id}</h3>
                    <p className="text-sm text-gray-600">Placed on {formatDate(order.date)}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                      <StatusIcon className="h-4 w-4" />
                      <span>{order.status}</span>
                    </div>
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 font-medium transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>{selectedOrder === order.id ? 'Hide' : 'View'} Details</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">Total Amount</span>
                    <p className="text-lg font-bold text-pink-600">₹{order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Items</span>
                    <p className="font-medium">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Status</span>
                    <p className="font-medium">{order.status}</p>
                  </div>
                </div>

                {selectedOrder === order.id && (
                  <div className="border-t pt-4 animate-fade-in">
                    <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{item.name}</h5>
                            <div className="text-sm text-gray-600">
                              {item.size && <span>Size: {item.size}</span>}
                              <span className="ml-4">Qty: {item.quantity}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-pink-600">₹{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">Order Summary</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>₹{(order.total / 1.18).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (18%):</span>
                          <span>₹{(order.total - (order.total / 1.18)).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping:</span>
                          <span className="text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-base border-t pt-1">
                          <span>Total:</span>
                          <span>₹{order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {order.status === 'Delivered' && (
                      <div className="mt-4 flex space-x-4">
                        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                          Rate & Review
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          Return Item
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Orders