import { BiLogoVisualStudio } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TfiLayoutMenuFull } from "react-icons/tfi";
import { BiCopy } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
export default function Header() {
  return (
    <div className="headerTemplate bg-header py-2 px-2 grid grid-cols-3">
      <div className="flex items-center justify-start">
        <div className="text-[#22A7F2]">
          <BiLogoVisualStudio size={20} />
        </div>
        <div className="flex justify-start items-center gap-3 ml-3 text-sm">
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            File
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            Edit
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            Selection
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            View
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            Go
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            Run
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            Terminal
          </p>
          <p className="text-[#95959E] hover:bg-headerHoverTextBg px-1 cursor-pointer">
            Help
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 text-headerText mr-5">
          <FaArrowLeft size={18} className="hover:bg-headerHoverTextBg" />
          <FaArrowRight size={18} className="hover:bg-headerHoverTextBg" />
        </div>
        <input
          type="text"
          className="bg-searchBar w-3/4 h-6 rounded-md outline-none px-2 placeholder:text-[#95959E] placeholder:text-sm text-center text-white"
          placeholder="vsCodeClone [Administrator]"
        />
          </div>
          
          <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-8 text-white">
                  <TfiLayoutMenuFull size={20} className="hover:bg-headerHoverTextBg cursor-pointer" />
                  <BiCopy size={18} className="hover:bg-headerHoverTextBg cursor-pointer" />
                  <IoIosClose size={20} className="hover:bg-red-600 cursor-pointer" />
              </div>
          </div>
    </div>
  );
}
