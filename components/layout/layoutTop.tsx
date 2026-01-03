import { CgStack } from "react-icons/cg";
import { FaWrench } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { Button } from "../ui/button";
import { MdFormatSize } from "react-icons/md";

const LayoutTop = ({ }: { children: React.ReactNode }) => {
  return (
    <section className="h-full w-full flex items-center justify-between mb-8">
      <div className="flex flex-col items-start">
        <button>Back</button>
        <hr className="w-48" />
        <div className="flex gap-2 mt-4">
          <Button variant={"outline"}>Reduce Video</Button>
          <Button variant={"outline"}>RANDOM</Button>
          <Button variant={"outline"}>ANOTHER PRESET</Button>
          <Button variant={"outline"}>...</Button>
        </div>
      </div>
      <div className="flex h-full w-full justify-end ">
        <Button variant={"ghost"} size={"icon"}>
          <MdFormatSize/>
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <CgStack />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <FaWrench />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <GoGear />
        </Button>
        
      </div>
    </section>
  );
};

export default LayoutTop;