import React, { useState } from 'react';
import { Bell, ShoppingCart, Users, IndianRupeeIcon, Calendar, PieChart, TrendingUp, Settings, HelpCircle, Menu, X } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for the dashboard
  const stats = [
    { title: "Total Orders", value: "1,284", icon: <ShoppingCart />, change: "+12%", color: "bg-blue-100" },
    { title: "Active Customers", value: "842", icon: <Users />, change: "+7%", color: "bg-green-100" },
    { title: "Revenue", value: "₹28,459", icon: <IndianRupeeIcon />, change: "+18%", color: "bg-purple-100" },
    { title: "Pending Orders", value: "38", icon: <Calendar />, change: "-5%", color: "bg-yellow-100" }
  ];

  const recentOrders = [
    { id: "#ORD-7895", customer: "Jane Cooper", service: "Wash & Fold", status: "Completed", amount: "₹50" },
    { id: "#ORD-7896", customer: "Robert Fox", service: "Dry Cleaning", status: "Processing", amount: "₹78" },
    { id: "#ORD-7897", customer: "Esther Howard", service: "Wash & Iron", status: "Pending", amount: "₹32" },
    { id: "#ORD-7898", customer: "Cameron Wilson", service: "Wash & Fold", status: "Delivered", amount: "₹45" },
    { id: "#ORD-7899", customer: "Leslie Alexander", service: "Specialty Clean", status: "Processing", amount: "₹120" }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Delivered': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && <h1 className="text-xl font-bold text-blue-600">FreshFold</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-50 ${activeTab === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
              >
                <PieChart size={20} />
                {sidebarOpen && <span className="ml-3">Overview</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-50 ${activeTab === 'orders' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
              >
                <ShoppingCart size={20} />
                {sidebarOpen && <span className="ml-3">Orders</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-50 ${activeTab === 'customers' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
              >
                <Users size={20} />
                {sidebarOpen && <span className="ml-3">Customers</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center w-full p-3 rounded-lg hover:bg-blue-50 ${activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
              >
                <TrendingUp size={20} />
                {sidebarOpen && <span className="ml-3">Analytics</span>}
              </button>
            </li>
          </ul>
          

        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'orders' && 'Order Management'}
              {activeTab === 'customers' && 'Customer Directory'}
              {activeTab === 'analytics' && 'Business Analytics'}
              {activeTab === 'settings' && 'System Settings'}
              {activeTab === 'help' && 'Help Center'}
            </h2>
            
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
                    <div className={`p-3 rounded-full ${stat.color} mr-4`}>
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        <span className={`ml-2 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Power BI Report */}
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="border-b p-4">
                  <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                </div>
                <div className="p-4">
                  <iframe 
                    title="Laundry Business Analytics" 
                    className="w-full h-96"
                    src="https://app.powerbi.com/reportEmbed?reportId=e4e03604-cfc5-4714-8568-f0e1ea13919d&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1" 
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow">
                <div className="flex items-center justify-between border-b p-4">
                  <h3 className="text-lg font-medium">Recent Orders</h3>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentOrders.map((order, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.service}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Order Management</h3>
              <p className="text-gray-600">Manage all your laundry service orders here.</p>
            </div>
          )}
          
          {activeTab === 'customers' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Customer Directory</h3>
              <p className="text-gray-600">View and manage your customer information.</p>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Business Analytics</h3>
              <p className="text-gray-600">Detailed reports and metrics for your laundry business.</p>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">System Settings</h3>
              <p className="text-gray-600">Configure your dashboard and application preferences.</p>
            </div>
          )}
          
          {activeTab === 'help' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Help Center</h3>
              <p className="text-gray-600">Tutorials and support resources for using the dashboard.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;