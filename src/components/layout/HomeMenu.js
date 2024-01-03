import Image from "next/image"
import MenuItem from "../Menu/MenuItem"
import Section from "./Section"

const HomeMenu = () => {
  return (
    <section>
      <div
        className="relative left-0 right-0 h-full w-full justify-start"

      >
        <div className="absolute left-0 -top-[70px] -z-10 text-left">
          <Image src={'/sallad1.png'} width={108} height={189} alt={'sallad1'} />
        </div>
        <div className="absolute -top-[100px] -z-10 right-0">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad2'} />
        </div>
      </div>
      <div className="text-center mb-4">
        <Section
          sub={'Check out'}
          main={'Menu'}
        />

      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}
export default HomeMenu