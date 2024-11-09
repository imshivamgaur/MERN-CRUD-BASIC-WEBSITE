import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { RiFileEditFill } from "react-icons/ri";

const Card = ({ product, colorMode, onDelete }) => {
  console.log(product.image);
  return (
    <>
      <div className={` ${colorMode === "dark" ? "text-white bg-gray-700": "text-black bg-gray-300" } hover:translate-y-[-5px] hover:scale-[1.02] hover:shadow-md hover:shadow-[#00000054]  transition-all duration-[.3s]  ease-linear  w-[300px] h-[auto]   p-5 rounded-lg`}>
        {/* <img src="https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        <img className="w-full h-[180px] rounded-lg object-cover " src={product.image} alt="" />
        <p className="font-semibold text-gray-100 capitalize" >{product.name}</p>
        <p>₹{product.price}</p>
        <div className="flex gap-2">
        <button className="px-2 bg-blue-500 text-white py-1 rounded-sm cursor-pointer mt-5">
        <Link to={`/edit/${product._id}`}><RiFileEditFill className="text-2xl" /></Link>
        </button>
        <button onClick={onDelete} className="px-2 bg-red-500 text-white py-1 rounded-sm cursor-pointer mt-5"><RiDeleteBin6Fill className="text-2xl"/></button>
        </div>
      </div>
    </>
  );
};

export default Card;

{
  /* <li key={product._id}>
  <h2>{product.name}</h2>
  <p>Price: ${product.price}</p>
  <img src={product.image} alt={product.name} width="100" />
</li>; */
}
