export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

        {/* Product Image */}
        <div>
          <img
            src="https://cdn.cardsagainsthumanity.com/cah-main-game.jpg"
            alt="Cards Against Humanity"
            className="w-full rounded"
          />
        </div>

        {/* Product Details */}
        <div>

          <h1 className="text-4xl font-bold">
            Cards Against Humanity
          </h1>

          <p className="mt-6 text-gray-300">
            Cards Against Humanity is the party game for horrible people.
            Compete with your friends to make the funniest sentences.
          </p>

          <p className="text-2xl mt-8 font-semibold">
            $29
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200">
            Add to Cart
          </button>

        </div>

      </div>

    </main>
  )
}