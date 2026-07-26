import Image from 'next/image';
import EmptyGalleryPlaceholder from './EmptyGalleryPlaceholder';

export default function ProjectGallery({ images, projectTitle }) {
  if (!images?.length) return <EmptyGalleryPlaceholder />;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <figure key={image.src} className={index === 0 ? 'sm:col-span-2' : ''}>
          <Image src={image.src} alt={image.alt || `${projectTitle} project photograph ${index + 1}`} width={1200} height={675} className="h-full min-h-56 w-full rounded-xl border border-slate-800 object-cover" />
          {image.caption && <figcaption className="mt-2 text-xs text-slate-500">{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
