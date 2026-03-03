import { Job } from '@/types';
import { Card, CardHeader, CardContent, CardFooter } from './Card';

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-sm text-gray-500">{job.company}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {job.location}
          </span>
          <span className="text-sm font-semibold">
            ${job.salary.toLocaleString()}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
