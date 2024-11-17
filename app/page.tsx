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
      <section className="grid grid-cols-2 mt-12">
        <div className="relative h-[594px]">
          <Image 
            fill
            alt="Vomero Roam"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/1c86b21e-e78b-49ad-bb4b-39011189469b/nike-just-do-it.jpg" 
          />
          <div className="absolute bottom-12 left-12 text-white">
            <p className="mb-2">For Rain or Shine</p>
            <h2 className="text-white text-2xl">Vomero Roam</h2>
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-500">Shop</button>
          </div>
        </div>
        <div className="relative h-[594px]">
          <Image 
            fill
            alt="Pegasus 41 PRM"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/154dbd67-d0a8-4cc4-b590-ad73f3177397/nike-just-do-it.jpg" 
          />
          <div className="absolute bottom-12 left-12 text-white">
            <p className="mb-2">Run in the Dark</p>
            <h2 className="text-white text-2xl">Pegasus 41 PRM</h2>
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-500">Shop</button>
          </div>
        </div>
        <div className="relative h-[594px]">
          <Image 
            fill
            alt="Lebron XXII 'Currency'"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/11d5983d-9f48-43e9-8380-87f00e74267b/nike-just-do-it.jpg" 
          />
          <div className="absolute bottom-12 left-12 text-white">
            <p className="mb-2">Nike Basketball</p>
            <h2 className="text-white text-2xl">LeBron XXII 'Currency'</h2>
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-500">Shop</button>
          </div>
        </div>
        <div className="relative h-[594px]">
          <Image 
            fill
            alt="Women's Motiva GORE-TEX"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/65b43c6e-c2ac-461e-95d8-76ab8a4f12dd/nike-just-do-it.jpg" 
          />
          <div className="absolute bottom-12 left-12 text-white">
            <p className="mb-2">For All Walks</p>
            <h2 className="text-white text-2xl">Women's Motiva GORE-TEX</h2>
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-500">Shop</button>
          </div>
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
