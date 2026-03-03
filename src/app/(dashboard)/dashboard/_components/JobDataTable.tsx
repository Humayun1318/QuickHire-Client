'use client';

import { useState } from 'react';
import { JobModal } from './JobModal';
import { Edit2, Trash2, MoreVertical } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  category: string;
}

interface CustomJobTableProps {
  data: Job[];
}

export function JobDataTable({ data: initialData }: CustomJobTableProps) {
  const [data, setData] = useState<Job[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<number | null>(null);

  const handleAddJob = () => {
    setModalMode('add');
    setSelectedJob(null);
    setIsModalOpen(true);
  };

  const handleEditJob = (job: Job) => {
    setModalMode('edit');
    setSelectedJob(job);
    setIsModalOpen(true);
    setMobileMenuOpen(null);
  };

  const handleDeleteJob = (id: number) => {
    setData((prev) => prev.filter((job) => job.id !== id));
    setDeleteConfirm(null);
    setMobileMenuOpen(null);
  };

  const handleSubmitJob = (jobData: Omit<Job, 'id'>) => {
    if (modalMode === 'add') {
      const newJob = {
        ...jobData,
        id: Date.now(),
      };
      setData((prev) => [newJob, ...prev]);
    } else {
      setData((prev) =>
        prev.map((job) =>
          job.id === selectedJob?.id ? { ...job, ...jobData } : job
        )
      );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full Time':
        return 'bg-green-100 text-green-700';
      case 'Part Time':
        return 'bg-blue-100 text-blue-700';
      case 'Contract':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-orange-100 text-orange-700';
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-gray-900">
          Job Listings
        </h2>
        <button
          onClick={handleAddJob}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-sans text-sm font-medium rounded-lg transition-colors shadow-sm w-full sm:w-auto"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add New Job
        </button>
      </div>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden md:block border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-4 text-left font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-left font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-4 text-left font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-4 text-right font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <EmptyState />
                </td>
              </tr>
            ) : (
              data.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-sans text-sm font-medium text-gray-900">
                      {job.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2.5 py-1 bg-gray-100 text-gray-700 font-sans text-xs rounded-full">
                      {job.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 font-sans text-xs rounded-full ${getTypeColor(job.type)}`}
                    >
                      {job.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-sans text-sm text-gray-600">
                      {job.location}
                    </span>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <p className="font-sans text-sm text-gray-600 line-clamp-2">
                      {job.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {deleteConfirm === job.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-medium rounded-lg transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-sans text-xs font-medium rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEditJob(job)}
                          className="p-2 text-gray-500 hover:text-[#4640DE] hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(job.id)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - Visible only on mobile */}
      <div className="block md:hidden space-y-4">
        {data.length === 0 ? (
          <div className="border border-gray-200 rounded-xl p-8">
            <EmptyState />
          </div>
        ) : (
          data.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
            >
              {/* Header with Title and Menu */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-heading text-base font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 mt-0.5">
                    {job.location}
                  </p>
                </div>

                {/* Mobile Menu Button */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setMobileMenuOpen(
                        mobileMenuOpen === job.id ? null : job.id
                      )
                    }
                    className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>

                  {/* Dropdown Menu */}
                  {mobileMenuOpen === job.id && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setMobileMenuOpen(null)}
                      />
                      <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        <button
                          onClick={() => handleEditJob(job)}
                          className="flex items-center gap-2 w-full px-4 py-2.5 text-left font-sans text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setDeleteConfirm(job.id);
                            setMobileMenuOpen(null);
                          }}
                          className="flex items-center gap-2 w-full px-4 py-2.5 text-left font-sans text-sm text-red-600 hover:bg-red-50 last:rounded-b-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex px-2.5 py-1 bg-gray-100 text-gray-700 font-sans text-xs rounded-full">
                  {job.category}
                </span>
                <span
                  className={`inline-flex px-2.5 py-1 font-sans text-xs rounded-full ${getTypeColor(job.type)}`}
                >
                  {job.type}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-gray-600 line-clamp-2 mb-3">
                {job.description}
              </p>

              {/* Delete Confirmation for Mobile */}
              {deleteConfirm === job.id && (
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <p className="font-sans text-xs text-gray-500 flex-1">
                    Delete this job?
                  </p>
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-medium rounded-lg transition-colors"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-sans text-xs font-medium rounded-lg transition-colors"
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          ))
        )}

        {/* Mobile Stats */}
        <div className="flex items-center justify-between mt-4 px-2">
          <p className="font-sans text-xs text-gray-500">
            Showing {data.length} {data.length === 1 ? 'job' : 'jobs'}
          </p>
        </div>
      </div>

      {/* Desktop Footer Stats */}
      <div className="hidden md:flex items-center justify-between mt-4 px-2">
        <p className="font-sans text-sm text-gray-500">
          Showing {data.length} {data.length === 1 ? 'job' : 'jobs'}
        </p>
      </div>

      {/* Job Modal */}
      <JobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitJob}
        initialData={selectedJob}
        mode={modalMode}
      />
    </div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-400">
      <svg
        className="w-12 h-12 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
      <p className="font-sans text-sm">No jobs found</p>
      <p className="font-sans text-xs mt-1">
        Click "Add New Job" to create your first listing
      </p>
    </div>
  );
}
