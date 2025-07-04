import GalleryItem from './gallery-item';

// Example images. Place your images in public/gallery/ and update the array below.
const images = [
  '/gallery/1000046425.jpg',
  '/gallery/1000072464.jpg',
  '/gallery/1000077841.jpg',
  '/gallery/1000046445.jpg',
  '/gallery/1000046927.jpg',
  '/gallery/1000047802.jpg',
  '/gallery/1000056344 (1).jpg',
  '/gallery/1000056685.jpg',
  '/gallery/1000056692.jpg',
  '/gallery/1000056701.jpg',
  '/gallery/1000056710.jpg',
  '/gallery/1000056723.jpg',
  '/gallery/1000056735.jpg',
  '/gallery/1000056739.jpg',
  '/gallery/1000057168.jpg',
  '/gallery/1000057482.jpg',
  '/gallery/1000057501.jpg',
  '/gallery/1000064818.jpg',
  '/gallery/1000065029.jpg',
  '/gallery/1000065687.jpg',
  '/gallery/1000066493.jpg',
  '/gallery/1000067199.jpg',
  '/gallery/1000067613.jpg',
  '/gallery/1000067651.jpg',
  '/gallery/1000067729.jpg',
  '/gallery/1000067776.jpg',
  '/gallery/1000067873.jpg',
  '/gallery/1000069814 (1).jpg',
  '/gallery/1000070614.jpg',
  '/gallery/1000070844.jpg',
  '/gallery/1000070942 (1).jpg',
  '/gallery/1000070948.jpg',
  '/gallery/1000071050.jpg',
  '/gallery/1000071097.jpg',
  '/gallery/1000071337.jpg',
  '/gallery/1000071360.jpg',
  '/gallery/1000071522.jpg',
  '/gallery/1000071809.jpg',
  '/gallery/1000071834.jpg',
  '/gallery/1000071945.jpg',
  '/gallery/1000072270.jpg',
  '/gallery/1000077618 (1).jpg',
  '/gallery/1000077676.jpg',
  '/gallery/1000082250.jpg',
  '/gallery/20241121_154857.jpg',
];

const Gallery = () => {
  return (
    <div data-section id='gallery' className='mb-16'>
      <h2 className='mb-8 visible font-medium tracking-widest'>Photo Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
        {images.map((src, idx) => (
          <GalleryItem key={idx} src={src} alt={`Gallery image ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
