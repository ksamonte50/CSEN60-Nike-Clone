import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <nav className="flex justify-between bg-gray-100">
          <ul className="flex gap-3">
            <li className=""><Link href="#">Jordan</Link></li>
            <li className=""><Link href="#">Converse</Link></li>
          </ul>
          <ul className="flex gap-3">
            <li className=""><Link href="#">Find a Store</Link></li>
            <li className=""><Link href="#">Help</Link></li>
            <li className=""><Link href="#">Join Us</Link></li>
            <li className=""><Link href="#">Sign In</Link></li>
          </ul>
        </nav>
        <nav className="flex justify-between">
            <Link href="">Home</Link>
            <ul className="flex gap-3">
                <li><Link href="#">New</Link></li>
                <li><Link href="#">Men</Link></li>
                <li><Link href="#">Women</Link></li>
                <li><Link href="#">Kids</Link></li>
                <li><Link href="#">Jordan</Link></li>
                <li><Link href="#">Sale</Link></li>
            </ul>
            <ul className="flex gap-3">
                <li><input type="text" />Search</li>
                <li><Link href="#">Favorites</Link></li>
                <li><Link href="#">Cart</Link></li>
            </ul>
        </nav>
    </>
  );
}