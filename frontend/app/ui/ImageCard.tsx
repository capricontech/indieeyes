'use client';

import Image from 'next/image';
import Link from 'next/link';

// Define a type for the props
type TechCardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  width?: number;
  height?: number;
  linkTitle?: string;
};

// Use the type in the component
export default function ImageCard({
  title = '',
  description = '',
  imageUrl = '',
  link = '',
  linkTitle = '',
  width = 400,
  height = 250,
}: TechCardProps) {
  return (
    <div style={{ width, height }}>
      <Link href={link}>
        <Image src={imageUrl} alt={title} width={width} height={height} />
      </Link>
      <div>
        <Link href={link}>
          <h5>{title}</h5>
        </Link>
        <p>{description}</p>
        <Link href={link}>
         {linkTitle}
        </Link>
      </div>
    </div>
  );
}
