import React from 'react';
import { Users, UserCheck, ClipboardList, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function Dashboard() {
  const stats = [
    { label: 'Total Interns', value: 45, icon: Users, color: 'bg-blue-500' },
    { label: 'Active Interns', value: 38, icon: UserCheck, color: 'bg-green-500' },
    { label: 'Tasks Created', value: 156, icon: ClipboardList, color: 'bg-purple-500' },
    { label: 'Tasks Completed', value: 124, icon: CheckCircle, color: 'bg-teal-500' },
    { label: 'Pending Tasks', value: 28, icon: Clock, color: 'bg-yellow-500' },
    { label: 'Overdue Tasks', value: 4, icon: AlertCircle, color: 'bg-red-500' },
  ];

  const completionData = [
    { name: 'John Doe', completion: 92 },
    { name: 'Jane Smith', completion: 88 },
    { name: 'Mike Johnson', completion: 85 },
    { name: 'Sarah Williams', completion: 82 },
    { name: 'Alex Brown', completion: 78 },
  ];

  const taskDistribution = [
    { name: 'Completed', value: 124, color: '#10b981' },
    { name: 'In Progress', value: 28, color: '#3b82f6' },
    { name: 'Not Started', value: 8, color: '#6b7280' },
    { name: 'Overdue', value: 4, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="size-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Completion Rate - Top Performers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completion" fill="#3b82f6" name="Completion %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Task Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={taskDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {taskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Interns Needing Attention */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interns Needing Attention</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Intern Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Tasks Assigned</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Completed</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Overdue</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-900">Emily Davis</td>
                <td className="py-3 px-4 text-sm text-gray-600">12</td>
                <td className="py-3 px-4 text-sm text-gray-600">7</td>
                <td className="py-3 px-4 text-sm text-red-600 font-medium">3</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Needs Support
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-900">Robert Chen</td>
                <td className="py-3 px-4 text-sm text-gray-600">10</td>
                <td className="py-3 px-4 text-sm text-gray-600">6</td>
                <td className="py-3 px-4 text-sm text-red-600 font-medium">1</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Monitor
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
