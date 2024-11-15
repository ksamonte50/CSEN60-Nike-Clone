import Link from "next/link";

export default function Footer() {
  return (
    <>
        <nav className="flex justify-between bg-gray-100">
            <Link href="#"><img alt="Image"/></Link>
            <ul className="flex gap-3">
                <li className=""><Link href="#">Find a Store</Link></li>
                <li className=""><Link href="#">Help</Link></li>
                <li className=""><Link href="#">Join Us</Link></li>
                <li className=""><Link href="#">Sign In</Link></li>
            </ul>
            <div>
                <h3>Featured</h3>
                <ul>
                    <li><Link href="#">Air Force 1</Link></li>
                    <li><Link href="#">Jordan 1</Link></li>
                    <li><Link href="#">Metcon</Link></li>
                    <li><Link href="#">Air Max 270</Link></li>
                </ul>
            </div>
            <div>
                <h3>Shoes</h3>
                <ul>
                    <li><Link href="#">All Shoes</Link></li>
                    <li><Link href="#">Jordan Shoes</Link></li>
                    <li><Link href="#">Running Shoes</Link></li>
                    <li><Link href="#">Basketball Shoes</Link></li>
                </ul>
            </div>
            <div>
                <h3>Clothing</h3>
                <ul>
                    <li><Link href="#">All Clothing</Link></li>
                    <li><Link href="#">Tops & T-Shirts</Link></li>
                    <li><Link href="#">Shorts</Link></li>
                    <li><Link href="#">Hoodies & Pullovers</Link></li>
                </ul>
            </div>
            <div>
                <h3>Kids</h3>
                <ul>
                    <li><Link href="#">Infant & Toddler Shoes</Link></li>
                    <li><Link href="#">Kids Shoes</Link></li>
                    <li><Link href="#">Kids Basketball Shoes</Link></li>
                    <li><Link href="#">Kids Running Shoes</Link></li>
                </ul>
            </div>
        </nav>
    </>
  );
}