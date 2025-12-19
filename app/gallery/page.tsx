import Image from "next/image";

const images = [
  "/images/gallery/img1.jpeg",
  "/images/gallery/img2.jpeg",
  "/images/gallery/img3.jpeg",
  "/images/gallery/img4.jpeg",
  "/images/gallery/img5.jpeg",
  "/images/gallery/img6.jpeg",
  "/images/gallery/img7.jpeg",
  "/images/gallery/img8.jpeg",
  "/images/gallery/img9.jpeg",
  "/images/gallery/img10.jpeg",
  "/images/gallery/img11.jpeg",
  "/images/gallery/img12.jpeg",
  "/images/gallery/img13.jpeg",
  "/images/gallery/img14.jpeg",
  "/images/gallery/img15.jpeg",
  "/images/gallery/img16.jpeg",
  "/images/gallery/img17.jpeg",
  "/images/gallery/img18.jpeg",
  "/images/gallery/img19.jpeg",
  "/images/gallery/img20.jpeg",
  "/images/gallery/img21.jpeg",
];

export default function Page() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-[#001f3f] mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of our completed interior design projects.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-40 sm:h-52 lg:h-64 overflow-hidden rounded group"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
                priority={index < 4} // faster load for first images
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
