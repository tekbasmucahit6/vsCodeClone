import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
export default function Home() {
  const [content, setContent] = useState("");
  const [lineNumbers, setLineNumbers] = useState<number[]>([1]);

  // Satır numaralarını dinamik olarak güncelle
  useEffect(() => {
    const lines = content.split("\n").length; // Yeni satırları algıla
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1)); // Satır numaralarını güncelle
  }, [content]);

  return (
    <div className="bg-mainCompBg w-full h-full text-white px-6 flex flex-col justify-start items-start gap-5">
      <div className="flex justify-start items-start bg-folderBar w-full">
        <div className="px-3 py-2 flex justify-between items-center text-xs border border-mainCompBg min-w-[150px] hover:bg-mainCompBg/10 cursor-pointer">
          <p className="flex justify-center items-center gap-3">
            <FaReact color="#61DAFB" size={20} /> Home.tsx{" "}
            <IoMdClose size={20} />
          </p>
        </div>

        <div className="px-3 py-2 flex justify-between items-center text-xs border border-mainCompBg min-w-[150px] hover:bg-mainCompBg/10 cursor-pointer">
          <p className="flex justify-center items-center gap-3">
            <FaReact color="#61DAFB" size={20} /> Main.tsx{" "}
            <IoMdClose size={20} />
          </p>
        </div>

        <div className="px-3 py-2 flex justify-between items-center text-xs border border-mainCompBg min-w-[150px] hover:bg-mainCompBg/10 cursor-pointer">
          <p className="flex justify-center items-center gap-3">
            <FaReact color="#61DAFB" size={20} /> FolderBar.tsx{" "}
            <IoMdClose size={20} />
          </p>
        </div>

        <div className="px-3 py-2 flex justify-between items-center text-xs border border-mainCompBg min-w-[150px] hover:bg-mainCompBg/10 cursor-pointer">
          <p className="flex justify-center items-center gap-3">
            <FaReact color="#61DAFB" size={20} /> LeftBar.tsx{" "}
            <IoMdClose size={20} />
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start h-full w-full">
        {/* Satır numaraları */}
        <div className="w-[40px] flex flex-col justify-start items-center pr-2 text-gray-500">
          {lineNumbers.map((line) => (
            <div key={line} className="h-[1.5rem] leading-[1.5rem]">
              {line}
            </div>
          ))}
        </div>

        {/* Yazı yazma alanı */}
        <div className="relative h-full w-full max-h-full">
          {/* Textarea */}
          <textarea
            className="absolute top-0 left-0 w-full h-full bg-transparent text-white caret-white leading-[1.5rem] focus:outline-none z-20 whitespace-pre-wrap overflow-auto"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            spellCheck="false"
          ></textarea>
        </div>
      </div>

      <div className="h-[30px] w-full  bottom-0">
        <div className="flex justify-end px-4 items-center h-full w-full gap-4 text-xs">
          <p>Ln61, Col1</p>
          <p>spaces2</p>
          <p>utf-8</p>
          <p>CRLF</p>
          <p>{} TypeScript JSX</p>
          <p>Codeium</p>
        </div>
      </div>
    </div>
  );
}
