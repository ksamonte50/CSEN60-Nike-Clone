// page.tsx for Cart 
"use client";

import Link from  "next/link";
import React, {useState} from "react";
import { incrementCounter, decrementCounter } from "../cart/cart";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image"


export function Heart() {
    return (
      <svg 
        aria-hidden="true" 
        focusable="false" 
        viewBox="0 0 24 24" 
        role="img" 
        width="18px" 
        height="18px" 
        fill="none"
        >
          <path 
            stroke="currentColor" 
            strokeWidth="1.4" 
            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
            />
        </svg>
    )
  }
  
  export function DropDown() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-7 w-7"
        >
            <path
                // fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
      
  export function QuestionMark(){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="size-4"
            >
            <path 
            fillRule="evenodd" 
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" 
            clipRule="evenodd" 
            />
        </svg>
    )
  }

export default function Cart(){
    const [counter, setCounter] = useState<number>(1); // Manage counter state
    const itemPrice = 120.00;
    const total = itemPrice * counter;
    const [showPromoInput, setShowPromoInput] = useState(false); // Add state to toggle dropdown content
    const [promoCode, setPromoCode] = useState(""); // Add state for promo code input
    const [isOpen, setIsOpen] = useState(false);
    // Increment counter
    const incrementCounter = () => setCounter(counter + 1); 
    // Decrement counter
    const decrementCounter = () => setCounter(counter > 1 ? counter - 1 : 0);

      // Toggle dropdown visibility
    const togglePromoInput = () => {
        setShowPromoInput(!showPromoInput);
    };

  // Apply promo code (logic placeholder)
    const applyPromoCode = () => {
        alert(`Promo Code Applied: ${promoCode}`);
    };


    return(
        <>
        <Navbar />
        <nav className ="text-center text-xs py-2.5 text-black font-medium bg-gray-100">
            <p className =" py-.5">Extra 25% Off Select Styles</p>
            <p className = "py-.5">Enter code JUMP25 in bag</p>
        </nav>
        <div className ="flex-design-layout flex justify-between px-48 py-4">
            <main className ="flex-grow border-b border-gray-300 w-full pr-10 h-[27rem]">
                
                <h1 className ="font-normal text-2xl mb-5">Bag </h1>

                {counter < 1 ? (
                    <p className="text-center text-gray-500 flex flex-start">
                    There are no items in your shopping cart.
                    </p>
                ) : (
                    <div>
                        <section className ="flex flex-row " >
                            <Image className = "basis 1/2"
                                src="/images/shoe.jpeg"
                                alt="Jordan Stadium 90"
                                width={150}
                                height={150}
                            />
                            <ul className = "pl-3 pr-20 basis 1/4">
                                <li className = "font-medium pb-0.5">Jordan Stadium 90</li>
                                <li className = "text-gray-500 pb-.5">Men's Shoes</li>
                                <li className = "text-gray-500 pb-.5">Flax/Black/Sanddrift/Baroque Brown</li>
                                <li className = "text-gray-500 flex flex-row pb-.5">Size <p className ="underline ml-4">14</p></li>
                            </ul>
                            <ul className = "basis 1/4 ml-auto">
                                <li className = "font-medium">$120.00</li>
                            </ul>
                        </section>
                
                        <div className = "flex flex-wrap py-5">
                            <ul className = "flex flex-wrap justify-between border border-grey rounded-full mr-4 p-2 w-28">
                            {/* trash */}
                                <button onClick={decrementCounter} >
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" 
                                className="h-5 w-5"
                                >
                                    <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
                                    />
                                    </svg>
                                </button>

                                <p id="counterDisplay" className="text-base font-light"> {counter} </p>

                                {/* add quantitiy*/}
                                <button onClick={incrementCounter}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                        <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M12 4.5v15m7.5-7.5h-15" 
                                        />                   
                                </svg>
                                </button> 

                            </ul>
                            
                                {/* Add to wishlist */}

                                <button className = "border border-grey rounded-full mr-2 p-3">
                                    <Link href="#"><Heart /></Link>
                                </button>
                            
                       </div>
                        <ul>
                            <li className = "font-medium">Shipping</li>
                            <li className = "flex flex-row">Arrives by Fri, Nov 1 
                                <p className= " font font-medium underline ml-2 ">Edit Location </p>
                            </li>
                            <li className="h-8"> </li>
                            <li className = "font-medium">Free Pickup</li>
                            <li className = "underline font-medium ">Find a Store</li>
                        </ul>
                    </div>
             )}
            </main>
            {/* Section containg totals and Summary */}
            <aside className =" w-full max-w-80" >
                <h1 className ="font-normal text-2xl mb-4" >Summary</h1>

                <div className=" flex-row-container flex flex-row justify-between items-start pb-2" >
                    <ul >
                        <li className ="font-medium pb-2"> Do you have a Promo Code </li>

                        <li className="font-light pb-2">
                            {isOpen && (
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Promo Code"
                                        className="border rounded-md px-4 py-2 w-full mb-2"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                                        onClick={applyPromoCode}
                                    >
                                        Apply
                                    </button>
                                </div>
                            )}
                        </li>


                        <li className ="font-light pb-2">Subtotal <button> <QuestionMark /> </button></li>
                        <li className ="font-light pb-2">Estimated Shipping and Handling</li>
                        <li className ="font-light pb-2">Estimated Tax <button> <QuestionMark /></button></li>
                    </ul>
                    <ul className={`flex flex-col items-end ${isOpen ? 'mt-8' : ''}`}>
                        <li className="font-light pb-1">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <DropDown />
                            </button></li>
                        <li className ="font-light pb-2">${total.toFixed(2)}</li>
                        <li className ="font-light pb-2">Free</li>
                        <li className ="font-light text-xl">-</li>
                    </ul>
                </div>


                <div className ="Standard-Container border-t border-b border-gray-300 py-4" >
                    <ul className="flex flex-row  justify-between">
                        <li>Total </li>
                        <li className ="font-medium">${total.toFixed(2)}</li>
                    </ul>
                </div>
                <p className ="py-4 text-sm"> 
                    Members get free shipping on orders $50.00+  
                    <br/>
                    <span className ="text-gray-600 cursor-pointer underline whitespace-nowrap"> Join us </span>
                       {" "} or {" "}
                    <span className ="text-gray-600 cursor-pointer underline whitespace-nowrap"> Sign in</span>
                </p>

                <div className="flex items-center space-x-2">
                    <div className="bg-green-800 rounded h-2 w-full"></div>
                    <span className=" text-black">$50</span>
                </div>
                <div className="mt-4 space-y-2">
                <button 
                    className="bg-black
                    text-white py-2 px-6 
                    rounded-full w-full h-16
                    text-base font-normal ">
                    Checkout
                </button>
                <a href ="https://www.paypal.com/us/home?kid=p75883314412&gad_source=1&gclid=CjwKCAiAmMC6BhA6EiwAdN5iLdqjeM8BAAdApa7Tq7UEcXymhgTRW8oNxiBg9WJd8NppPk8rg_QLuRoCCMEQAvD_BwE&gclsrc=aw.ds" className="bg-gray-100 py-2 px-6 rounded-full w-full h-16 flex items-center justify-center space-x-2 text-base italic font-bold">
                    <span>
                        <span className="text-blue-900">Pay</span>
                        <span className="text-blue-400">Pal</span>
                    </span>
                </a>
            </div>
            </aside>
        </div>
        <Footer/>
        </>
    );
}



