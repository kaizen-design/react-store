import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import slugify from 'react-slugify';

export default function ProductCard(props) {  
  return (
    <div className="group relative flex flex-col">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 mb-auto flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {props.title}
            <Link to={slugify(props.title)}>
              <span aria-hidden="true" className="absolute inset-0" />                
            </Link>
          </h3>            
        </div>
        <p className="text-sm font-medium text-gray-900">${props.price}</p>
      </div>
      <button 
        type="button" 
        className="whitespace-nowrap flex mt-3 w-full items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
          <ShoppingCartIcon className="h-6 w-6 mr-3" aria-hidden="true" />
          Add To Cart
      </button>
    </div>
  )  
}