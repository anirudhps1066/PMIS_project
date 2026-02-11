import React from 'react';
import { X, Mail, Phone, Building, Calendar, User } from 'lucide-react';
import { Intern } from '../types';

interface InternDetailsModalProps {
  intern: Intern;
  onClose: () => void;
}

export function InternDetailsModal({ intern, onClose }: InternDetailsModalProps) {
  const tasks = [
    { id: 'T001', title: 'Complete React Tutorial', status: 'Completed', dueDate: '2024-02-15' },
    { id: 'T002', title: 'Build Dashboard Component', status: 'In Progress', dueDate: '2024-02-20' },
    { id: 'T003', title: 'API Integration Project', status: 'Not Started', dueDate: '2024-02-25' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full my-8">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Intern Profile</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Personal Details */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Personal Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <User className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Intern ID</p>
                  <p className="text-sm font-medium text-gray-900">{intern.id}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-sm font-medium text-gray-900">{intern.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">{intern.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-sm font-medium text-gray-900">{intern.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">College</p>
                  <p className="text-sm font-medium text-gray-900">{intern.college}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="text-sm font-medium text-gray-900">{intern.department}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="text-sm font-medium text-gray-900">{intern.startDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="text-sm font-medium text-gray-900">{intern.endDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Mentor Assigned</p>
                  <p className="text-sm font-medium text-gray-900">{intern.mentorAssigned}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="size-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Status</p>
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
                </div>
              </div>
            </div>
          </div>

          {/* Assigned Tasks */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Assigned Tasks</h4>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      task.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : task.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Summary */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Performance Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tasks Assigned</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">6</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-semibold text-gray-900">1</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-semibold text-gray-900">75%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}
