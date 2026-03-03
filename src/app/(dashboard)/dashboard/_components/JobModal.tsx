'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobData: any) => void;
  initialData?: any;
  mode: 'add' | 'edit';
}

export function JobModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode,
}: JobModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full Time',
    location: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    if (initialData && mode === 'edit') {
      setFormData({
        title: initialData.title || '',
        type: initialData.type || 'Full Time',
        location: initialData.location || '',
        description: initialData.description || '',
        category: initialData.category || '',
      });
    } else {
      setFormData({
        title: '',
        type: 'Full Time',
        location: '',
        description: '',
        category: '',
      });
    }
  }, [initialData, mode, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <Dialog.Title className="font-heading text-xl font-semibold text-gray-900">
              {mode === 'add' ? 'Add New Job' : 'Edit Job'}
            </Dialog.Title>
            <Dialog.Close className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-5">
              {/* Job Title */}
              <div className="space-y-1.5">
                <label
                  htmlFor="title"
                  className="block font-sans text-sm font-medium text-gray-700"
                >
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Developer"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                  required
                />
              </div>

              {/* Job Type and Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="type"
                    className="block font-sans text-sm font-medium text-gray-700"
                  >
                    Job Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                    required
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="category"
                    className="block font-sans text-sm font-medium text-gray-700"
                  >
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                    <option value="Support">Customer Support</option>
                    <option value="Product">Product</option>
                    <option value="Data">Data Science</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label
                  htmlFor="location"
                  className="block font-sans text-sm font-medium text-gray-700"
                >
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Remote · USA or Berlin · Germany"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label
                  htmlFor="description"
                  className="block font-sans text-sm font-medium text-gray-700"
                >
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the job role, responsibilities, requirements, and benefits..."
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors resize-none"
                  required
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 mt-8 pt-5 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-gray-300 rounded-lg font-sans text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-sans text-sm font-medium rounded-lg transition-colors shadow-sm"
              >
                {mode === 'add' ? 'Create Job' : 'Save Changes'}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
