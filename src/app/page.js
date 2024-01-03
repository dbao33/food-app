import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import Section from "@/components/layout/Section";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <Section
          sub={'Our story'}
          main={'About us'}
        />
        <div className="text-gray-500 text-sm max-w-lg mx-auto mt-4 flex flex-col gap-4">
          <p>
            Pizza is a popular and delicious Italian dish that has gained worldwide recognition. It typically consists of a round, flat dough base topped with various ingredients and baked in an oven. The dough is traditionally made from flour, water, yeast, salt, and sometimes olive oil.

          </p>
          <p>
            Pizza can be cooked in different styles, such as Neapolitan, New York-style, Chicago deep-dish, or thin-crust. Each style has its own unique characteristics and flavors. It can be enjoyed as a quick and convenient meal, ordered from a pizzeria or restaurant, or even made at home.
          </p>
        </div>

      </section>
      <section className="text-center my-8">
        <Section
          sub={'Don\'t hesitate to'}
          main={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500"
            href="Tel:0326722000">
            0326722000
          </a>
        </div>
      </section>
      <footer className=" border-t p-2 text-center text-gray-500 mt-16">
        &copy; 2024 Ryu
      </footer>
    </>
  )
}
