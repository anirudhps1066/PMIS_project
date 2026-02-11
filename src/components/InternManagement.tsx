import React, { useState } from 'react';
import { Upload, Search, Filter, Eye, Edit, Download, Plus } from 'lucide-react';
import { Intern } from '../types';
import { InternDetailsModal } from './InternDetailsModal';

export function InternManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedIntern, setSelectedIntern] = useState<Intern | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const interns: Intern[] = [
    {
      id: 'INT001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1-234-567-8901',
      college: 'MIT',
      department: 'Computer Science',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      mentorAssigned: 'Dr. Sarah Johnson',
      status: 'Active',
      batch: 'Spring 2024',
    },
    {
      id: 'INT002',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+1-234-567-8902',
      college: 'Stanford University',
      department: 'Data Science',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      mentorAssigned: 'Dr. Michael Brown',
      status: 'Active',
      batch: 'Spring 2024',
    },
    {
      id: 'INT003',
      name: 'Mike Johnson',
      email: 'mike.j@email.com',
      phone: '+1-234-567-8903',
      college: 'UC Berkeley',
      department: 'Software Engineering',
      startDate: '2023-09-01',
      endDate: '2024-02-28',
      mentorAssigned: 'Dr. Emily Davis',
      status: 'Completed',
      batch: 'Fall 2023',
    },
  ];

  const filteredInterns = interns.filter((intern) => {
    const matchesSearch =
      intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || intern.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Intern Management</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Upload className="size-4" />
            Upload Excel
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="size-4" />
            Add Intern
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, ID, or domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="size-5 text-gray-600" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Dropped</option>
            </select>
          </div>
        </div>
      </div>

      {/* Interns Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Intern ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">College</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Department</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Mentor</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInterns.map((intern) => (
                <tr key={intern.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{intern.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{intern.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{intern.college}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{intern.department}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{intern.mentorAssigned}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        intern.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : intern.status === 'Completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {intern.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedIntern(intern)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="View Details"
                      >
                        <Eye className="size-4" />
                      </button>
                      <button
                        className="p-1.5 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Intern Data</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="size-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">Drop Excel file here or click to browse</p>
              <p className="text-xs text-gray-500 mb-4">Supports .xlsx files</p>
              <input type="file" accept=".xlsx,.xls" className="hidden" id="file-upload" />
              <label
                htmlFor="file-upload"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Select File
              </label>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 font-medium mb-2">Required Columns:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Intern ID (unique)</li>
                <li>• Intern Name</li>
                <li>• Email ID</li>
                <li>• Phone Number</li>
                <li>• College / University</li>
                <li>• Department / Domain</li>
                <li>• Internship Start Date</li>
                <li>• Internship End Date</li>
                <li>• Mentor Assigned</li>
                <li>• Status (Active/Completed/Dropped)</li>
              </ul>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Intern Details Modal */}
      {selectedIntern && (
        <InternDetailsModal intern={selectedIntern} onClose={() => setSelectedIntern(null)} />
      )}
    </div>
  );
}
