export interface Intern {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  startDate: string;
  endDate: string;
  mentorAssigned: string;
  status: 'Active' | 'Completed' | 'Dropped';
  batch?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'Daily' | 'Weekly' | 'Project' | 'Assignment';
  startDate: string;
  dueDate: string;
  createdDate: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Overdue';
  assignedTo: string[];
  attachment?: string;
  completionDate?: string;
  remarks?: string;
  rating?: number;
}

export interface DashboardStats {
  totalInterns: number;
  activeInterns: number;
  tasksCreated: number;
  tasksCompleted: number;
  pendingTasks: number;
  overdueTasks: number;
}

export interface PerformanceData {
  internId: string;
  internName: string;
  tasksAssigned: number;
  tasksCompleted: number;
  completionRate: number;
  averageRating: number;
}
