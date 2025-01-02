import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { BiMoney, BiSolidHome, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBellFill, BsBookmark } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import FeedCard from "./components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidbarButton {
  title: string;
  icon: React.ReactNode;
}

const siderbarMenuItems: TwitterSidbarButton[] = [
  {
    title: "Home",
    icon: <BiSolidHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBellFill />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title:"Twitter Blue",
    icon:<BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title:"More Options",
    icon:<SlOptions />
  }
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-1   ml-12">
          <div className="text-4xl hover:bg-gray-800 h-fit w-fit rounded-full p-3 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {siderbarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4  hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-5">
              <button className="bg-[#1d9bf0]  py-2 text-lg font-semibold rounded-full w-full ">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-auto border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
