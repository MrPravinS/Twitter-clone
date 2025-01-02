import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 hover:bg-slate-900 gap-3 transition-all cursor-pointer p-5">
      <div className="grid grid-cols-12">
        <div className="grid col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/156991992?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="grid col-span-11">
          <h5>Pravin Shegamwar</h5>
          <p>
            Is it just me or everyone else? DFo you feel the code quality
            decreases as the project size increses?
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
          <div><BiMessageRounded /></div>
          <div><FaRetweet /></div>
          <div><AiOutlineHeart /></div>
          <div><BiUpload /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
