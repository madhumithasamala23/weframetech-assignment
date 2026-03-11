export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-xl font-bold">Cards Against Humanity</h1>
        <button className="border px-4 py-2">Shop</button>
      </header>

      <section className="text-center py-32">
        <h2 className="text-5xl font-bold">
          A party game for horrible people
        </h2>

        <p className="mt-6 text-lg">
          The game where players compete to make the funniest sentence.
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3">
          Buy Now
        </button>
      </section>

    </main>
  )
}