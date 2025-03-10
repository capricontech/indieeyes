"use client";

interface SpecificationItemProps {
  label: string;
  value: string;
}

export const SpecificationItem = ({ label, value }: SpecificationItemProps) => {
  return (
    <div className="mb-4">
      <div className="text-gray-500">{label}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="border-b border-gray-200 mt-3"></div>
    </div>
  );
}; 