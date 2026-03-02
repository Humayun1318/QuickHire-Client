export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  salary: number;
  location: string;
  createdAt: Date;
}

export interface Application {
  id: string;
  userId: string;
  jobId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}
