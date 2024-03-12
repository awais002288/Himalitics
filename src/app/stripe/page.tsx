"use client";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import stripePromise from "../stripe";

export default function page() {
  const product = {
    product_id: "1",
    product_name: "Chowmein",
    product_price: 100,
    product_quantity: 1,
  };

  const makePayment = async () => {
    const body = {
      products: product,
    };

    const stripe: any = await stripePromise;

    if (!stripe || !stripe?.redirectToCheckout) {
      throw new Error("Stripe.js library is not initialized properly.");
    }

    const headers = { "Content-Type": "application/json" };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: session?.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <main className="flex min-h-screen  items-center justify-center">
      <div className="z-10 w-full max-w-5xl flex  items-center justify-center font-mono text-sm lg:flex">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold underline`}>
            Cart Calculation
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className="flex gap-2">
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt=""
              height={120}
              width={120}
              className="rounded"
            />
            <div>
              <p>{product?.product_name}</p>
              <p>Quantity: 1</p>

              <p> Total: {product.product_price}</p>
            </div>
          </div>
          <center>
            <button
              className=" h-[50px] shadow-lg w-[200px] w-full text-white bg-green-500 rounded-full mt-3 hover:scale-105 duration-500 text-[18px] font-semibold"
              onClick={makePayment}
            >
              Checkout
            </button>
          </center>
        </div>
      </div>
    </main>
  );
}
