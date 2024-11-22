import Link from  "next/link";
import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image"

export default function Cart(){
    return(
        <>
        <Navbar />
        <div className ="text-center text-xs py-2.5 text-black font-medium bg-slate-100">
            <p className =" py-.5">Extra 25% Off Select Styles</p>
            <p className = "py-.5">Enter code JUMP25 in bag</p>
        </div>
        <div className ="flex justify-between px-4 py-4">
            <main className ="ps-20">
                <h1 className ="font-medium pl-3">Bag </h1>
                <section  >
                    <Image
                        src="/images/shoe.jpeg"
                        alt="Jordan Stadium 90"
                        width={150}
                        height={150}
                    />
                    <ul>
                        <li>Jordan Stadium 90</li>
                        <li>Men's Shoes</li>
                        <li>Flax/Black/Sanddrift/Baroque Brown</li>
                        <li>Size 14</li>
                    </ul>
                    <ul>
                        <li>$120</li>
                    </ul>
                    <button>Trash</button>
                    <p> Counter</p>
                    <button> Add</button>
                    <button>Wishlist</button>
                </section>
                <ul>
                    <li>Shipping</li>
                    <li>Arrives by Fri, Nov 1 Edit Location</li>
                    <li> </li>
                    <li>Free Pickup</li>
                    <li>Find a Store</li>
                </ul>
            </main>
            <aside >
                <h1 className ="font-medium pl-3" >Summary</h1>
                <ul>
                    <li>Do you have a Promo Code</li>
                    <li>Subtotal <button> QuestionMark</button></li>
                    <li>Estimated Shipping and Handling</li>
                    <li>Estimated Tax <button>QuestionMark</button></li>
                </ul>
                <ul>
                    <li><button>DropDown</button></li>
                    <li>$120.00</li>
                    <li>Free</li>
                    <li>-</li>
                </ul>
                <div>
                    <ul>
                        <li>Total</li>
                        <li>$120</li>
                    </ul>
                </div>
                <p>
                    Members get free Shipping on orders $50.00+
                    Join us or Sign in
                </p>
                <img alt = "greenbar" />
                $50
                <button>Checkout</button>
                <button>Paypal</button>
            </aside>
        </div>
        <Footer/>
        </>
    );
}
