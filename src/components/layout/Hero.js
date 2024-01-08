import Image from "next/image"
import RightIcon from "../icons/RightIcon"

const Hero = () => {
  return (
    <section className="hero mt-4">
      <div className="py-8">
        <h1 className="text-4xl font-bold">
          Everything <br />
          is better <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete,
          a simple yet delicous joy in life
        </p>

        <div className="flex py-4">
          <button className="flex justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full">
            Order now
            <RightIcon />
          </button>
          <button className="flex gap-2 border-0 py-2 text-gray-500 rounded-full font-semibold">
            Learn More
            <RightIcon />
          </button>
        </div>
      </div>
      <div className=" relative">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>

    </section>
  )
}
export default Hero