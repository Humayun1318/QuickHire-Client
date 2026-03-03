import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`
        rounded-lg border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-950
        p-6 shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-800 pb-4">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
      {children}
    </div>
  );
}
