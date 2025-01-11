import { BiLogoTypescript } from "react-icons/bi";
import { FaFileImage, FaHtml5, FaReact } from "react-icons/fa";
import { FaCircleInfo, FaCss3 } from "react-icons/fa6";
import { FcFolder } from "react-icons/fc";
import { IoGitMerge } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiEslint, SiPostcss, SiVite } from "react-icons/si";
import { TbBrandPnpm, TbBrandTypescript } from "react-icons/tb";
import { TfiLayoutMenuFull } from "react-icons/tfi";
export default function FolderBar() {
  return (
    <div className="min-w-[250px] h-full bg-folderBar text-gray-400">
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div className="flex justify-between items-center w-full px-3">
          <strong className="text-xs">EXPLORER</strong>
          <strong>
            <TfiLayoutMenuFull size={24} />
          </strong>
        </div>
        {/* folder list */}
        <div className="flex justify-start items-center w-full hover:cursor-pointer bg-gray-400/30 text-white">
          <MdOutlineKeyboardArrowDown size={24} />
          <p className="text-xs">VSCODECLONE</p>
        </div>

        <div className="flex flex-col justify-start items-center w-full px-1">
          <ul className="w-full">
            <li className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <MdOutlineKeyboardArrowDown size={24} /> <FcFolder size={18} />{" "}
                node_modules
              </div>
              <ul className="pl-5 w-full">
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> .bin
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> .pnpm
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> .vite
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> .vite-temp
                </li>
              </ul>
            </li>

            <li className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <MdOutlineKeyboardArrowDown size={24} /> <FcFolder size={18} />{" "}
                public\logo
              </div>
              <ul className="pl-12 w-full">
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <FaFileImage color="lightgreen" size={17} /> vsCode.png
                </li>
              </ul>
            </li>

            <li className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <MdOutlineKeyboardArrowDown size={24} /> <FcFolder size={18} />{" "}
                src
              </div>
              <ul className="pl-5 w-full">
                <li className="flex flex-col justify-center items-start gap-1 w-full">
                  <div className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer w-full">
                    <MdOutlineKeyboardArrowDown size={24} />
                    <FcFolder size={18} /> components
                  </div>
                  <div className="flex flex-col justify-center items-start w-full">
                    <ul className="pl-6 w-full">
                      <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                        <MdOutlineKeyboardArrowRight size={24} />{" "}
                        <FcFolder size={18} /> Header
                      </li>
                      <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                        <MdOutlineKeyboardArrowRight size={24} />{" "}
                        <FcFolder size={18} /> LeftBar
                      </li>
                      <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                        <MdOutlineKeyboardArrowRight size={24} />{" "}
                        <FcFolder size={18} /> FolderBar
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> layouts
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> pages
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> routes
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <MdOutlineKeyboardArrowRight size={24} />
                  <FcFolder size={18} /> store
                </li>
              </ul>

              <ul className="pl-6 w-full">
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <FaCss3 color="darkorange" size={17} />
                  App.css
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <FaReact className="text-[#3097b3]" size={17} /> App.tsx
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <FaCss3 color="darkorange" size={17} /> index.css
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <FaReact className="text-[#3097b3]" size={17} /> main.tsx
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-500/30 cursor-pointer">
                  <TbBrandTypescript className="text-[#2947c2]" size={17} />
                  Vite-end.d.ts
                </li>
              </ul>
            </li>

            <li className="flex flex-col justify-start items-start w-full mt-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <IoGitMerge color="#f1502f" size={18} /> .gitignore
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <SiEslint color="blue" size={18} /> eslint.config.js
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <FaHtml5 color="#e34c26" size={18} /> index.html
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <TbBrandPnpm color="#cb3837" size={18} /> pnpm.lock.yaml
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <SiPostcss color="#dc3a3a" size={18} /> postcss.config.js
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <FaCircleInfo color="#f1502f" size={18} /> README.md
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <RiTailwindCssFill color="#38b2ac" size={18} />{" "}
                tailwind.config.js
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <BiLogoTypescript color="lightblue" size={18} />{" "}
                tsconfig.app.json
              </div>
            </li>
            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <BiLogoTypescript color="lightblue" size={18} /> tsconfig.json
              </div>
            </li>

            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <BiLogoTypescript color="lightblue" size={18} />{" "}
                tsconfig.node.json
              </div>
            </li>

            <li className="flex flex-col justify-start items-start w-full my-1">
              <div className="flex justify-start items-center w-full gap-1 hover:bg-gray-500/30 cursor-pointer">
                <SiVite color="#646cff" size={18} /> vite.config.ts
              </div>
            </li>
          </ul>
        </div>

        <div className="h-full flex flex-col justify-end items-start w-full">
          {/* folder list */}
          <div className="flex justify-start items-center w-full hover:cursor-pointer bg-gray-400/10 text-white">
            <MdOutlineKeyboardArrowRight size={24} />
            <p className="text-xs">OUTLİNE</p>
          </div>

          {/* folder list */}
          <div className="flex justify-start items-center w-full hover:cursor-pointer bg-gray-400/10 text-white">
            <MdOutlineKeyboardArrowRight size={24} />
            <p className="text-xs">TİMELINE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
