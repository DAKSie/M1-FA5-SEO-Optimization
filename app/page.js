import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center">
      <article className="flex w-full max-w-3xl flex-col items-center gap-10 py-16 px-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
          <Image
            src="/images/book1.png"
            alt="Featured book at The Cozy Corner bookstore"
            width={120}
            height={160}
            priority
            className="relative rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent">
            Welcome to The Cozy Corner
          </h1>
          <p className="mt-6 text-lg text-zinc-700 max-w-2xl">
            A cozy online bookstore with hand-picked recommendations for every
            reader. Discover stories that inspire, comfort, and transform.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 text-white font-medium hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
            aria-label="Browse our book collection"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border-2 border-amber-600 px-8 text-amber-700 font-medium hover:bg-amber-50 transform hover:scale-105 transition-all"
            aria-label="Learn more about The Cozy Corner"
          >
            Learn More
          </Link>
        </div>
      </article>
    </div>
  );
}
