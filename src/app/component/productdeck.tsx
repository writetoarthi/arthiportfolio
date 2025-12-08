import PdfGallery from "./pdfGallery";

export default function Productdeck() {
  const pdfItems = [
    {
      title: "Milestone Project - Increase voice input in ChatGPT Mobile App",
      thumbnail: "/chatgpt.png",
      pdfUrl: "/msfull.pdf",
    },
    {
      title: "Product Teardown - Cleartrip.com",
      thumbnail: "/cleartrip.png",
      pdfUrl: "/cleardeck.pdf",
    },
    {
      title: "Product Teardown - Coursera.org",
      thumbnail: "/coursera.png",
      pdfUrl: "/courseradeck.pdf",
    },
    {
      title: "Memlay - AI Personal Journal App - created by Myself",
      thumbnail: "/memlay2.png",
      pdfUrl: "/courseradeck.pdf",
    },
  ];

 return (
  <section id="decks" className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      {/* Heading + Description (same style as Experience.tsx) */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Product and Project Deck
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          A collection of product teardowns and hands-on projects that reflect my approach to understanding user problems, analyzing existing products, and building solutions. This includes my own app, where I applied end-to-end product thinking—from discovery to execution.
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-16">
        <PdfGallery items={pdfItems} />
      </div>

    </div>
  </section>
);
}