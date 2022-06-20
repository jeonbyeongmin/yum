import React from 'react';
import {
  IoCartOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoBookmarkOutline,
  IoBookmark,
  IoHeartOutline,
  IoHeart,
  IoTimeOutline,
} from 'react-icons/io5';
import {
  AiFillPlusCircle,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from 'react-icons/md';
import {FcGoogle} from 'react-icons/fc';
import {HiPlus} from 'react-icons/hi';
import styled from '@emotion/styled';
import {BiCategory} from 'react-icons/bi';
interface Iicon {
  size?: number;
  color?: string;
  activate?: boolean;
}

export function GoogleIcon() {
  return <FcGoogle size={25} />;
}

export function CartIcon() {
  return <IoCartOutline size={25} />;
}

export function UserIcon() {
  return <IoPersonOutline size={25} />;
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
export function TimeIcon() {
  return <IoTimeOutline size={25} />;
}

export function CategoryIcon() {
  return <BiCategory size={25} />;
}

export function LikeIcon({size = 25, activate = false}: Iicon) {
  return (
    <>
      {activate ? (
        <IoHeart size={size} color="red" />
      ) : (
        <IoHeartOutline size={size} color="gray" />
      )}
    </>
  );
}

export function BookmarkIcon({size = 25, activate = false}: Iicon) {
  return (
    <>
      {activate ? (
        <IoBookmark size={size} color="orange" />
      ) : (
        <IoBookmarkOutline size={size} color="gray" />
      )}
    </>
  );
}

export function RightArrowIcon({size = 25}: Iicon) {
  return (
    <ArrowCircle>
      <MdOutlineArrowForwardIos size={size} />
    </ArrowCircle>
  );
}

export function LeftArrowIcon({size = 25}: Iicon) {
  return (
    <ArrowCircle>
      <MdOutlineArrowBackIos size={size} />
    </ArrowCircle>
  );
}

export function PlusIcon({size = 25}: Iicon) {
  return <HiPlus size={size} />;
}

const ArrowCircle = styled.div`
  padding: 7px;
  border-radius: 50%;
  box-shadow: 0 4px 5px lightgray;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: lightgray;
  }
`;
