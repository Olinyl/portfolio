import Image from 'next/image';

const GalleryItem = ({ src, alt, priority = false }) => (
  <div className="overflow-hidden rounded-lg shadow-lg">
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      quality={60}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKCj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB8A/9k="
      sizes="(max-width: 768px) 50vw, 33vw"
      className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300 will-change-transform"
    />
  </div>
);

export default GalleryItem;
