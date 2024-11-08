import Link from "next/link";

import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <img alt="Image"/>
      <section>
        <h1>"I AM THE PRESSURE"</h1>
        <p>Lebron doesn't duck pressure, he becomes it. The Lebron XXII is built to bring it.</p>
        <button>Explore</button>
      </section>
    </>
  );
}
