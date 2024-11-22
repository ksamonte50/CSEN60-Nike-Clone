import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
        <Link href="#" className="flex justify-center">
            <Image 
                data-qa="image-media-img" 
                alt="Nike. Just Do It" 
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1695,c_limit/f8aaccc0-9f42-4956-9b6b-3112596a9d01/nike-just-do-it.png" 
                data-landscape-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/f8aaccc0-9f42-4956-9b6b-3112596a9d01/nike-just-do-it.png" data-portrait-url="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/f8aaccc0-9f42-4956-9b6b-3112596a9d01/nike-just-do-it.png" 
                data-image-loaded-class="guL_1FMX" 
                width={2880}
                height={60}
            />
        </Link>
        <ul className="flex justify-center gap-x-8 pt-[26px] pb-[34px] mt-3 font-medium">
            <li className=""><Link href="#">Find a Store</Link></li>
            <li className=""><Link href="#">Help</Link></li>
            <li className=""><Link href="#">Join Us</Link></li>
            <li className=""><Link href="#">Sign In</Link></li>
        </ul>
        <nav className="flex justify-center gap-x-28 mt-12 mb-14">
            <div>
                <h3 className="text-xl mb-6">Featured</h3>
                <ul>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Air Force 1</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Jordan 1</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Metcon</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Air Max 270</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl mb-6">Shoes</h3>
                <ul>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">All Shoes</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Jordan Shoes</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Running Shoes</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Basketball Shoes</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl mb-6">Clothing</h3>
                <ul>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">All Clothing</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Tops & T-Shirts</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Shorts</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Hoodies & Pullovers</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl mb-6">Kids</h3>
                <ul>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Infant & Toddler Shoes</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Kids Shoes</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Kids Basketball Shoes</Link></li>
                    <li className="text-gray-500 font-medium mb-3"><Link href="#">Kids Running Shoes</Link></li>
                </ul>
            </div>
        </nav>
        <div className="flex justify-center m-auto mb-15 pt-12 border-b border-gray-200 w-[1599px]"></div>
        <nav className="flex justify-between p-12">
            <div>
                <h4 className="text-sm font-medium mb-9">Resources</h4>
                <ul className="">
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Gift Cards</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Find a Store</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Membership</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Nike Journal</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Site Feedback</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-9">Help</h4>
                <ul className="">
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Get Help</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Order Status</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Shipping and Delivery</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Returns</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Order Cancellation</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Payment Options</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Gift Card Balance</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-9">Company</h4>
                <ul className="">
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">About Nike</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">News</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Careers</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Investors</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Purpose</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Sustainability</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-9">Promotions and Discounts</h4>
                <ul className="">
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Students</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Military</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Teachers</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">First Responders & Medical Professionals</Link></li>
                    <li className="text-gray-500 text-sm font-medium mb-3"><Link href="#">Birthday</Link></li>
                </ul>
            </div>
            <div className="flex justify-end items-stretch">
                <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    viewBox="0 0 24 24" 
                    role="img" 
                    width="24px" 
                    height="24px" 
                    fill="none"
                    className="text-gray-500 w-4 mr-1"
                >
                    <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path>
                </svg>
                <h4 className="text-gray-500 text-sm font-medium mt-0.5">United States</h4>
            </div>
        </nav>
        <ul>
            <li><Link href="#">© 2024 Nike, Inc. All Rights Reserved</Link></li>
            <li><Link href="#">© 2024 Nike, Inc. All Rights Reserved</Link></li>
            <li><Link href="#">© 2024 Nike, Inc. All Rights Reserved</Link></li>
            <li><Link href="#">© 2024 Nike, Inc. All Rights Reserved</Link></li>

        </ul>
    </>
  );
}