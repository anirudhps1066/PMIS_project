import React, { useState } from 'react';
import { X, Paperclip } from 'lucide-react';

interface CreateTaskModalProps {
  onClose: () => void;
}

export function CreateTaskModal({ onClose }: CreateTaskModalProps) {
  const [assignmentType, setAssignmentType] = useState<'all' | 'selected' | 'batch'>('selected');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full my-8">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Create New Task</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Enter task description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Task Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Project</option>
              <option>Assignment</option>
            </select>
          </div>

          {/* Date Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="priority" value="Low" className="mr-2" />
                <span className="text-sm text-gray-700">Low</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="priority" value="Medium" className="mr-2" defaultChecked />
                <span className="text-sm text-gray-700">Medium</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="priority" value="High" className="mr-2" />
                <span className="text-sm text-gray-700">High</span>
              </label>
            </div>
          </div>

          {/* Assignment Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assign To <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="assignment"
                  value="all"
                  checked={assignmentType === 'all'}
                  onChange={() => setAssignmentType('all')}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">All Interns</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="assignment"
                  value="selected"
                  checked={assignmentType === 'selected'}
                  onChange={() => setAssignmentType('selected')}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Selected Interns</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="assignment"
                  value="batch"
                  checked={assignmentType === 'batch'}
                  onChange={() => setAssignmentType('batch')}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Specific Batch/Domain</span>
              </label>
            </div>
          </div>

          {/* Conditional Inputs */}
          {assignmentType === 'selected' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Interns</label>
              <select
                multiple
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
              >
                <option>INT001 - John Doe</option>
                <option>INT002 - Jane Smith</option>
                <option>INT003 - Mike Johnson</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple interns</p>
            </div>
          )}

          {assignmentType === 'batch' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Spring 2024</option>
                  <option>Fall 2023</option>
                  <option>Summer 2023</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Domains</option>
                  <option>Computer Science</option>
                  <option>Data Science</option>
                  <option>Software Engineering</option>
                </select>
              </div>
            </div>
          )}

          {/* Attachment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Attachment (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Paperclip className="size-5 text-gray-400" />
                <div className="flex-1">
                  <input type="file" className="hidden" id="attachment" />
                  <label
                    htmlFor="attachment"
                    className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    Upload PDF, DOC, or link
                  </label>
                  <p className="text-xs text-gray-500">Supports PDF, DOC, DOCX files</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
