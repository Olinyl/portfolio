import Image from 'next/image';

const GalleryItem = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg">
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
    />
  </div>
);

export default GalleryItem;
