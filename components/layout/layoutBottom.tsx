import { IoCopyOutline } from "react-icons/io5";
import { Button } from "../ui/button";

const LayoutBottom = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-fit flex p-2  rounded-xl border-stone-300 border-2 items-center justify-center">
          <p>ffmpeg -i name.mp4 output.avi</p>
          <Button variant={"ghost"}>
            <IoCopyOutline />
          </Button>
        </div>
        <ul className="w-full flex px-48 my-8 gap-4 ">
          <li className="text-red-700 bg-red-100 py-1 px-3 rounded-xl">Full HD</li>
        </ul>
      </div>
    </section>
  );
};

export default LayoutBottom;
