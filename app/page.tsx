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
      <section>
        <h2>Ball With The Best</h2>
        <div>
          <button>Arrow Left</button>
          <button>Arrow Right</button>
        </div>
      </section>
    </>
  );
}
