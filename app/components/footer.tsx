import Link from "next/link";
import { NikeIcon } from "./navbar";

export default function Footer() {
  return (
    <>
        <Link href="#" className="flex justify-center"><NikeIcon /></Link>
        <ul className="flex justify-center gap-x-8 pt-7 pb-9 font-medium">
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
    </>
  );
}