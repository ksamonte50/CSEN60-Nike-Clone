import Link from "next/link";

import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-5xl font-bold">Home</h1>
    </>
  );
}
