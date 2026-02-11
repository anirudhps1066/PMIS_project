import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, CheckCircle, Clock } from 'lucide-react';
import { Task } from '../types';
import { CreateTaskModal } from './CreateTaskModal';

export function TaskManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const tasks: Task[] = [
    {
      id: 'T001',
      title: 'Complete React Tutorial',
      description: 'Finish the advanced React tutorial and submit code',
      type: 'Assignment',
      startDate: '2024-02-01',
      dueDate: '2024-02-15',
      createdDate: '2024-01-28',
      priority: 'High',
      status: 'Completed',
      assignedTo: ['INT001', 'INT002'],
      completionDate: '2024-02-14',
      rating: 4,
    },
    {
      id: 'T002',
      title: 'Build Dashboard Component',
      description: 'Create a responsive dashboard component with charts',
      type: 'Project',
      startDate: '2024-02-10',
      dueDate: '2024-02-20',
      createdDate: '2024-02-08',
      priority: 'Medium',
      status: 'In Progress',
      assignedTo: ['INT001'],
    },
    {
      id: 'T003',
      title: 'Daily Standup Report',
      description: 'Submit daily progress report',
      type: 'Daily',
      startDate: '2024-02-11',
      dueDate: '2024-02-11',
      createdDate: '2024-02-11',
      priority: 'Low',
      status: 'Not Started',
      assignedTo: ['INT001', 'INT002', 'INT003'],
    },
    {
      id: 'T004',
      title: 'API Integration Task',
      description: 'Integrate REST API endpoints',
      type: 'Weekly',
      startDate: '2024-02-05',
      dueDate: '2024-02-10',
      createdDate: '2024-02-03',
      priority: 'High',
      status: 'Overdue',
      assignedTo: ['INT003'],
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || task.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Not Started':
        return 'bg-gray-100 text-gray-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Task Management</h2>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="size-4" />
          Create Task
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks by title or ID..."
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
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Overdue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{task.title}</h3>
                <p className="text-sm text-gray-500">ID: {task.id}</p>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Edit className="size-4" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">{task.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Type:</span>
                <span className="font-medium text-gray-900">{task.type}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Due Date:</span>
                <span className="font-medium text-gray-900">{task.dueDate}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Assigned To:</span>
                <span className="font-medium text-gray-900">{task.assignedTo.length} intern(s)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority} Priority
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <Clock className="size-4" />
                Update Status
              </button>
              {task.status !== 'Completed' && (
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <CheckCircle className="size-4" />
                  Mark Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Task Modal */}
      {showCreateModal && <CreateTaskModal onClose={() => setShowCreateModal(false)} />}
    </div>
  );
}
