import { FaCopy } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { SiCodeium } from "react-icons/si";
import {
  VscAccount,
  VscDebugAlt,
  VscExtensions,
  VscLiveShare,
  VscRemote,
  VscSettingsGear,
} from "react-icons/vsc";
export default function LeftBar() {
  return (
    <div className="h-full bg-leftBar flex flex-col border-r border-black">
      <div className="flex flex-col justify-start items-start text-gray-600 gap-1">
        <div className="py-2 px-2 bg-leftBarHover border-l-2 hover:border-white hover:cursor-pointer">
          <FaCopy size={28} />
        </div>

        <div className="py-2 px-2 hover:text-gray-400 border-l-2 border-black hover:cursor-pointer">
          <LiaSearchSolid size={28} />
        </div>

        <div className="py-2 px-2 hover:text-gray-400  border-l-2 border-black hover:cursor-pointer">
          <IoGitBranchOutline size={28} />
        </div>

        <div className="py-2 px-2 hover:text-gray-400 border-l-2 border-black hover:cursor-pointer">
          <VscDebugAlt size={28} />
        </div>

        <div className="py-2 px-2 hover:text-gray-400  border-l-2 border-black hover:cursor-pointer">
          <VscExtensions size={28} />
        </div>

        <div className="py-2 px-2 hover:text-gray-400  border-l-2 border-black hover:cursor-pointer">
          <SiCodeium size={28} />
        </div>

        <div className="py-2 px-2 hover:text-gray-400 border-l-2 border-black hover:cursor-pointer">
          <VscLiveShare size={28} />
        </div>
      </div>

      <div className="flex justify-center items-end h-full text-gray-600">
        <div className="flex flex-col justify-center items-center">
          <div className="py-2 px-2 hover:text-gray-400 border-l-2 border-black hover:cursor-pointer">
            <VscAccount size={28} />
          </div>
          <div className="py-2 px-2 hover:text-gray-400 border-l-2 border-black hover:cursor-pointer">
            <VscSettingsGear size={28} />
          </div>
          <div className="py-1 px-2 bg-emerald-500 text-gray-600/70 hover:text-gray-400 border-l-2 border-black hover:cursor-pointer">
            <VscRemote size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
