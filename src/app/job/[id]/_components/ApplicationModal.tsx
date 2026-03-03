'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Upload } from 'lucide-react';
import toast from 'react-hot-toast';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  companyName: string;
}

export function ApplicationModal({
  isOpen,
  onClose,
  jobTitle,
  companyName,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
      setResumeName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.resume
    ) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    toast.loading('Submitting your application...', { id: 'submitting' });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success
    toast.success('Application submitted successfully!', { id: 'submitting' });
    setIsSubmitting(false);
    onClose();

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null,
    });
    setResumeName('');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            <div>
              <Dialog.Title className="font-heading text-lg font-semibold text-gray-900">
                Apply for {jobTitle}
              </Dialog.Title>
              <Dialog.Description className="font-sans text-sm text-gray-500 mt-0.5">
                {companyName}
              </Dialog.Description>
            </div>
            <Dialog.Close className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </Dialog.Close>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="block font-sans text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block font-sans text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block font-sans text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                required
              />
            </div>

            {/* Resume Upload */}
            <div className="space-y-1.5">
              <label
                htmlFor="resume"
                className="block font-sans text-sm font-medium text-gray-700"
              >
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('resume')?.click()}
                  className="w-full flex items-center justify-between px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span className="truncate">
                    {resumeName || 'Upload your resume'}
                  </span>
                  <Upload className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <p className="font-sans text-xs text-gray-400">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            {/* Cover Letter */}
            <div className="space-y-1.5">
              <label
                htmlFor="coverLetter"
                className="block font-sans text-sm font-medium text-gray-700"
              >
                Cover Letter (Optional)
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us why you're interested in this position..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-sans font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
