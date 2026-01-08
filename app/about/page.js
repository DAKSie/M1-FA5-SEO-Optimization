export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
          About The Cozy Corner
        </h2>
        <div className="prose prose-lg">
          <p className="text-zinc-700 leading-relaxed mb-6">
            The Cozy Corner is an online bookstore built for readers who enjoy calm,
            comfort, and meaningful stories. Our goal is to recommend books that
            inspire and relax.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            We carefully curate each book in our collection to ensure it brings value,
            joy, and comfort to your reading experience. Whether you're looking for
            personal growth, inspiration, or simply a relaxing escape, we're here to
            help you find your next favorite read.
          </p>
        </div>
      </div>
    </article>
  );
}
