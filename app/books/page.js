import Image from "next/image";

const books = [
  {
    id: 1,
    title: "Modern CSS with Tailwind",
    image: "/images/book1.png",
    description: "Master modern CSS styling with Tailwind"
  },
  {
    id: 2,
    title: "The Next.js Handbook",
    image: "/images/book2.png",
    description: "Complete guide to Next.js development"
  },
  {
    id: 3,
    title: "Mindset",
    image: "/images/book3.jpg",
    description: "Transform your life with the power of mindset"
  }
];

export default function BooksPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": books.map((book, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Book",
        "name": book.title,
        "description": book.description
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article>
        <header className="mb-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
            Book Recommendations
          </h2>
          <p className="text-zinc-600 text-lg">Discover our handpicked selection of inspiring reads</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book) => (
            <article
              key={book.id}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={book.image}
                  alt={`${book.title} book cover`}
                  width={300}
                  height={400}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                {book.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{book.description}</p>
            </article>
          ))}
        </div>
      </article>
    </>
  );
}
