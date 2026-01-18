import { CgStack } from "react-icons/cg";
import { FaWrench } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { Button } from "../ui/button";
import { MdFormatSize } from "react-icons/md";
import { Noto_Color_Emoji } from "next/font/google";
import { HelpCircle } from "lucide-react";

const LayoutTop = ({ children }: { children: React.ReactNode }) => {

  function handleOpenBar(){
    
  }
  return (
    <section className="h-full w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6 sm:gap-0">
      <div className="flex flex-col items-start w-full sm:w-auto">
        <button className="text-lg py-2 px-3 rounded-md touch-manipulation">Back</button>
        <hr className="w-48 my-2" />
        <div className="flex gap-2 mt-4 flex-wrap sm:flex-nowrap overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <Button variant={"outline"} className="h-12 sm:h-9" size={"sm"}>Reduce Video</Button>
          <Button variant={"outline"} className="h-12 sm:h-9" size={"sm"}>RANDOM</Button>
          <Button variant={"outline"} className="h-12 sm:h-9" size={"sm"}>ANOTHER PRESET</Button>
          <Button variant={"outline"} className="h-12 sm:h-9" size={"sm"}>...</Button>
        </div>
      </div>
      <div className="flex h-full w-full sm:w-auto justify-end gap-2 flex-wrap sm:flex-nowrap">
        <Button aria-label="format-size" variant={"ghost"} size={"icon"} className="h-12 w-12 sm:h-9 sm:w-9" onClick={handleOpenBar}>
          <MdFormatSize/>
        </Button>
        <Button aria-label="stack" variant={"ghost"} size={"icon"} className="h-12 w-12 sm:h-9 sm:w-9">
          <CgStack />
        </Button>
        <Button aria-label="wrench" variant={"ghost"} size={"icon"} className="h-12 w-12 sm:h-9 sm:w-9">
          <FaWrench />
        </Button>
        <Button aria-label="gear" variant={"ghost"} size={"icon"} className="h-12 w-12 sm:h-9 sm:w-9">
          <GoGear />
        </Button>
      </div>
    </section>
  );
};

export default LayoutTop;
