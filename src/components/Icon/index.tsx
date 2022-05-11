import React from 'react';
import {IoCartOutline, IoPersonOutline, IoSearchOutline} from 'react-icons/io5';
import {AiFillPlusCircle} from 'react-icons/ai';

export function CartIcon() {
  return <IoCartOutline size={25} />;
}

export function UserIcon() {
  return <IoPersonOutline size={25} />;
}

export function PlusIcon() {
  return <AiFillPlusCircle size={50} />;
}

export function SearchIcon() {
  return <IoSearchOutline size={20} />;
}
