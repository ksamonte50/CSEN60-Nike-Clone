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
      <section className="flex justify-between px-12">
        <h2 className="text-xl">Featured Products</h2>
        <div>
          <button className="bg-gray-100 p-4 rounded-full mr-2 hover:bg-gray-200">
            <svg 
                enable-background="new 0 0 15 26" 
                height="15px" 
                width="15px" 
                id="Layer_1" 
                version="1.1" 
                viewBox="0 0 15 26" 
                xmlSpace="preserve" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <polygon fill="#231F20" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "/>
            </svg>
          </button>
          <button className="bg-gray-100 p-4 rounded-full hover:bg-gray-200">
            <svg 
              enable-background="new 0 0 15 26" 
              height="15px" 
              width="15px" 
              id="Layer_1" 
              version="1.1" 
              viewBox="0 0 15 26" 
              xmlSpace="preserve" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink"
          >
              <polygon fill="#231F20" points="2.019,0.58 -0.035,2.634 10.646,13.316 -0.035,23.997 2.019,26.052 14.755,13.316 "/>
          </svg>
          </button>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="relative">
          <Image 
            fill
            alt="Vomero Roam"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/1c86b21e-e78b-49ad-bb4b-39011189469b/nike-just-do-it.jpg" 
          />
          <h2>Lebron James</h2>
          <button>Shop</button>
        </div>
        <div>
          <Image 
            width={100}
            height={100}
            alt="Pegasus 41 PRM"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/154dbd67-d0a8-4cc4-b590-ad73f3177397/nike-just-do-it.jpg" 
          />
          <h2>Ja Morant</h2>
          <button>Shop</button>
        </div>
        <div>
          <Image 
            width={100}
            height={100}
            alt="Lebron XXII 'Currency'"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/11d5983d-9f48-43e9-8380-87f00e74267b/nike-just-do-it.jpg" 
          />
          <h2>Sabrina Ionescu</h2>
          <button>Shop</button>
        </div>
        <div>
          <Image 
            width={100}
            height={100}
            alt="Women's Motiva GORE-TEX"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1033,c_limit/65b43c6e-c2ac-461e-95d8-76ab8a4f12dd/nike-just-do-it.jpg" 
          />
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
