// src/app/components/Breadcrumbs.jsx
import Link from 'next/link';

const Breadcrumbs = ({ paths }) => {
  return (
    <nav className="text-gray-600 text-sm sm:text-base">
      {paths.map((path, index) => (
        <span key={index}>
          {path.isClickable ? (
            <Link href={path.link} className="hover:underline">
              {path.label}
            </Link>
          ) : (
            <span className="font-semibold">{path.label}</span> // Make it bold to indicate it's the current level
          )}
          {index < paths.length - 1 && <span className="mx-1">→</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;