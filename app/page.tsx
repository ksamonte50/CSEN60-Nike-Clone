import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Image 
        width={940}
        height={660}
        alt="Banner Image of Lebron James" 
        src="/images/banner.jpg"
        className="w-screen h-[594px] object-cover object-[center_40%] mb-12"
      />
      <section className="text-center">
        <h1 className="text-7xl font-black font-futura">"I AM THE PRESSURE"</h1>
        <p className="mt-2">Lebron doesn't duck pressure, he becomes it. The Lebron XXII is built to bring it.</p>
        <button className="mt-5 bg-black text-white py-1.5 px-4 rounded-full hover:bg-gray-500">Explore</button>
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
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-300"><Link href="/products/vomero-roam"></Link></button>
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
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-300">Shop</button>
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
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-300">Shop</button>
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
            <button className="mt-5 bg-white text-black font-medium py-1.5 px-4 rounded-full hover:bg-gray-300">Shop</button>
          </div>
        </div>
      </section>
      <section className="text-center m-12">
        <h1 className="text-5xl font-black font-futura">LATEST DROPS</h1>
        <p className="mt-2">Featuring the Air Jordan 4 and more.</p>
        <button className="mt-5 bg-black text-white py-1.5 px-4 rounded-full hover:bg-gray-500">Shop New Arrivals</button>
      </section>
      <div className="relative w-full h-[594px] mb-[84px]">
        <Image
          alt="Jordan 4 'Fear'"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_2065,c_limit/2c0e0ce5-bc6c-47fd-b48a-6541e54dbd3d/nike-just-do-it.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <Footer />
    </>
  );
}
