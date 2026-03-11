export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black p-10">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src="https://cdn.cardsagainsthumanity.com/cah-main-game.jpg"
          className="w-full"
        />

        <div>
          <h1 className="text-4xl font-bold">
            Cards Against Humanity
          </h1>

          <p className="mt-4 text-lg">
            The original party game for horrible people.
          </p>

          <p className="text-2xl mt-6">$29</p>

          <button className="bg-black text-white px-6 py-3 mt-6">
            Add to Cart
          </button>
        </div>

      </div>

    </main>
  )
}