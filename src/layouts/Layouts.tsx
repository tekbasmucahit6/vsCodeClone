import FolderBar from "../components/FolderBar/FolderBar";
import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";
import AllRoutes from "../routes/AllRoutes";

export default function Layouts() {
  return (
    <>
          <Header />
      <div className="HeightCalc">
        <div className="h-full flex justify-start items-start">
          <LeftBar />
          <FolderBar />
          <AllRoutes />
        </div>
      </div>
    </>
  );
}
