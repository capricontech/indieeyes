"use client";

import { SpecificationItem } from "../../ui/SpecificationItem";

export interface Specification {
  label: string;
  value: string;
}

interface SpecificationsProps {
  specifications: Specification[];
}

export const Specifications = ({ specifications }: SpecificationsProps) => {
  // Split specifications into left and right columns
  const midpoint = Math.ceil(specifications.length / 2);
  const leftColumnSpecs = specifications.slice(0, midpoint);
  const rightColumnSpecs = specifications.slice(midpoint);

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Specifications</h3>
      
      <div className="grid grid-cols-2 gap-x-6">
        {/* Left Column */}
        <div>
          {leftColumnSpecs.map((spec, index) => (
            <SpecificationItem 
              key={`left-${index}`} 
              label={spec.label} 
              value={spec.value} 
            />
          ))}
        </div>
        
        {/* Right Column */}
        <div>
          {rightColumnSpecs.map((spec, index) => (
            <SpecificationItem 
              key={`right-${index}`} 
              label={spec.label} 
              value={spec.value} 
            />
          ))}
        </div>
      </div>
      
      <a href="#" className="text-black font-medium underline mt-4 inline-block">
        Full Technical Information
      </a>
    </div>
  );
}; 