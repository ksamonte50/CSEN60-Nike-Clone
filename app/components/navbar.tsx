import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
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
  );
}