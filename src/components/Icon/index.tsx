import React from 'react';
import {IoCartOutline, IoPersonOutline, IoSearchOutline} from 'react-icons/io5';
import {AiFillPlusCircle} from 'react-icons/ai';
interface Iicon {
  size? : number;
}
export function CartIcon() {
  return <IoCartOutline size={25} />;
}

export function UserIcon() {
  return <IoPersonOutline size={25} />;
}

export function PlusIcon() {
  return <AiFillPlusCircle size={50} />;
}

export function SearchIcon({size} :Iicon) {
  return <IoSearchOutline size={size ?? 20} />;
}
