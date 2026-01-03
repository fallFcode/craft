import { Button } from "../ui/button";

const LayoutMid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full w-full flex justify-center items-center flex-col">
      <div>
        <ul className="flex gap-4 justify-center items-center font-semibold ">
          <li>FFMPEG</li>
          <span>+</span>
          <Button variant={"outline"} >?</Button>
        </ul>
      </div>
      <div>
        <div className="p-4 mt-2">
          ffmpeg{" "}
          <span className="text-stone-400">
            Please input command to make more extend command
          </span>
        </div>
      </div>
    </section>
  );
};

export default LayoutMid;
