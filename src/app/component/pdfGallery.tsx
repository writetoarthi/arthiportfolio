type PdfGalleryProps = {
  items: {
    title: string;
    thumbnail: string; // e.g.: "/images/thumb.png"
    pdfUrl: string;    // e.g.: "/pdfs/file.pdf"
  }[];
};

export default function PdfGallery({ items }: PdfGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
            className="block bg-white border rounded-xl overflow-hidden shadow hover:shadow-md transition p-6 text-center"

        >
            <div className="flex justify-center">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-auto h-28 object-contain"
          />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">Click to open PDF</p>
          </div>
        </a>
      ))}
    </div>
  );
}