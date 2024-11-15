import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Image alt="Banner Image of Lebron James" src="/banner.jpg"/> */}
      <section className="text-center">
        <h1 className="text-6xl font-black">"I AM THE PRESSURE"</h1>
        <p className="mt-2">Lebron doesn't duck pressure, he becomes it. The Lebron XXII is built to bring it.</p>
        <button className="mt-5 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-500">Explore</button>
      </section>
      <section className="flex justify-between">
        <h2 className="text-xl">Ball With The Best</h2>
        <div>
          <button></button>
          <button>Arrow Right</button>
        </div>
      </section>
      <section>
        <div>
          <img alt="Image"/>
          <h2>Lebron James</h2>
          <button>Shop</button>
        </div>
        <div>
          <img alt="Image"/>
          <h2>Ja Morant</h2>
          <button>Shop</button>
        </div>
        <div>
          <img alt="Image"/>
          <h2>Sabrina Ionescu</h2>
          <button>Shop</button>
        </div>
      </section>
      <section>
        <div>
          <img alt="Image"/>
          <h3>I Get Up</h3>
          <h2>Ja 2</h2>
          <button>Shop</button>
        </div>
        <div>
          <img alt="Image"/>
          <h3>'Zero Days Off'</h3>
          <h2>Tatum 3 & More</h2> 
          <button>Shop</button>
        </div>
        <div>
          <img alt="Image"/>
          <h3>NBA Gear</h3>
          <h2>Game Day Looks</h2>
          <button>Shop</button>
        </div>
        <div>
          <img alt="Image"/>
          <h3>Derek Lively's picks</h3>
          <h2>Off-Court Energy</h2>
          <button>Shop</button>
        </div>
      </section>
      <section>
        <h1>ON POINT ALL DAY</h1>
        <p>Featuring Jalen Brunson in the new Nike C1TY</p>
        <button>Explore</button>
      </section>
      <img alt="Image"/>
    </>
  );
}
