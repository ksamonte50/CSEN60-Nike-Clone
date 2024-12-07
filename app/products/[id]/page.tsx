import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  images: string[];
  sizes: string[];
  description: string;
};

async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
    if (!res.ok) {
      console.error(`Failed to fetch product: ${res.status} - ${res.statusText}`);
      return null;
    }
    const product = await res.json();
    return product;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

export default async function Product({ params }: { params: { id: string } }) {  
  const { id } = await params;
  const product = await fetchProduct(id);

  console.log('Fetched product:', product[0]);


  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  } else if(!product[0].images) {
    return <div className="text-center mt-20">Product missing images</div>;
  }

  // console.log(product[0].images);

  return (
    <>
      <Navbar />
      <nav className="h-[60px] bg-gray-100"></nav>
      <main className="mt-12 flex">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-x-8">
            <div>
              {product[0].images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  width={1728}
                  height={2160}
                  className="rounded-md w-[535px] h-[669px]"
                />
              ))}
            </div>
            <div className="w-[376px]">
              <h1 className="text-xl font-medium">{product[0].name}</h1>
              <p className="text-gray-500 mb-2">{product[0].subtitle}</p>
              <p className="font-medium mb-8">${product[0].price}</p>
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
                {product[0].sizes.map((size) => (
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
              <div className="mb-[52px]">
                <h3 className="font-medium">Shipping</h3>
                <p className="mb-6">You'll see our shipping options at checkout.</p>
                <h3 className="font-medium">Free Pickup</h3>
                <a href="#" className="font-medium border-b border-black pb-1">Find a Store</a>
              </div>
              <p>{product.description}</p>
              <ul className="list-disc list-inside py-7">
                <li className="pb-1 w-[80%]">Shown: Flax/Anthracite/University Gold/Khaki</li>
                <li className="pb-1">Style: HQ2181-200</li>
              </ul>
              <a href="#" className="font-medium border-b-2 border-black pb-1">View Product Details</a>
              <div className="py-[30px] text-xl border-b border-gray-200">
                <h2>Shipping & Returns</h2>
              </div>
              <div>
                <h2 className="py-[30px] text-xl border-b border-gray-200 mb-12">Reviews</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
