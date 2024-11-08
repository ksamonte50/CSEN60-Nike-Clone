import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <nav className="flex">
          <ul>
            <li><Link href="#">Jordan</Link></li>
            <li><Link href="#">Converse</Link></li>
          </ul>
          <ul>
            <li><Link href="#">Find a Store</Link></li>
            <li><Link href="#">Help</Link></li>
            <li><Link href="#">Join Us</Link></li>
            <li><Link href="#">Sign In</Link></li>
          </ul>
        </nav>
        <nav className="flex">
            <Link href="">Home</Link>
            <ul>
                <li><Link href="#">New</Link></li>
                <li><Link href="#">Men</Link></li>
                <li><Link href="#">Women</Link></li>
                <li><Link href="#">Kids</Link></li>
                <li><Link href="#">Jordan</Link></li>
                <li><Link href="#">Sale</Link></li>
            </ul>
            <ul>
                <li><input type="text" />Search</li>
                <li><Link href="#">Favorites</Link></li>
                <li><Link href="#">Cart</Link></li>
            </ul>
        </nav>
    </>
  );
}