export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">Cards Against Humanity</h1>

        <button className="border border-white px-4 py-2 hover:bg-white hover:text-black transition">
          Shop
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-40">

        <h2 className="text-6xl font-bold max-w-4xl">
          A party game for horrible people.
        </h2>

        <p className="mt-8 text-xl text-gray-300">
          The game where players compete to make the funniest sentence.
        </p>

        <button className="mt-10 bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition">
          Buy Now
        </button>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 pb-10">
        © 2026 Cards Against Humanity Clone
      </footer>

    </main>
  )
}