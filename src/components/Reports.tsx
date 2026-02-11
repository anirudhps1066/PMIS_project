import React, { useState } from 'react';
import { Download, Filter, Calendar, FileText } from 'lucide-react';

export function Reports() {
  const [filterType, setFilterType] = useState('All');
  const [dateRange, setDateRange] = useState('This Month');

  const performanceData = [
    {
      internId: 'INT001',
      name: 'John Doe',
      tasksAssigned: 12,
      tasksCompleted: 11,
      completionRate: 92,
      avgRating: 4.5,
    },
    {
      internId: 'INT002',
      name: 'Jane Smith',
      tasksAssigned: 10,
      tasksCompleted: 9,
      completionRate: 90,
      avgRating: 4.3,
    },
    {
      internId: 'INT003',
      name: 'Mike Johnson',
      tasksAssigned: 15,
      tasksCompleted: 12,
      completionRate: 80,
      avgRating: 4.0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Reports & Analytics</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Download className="size-4" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
                <option>Custom Range</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Batch</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Batches</option>
              <option>Spring 2024</option>
              <option>Fall 2023</option>
              <option>Summer 2023</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Domains</option>
              <option>Computer Science</option>
              <option>Data Science</option>
              <option>Software Engineering</option>
            </select>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="size-6 text-blue-600" />
            <h3 className="text-lg font-medium text-gray-900">Intern Performance Report</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Comprehensive report including intern details, tasks assigned, completion status, and remarks
          </p>
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Generate PDF
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Generate Excel
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="size-6 text-green-600" />
            <h3 className="text-lg font-medium text-gray-900">Task Completion Summary</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Summary of all tasks created, completion status, and performance metrics by intern
          </p>
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Generate PDF
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Generate Excel
            </button>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Intern Performance Data</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Intern ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Tasks Assigned</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Tasks Completed</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Completion Rate</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Avg Rating</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((intern) => (
                <tr key={intern.internId} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{intern.internId}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{intern.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{intern.tasksAssigned}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{intern.tasksCompleted}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${intern.completionRate}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{intern.completionRate}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900">{intern.avgRating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options Info */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Report Contents</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Intern details (ID, name, college, department, batch)</li>
          <li>• Tasks assigned to each intern</li>
          <li>• Task completion status and dates</li>
          <li>• Performance ratings and remarks</li>
          <li>• Summary statistics and analytics</li>
        </ul>
      </div>
    </div>
  );
}
