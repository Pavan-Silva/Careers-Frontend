"use client";
import { Input } from "@nextui-org/react";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="search-bar opacity-0 flex w-full bottom-0 absolute justify-center items-end px-5">
      <Input
        radius="full"
        size="lg"
        type="text"
        placeholder="Search Jobs"
        className="pb-14"
        classNames={{
          inputWrapper: "h-20 bg-opacity-90",
          input: "text-2xl",
        }}
        startContent={
          <IoSearchOutline className="w-7 h-7 mr-1.5 mt-0.5 fill-black" />
        }
        endContent={
          <BsFillArrowRightCircleFill className="w-16 h-16 -mr-1.5 rounded-full cursor-pointer fill-black" />
        }
      />
    </div>
  );
};

export default SearchBar;
