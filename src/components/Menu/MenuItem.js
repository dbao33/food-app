
const MenuItem = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center
    group hover:bg-white hover:shadow-lg hover:shadow-black/25
    transition-all">
      <div className="text-center">
        <img src="/pizza.png" alt="pizza" className="max-h-auto block max-h-36 mx-auto" />
      </div>

      <h4 className="font-semibold text-xl my-3">
        Pepperoni Pizza
      </h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  )
}
export default MenuItem