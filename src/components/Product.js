import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import prime from "../images/prime.png";

const maxRating = 5;
const minRating = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (maxRating - minRating + 1) + minRating)
  );

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col bg-white m-5 p-10 z-30">
      <p className="absolute top-3 right-4 text-xs text-gray-400 italic">
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt="product-img"
      />
      <h4 className="my-5">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={Math.random()} className="h-4 text-yellow-300" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>

      <div className="mb-2">
        <Currency quantity={price} currency="USD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime"
          />
          <p className="text-xs text-gray-400">Free Delivery</p>
        </div>
      )}

      <button className="button mt-auto">Add to Bascket</button>
    </div>
  );
}

export default Product;
