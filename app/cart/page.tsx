import Link from  "next/link";
import React from "react";

import Navbar from "../components/navbar";

export default function Cart(){
    return(
        <>
        <Navbar />
        <div>
            <p>Extra 25% Off Select Styles</p>
            <p>Enter code JUMP25 in bag</p>
        </div>
        <main>
            <h1>Bag </h1>
            <section>
                <img alt="Shoe Image"/>
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
        <aside>
            <h1>Summary</h1>
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
        </>
    );
}
