export default function ContactPage() {
  return (
    <article className="max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-12">
        <header className="mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-zinc-600">We'd love to hear from you! Send us a message and we'll get back to you soon.</p>
        </header>

        <form className="space-y-6" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full border-2 border-amber-200 p-3 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="w-full border-2 border-amber-200 p-3 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell us what's on your mind..."
              required
              rows="5"
              className="w-full border-2 border-amber-200 p-3 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </article>
  );
}
