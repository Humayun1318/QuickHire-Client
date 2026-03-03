import { CategoryCard } from './CategoryCard';
import ReusableCustomSection from '@/components/ReusableCustomSection';

const categories = [
  {
    id: 1,
    name: 'Finance',
    jobs: 325,
    icon: '/images/finance-icon.png',
  },
  {
    id: 2,
    name: 'Design',
    jobs: 150,
    icon: '/images/design-icon.png',
  },
  {
    id: 3,
    name: 'Development',
    jobs: 420,
    icon: '/images/dev-icon.png',
  },
  {
    id: 4,
    name: 'Marketing',
    jobs: 210,
    icon: '/images/marketing-icon.png',
  },
  {
    id: 5,
    name: 'Support',
    jobs: 95,
    icon: '/images/support-icon.png',
  },
  {
    id: 6,
    name: 'Sales',
    jobs: 180,
    icon: '/images/sales-icon.png',
  },
];

export default function CategorySection() {
  return (
    <ReusableCustomSection
      titleStart="Explore by"
      titleHighlight="Category"
      linkText="Show all jobs"
      linkHref="/jobs"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            jobs={category.jobs}
            icon={category.icon}
          />
        ))}
      </div>
    </ReusableCustomSection>
  );
}
