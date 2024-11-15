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
      <section>
        <div>
          <Image 
            alt="Jordan 4 'Fear'"
            width={500}
            height={500}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6277086f-b7f9-4e91-957c-9fdb4e822ede/AIR+JORDAN+4+RETRO.png" 
          />
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
