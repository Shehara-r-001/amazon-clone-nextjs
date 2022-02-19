import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectedTotal } from "../slices/bascketSlice";
import CheckoutItem from "../components/CheckoutItem";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectedTotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* left */}

        <div className="flex-grow m-3 shadow-sm">
          <Image
            src="https://raw.githubusercontent.com/kashika3101/Amazon-Clone/master/slide_1.jpg"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-3">
              {items.length === 0 ? "Your Basket is Empty..!" : "Your Basket.."}
            </h1>

            {items.map((item, index) => (
              <CheckoutItem
                key={index}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col p-10 shadow-md bg-white mx-3 md:my-3">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Sub Total ({items.length} items) :
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 text-white border-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "SignIn to checkout..!" : "Proceed to checkout..!"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
