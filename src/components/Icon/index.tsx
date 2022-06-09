import React from 'react';
import {IoCartOutline, IoPersonOutline, IoSearchOutline} from 'react-icons/io5';
import {
  AiFillPlusCircle,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
interface Iicon {
  size?: number;
  color?: string;
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
export function PlusOutLineIcon({size = 30, color = '#000'}: Iicon) {
  return <AiOutlinePlus size={size} color={color} />;
}
export function MinusIcon({size = 30, color = '#000'}: Iicon) {
  return <AiOutlineMinus size={size} color={color} />;
}
export function CloseIcon({size = 20, color = '#000'}: Iicon) {
  return <AiOutlineClose size={size} color={color} />;
}

export function SearchIcon({size}: Iicon) {
  return <IoSearchOutline size={size ?? 20} />;
}
