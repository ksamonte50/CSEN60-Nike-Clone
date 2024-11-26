import Heart from "../../components/navbar";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

export default function Product() {
  // const product = await fetchProduct(params.id);
  const product = {
    "id": "vomero-roam",
    "name": "Nike Zoom Vomero Roam",
    "subtitle": "Women's Winterized Shoes",
    "price": 120,
    "images": ["/images/vomero1.jpeg"],
    "sizes": ["W 5 / M 3.5", "W 5.5 / M 4", "W 6 / M 4.5", "W 6.5 / M 5", "W 7 / M 5.5",],
    "description": "Designed for city conditions, this winterized version of the Vomero is made for wet weather. Durable materials and a rubber mudguard work together to help safeguard your shoes from dirt and puddles. Plus, a chunky midsole gives you a visible boost of comfort and style wherever you wander.",
    "category": "Men's Shoes"
  };

  // if (!product) {
  //   return <div className="text-center mt-20">Product not found</div>;
  // }

  return (
    <>
      <Navbar />
      <nav className="h-[60px] bg-gray-100"></nav>
      <main className="mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              ))}
            </div>
            <div className="w-[376px]">
              <h1 className="text-xl font-medium">{product.name}</h1>
              <p className="text-gray-500 mb-2">{product.subtitle}</p>
              <p className="font-medium mb-8">${product.price}</p>
              <div className="flex justify-between">
                <p className="font-medium">Select Size</p>
                <div className="font-medium flex gap-x-1 items-center">
                  <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    viewBox="0 0 24 24" 
                    role="img" 
                    width="24px" 
                    height="24px" 
                    fill="none"
                  >
                    <path stroke="currentColor" strokeWidth="1.5" d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"></path><path stroke="currentColor" strokeWidth="1.5" d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"></path>
                  </svg>
                  <a className="text-sm" href="#">Size Guide</a>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-3 mb-8 gap-[7px] w-full">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-gray-200 h-[48px] rounded hover:border-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-center">4 interest-free payments of $45.00 with</p>
              <p className="flex justify-center items-center">
                <Image
                  src="/images/klarna.png"
                  alt="Klarna Logo"
                  width={522}
                  height={131}
                  className="w-auto h-3.5"
                />.
                <a href="#" className="pt-[1px] pl-1 underline">Learn More</a>
              </p>
              <button className="font-medium bg-black text-white rounded-full w-full h-[60px] mt-[41px] mb-3">
                Add to Bag
              </button>
              <button className="font-medium border border-gray-400 text-black rounded-full w-full h-[60px] mb-8">
                Favorite
              </button>
              <div>
                <h3>Shipping</h3>
                <p>You'll see our shipping options at checkout.</p>
                <h3>Free Pickup</h3>
                <a href="#">Find a Store</a>
              </div>
              <p>{product.description}</p>
              <ul>
                <li><p>Shown: Flax/Anthracite/University Gold/Khaki</p></li>
                <li><p>Style: HQ2181-200</p></li>
              </ul>
              <a href="#">View Product Details</a>
              <div>
                <h2>Shipping & Returns</h2>
              </div>
              <div>
                <h2>Reviews</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
