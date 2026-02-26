import { useSelectStore } from "@/app/store";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const LayoutMid = ({ children }: { children: React.ReactNode }) => {
  const [promptResult, setPromptResult] = useState<string>("");
  const [objectSorted, setObjectSorted] = useState();
  const select = useSelectStore((state) => state.select);

  console.log(select)



  useEffect(() => {
    if (select) {
      const result = Object.values(select).sort((a, b) => a.order - b.order);
      setObjectSorted(result);
      const joinIt = result.map((item) => {
        const getFlag = item.flag ?? "";
        const getValue = item.value ?? "";
        const getOrder = item.order;
        let stripFlag = " -";
        if (item.flag == "" || getOrder === 0) {
          stripFlag = "";
        }

        return stripFlag + getFlag + " " + getValue;
      });
      setPromptResult(joinIt);
    }
  }, [select]);

  return (
    <section className="h-full w-full flex justify-center items-center flex-col">
      <div>
        <ul className="flex gap-4 justify-center items-center font-semibold flex-wrap">
          <li>FFMPEG</li>

          {objectSorted &&
            objectSorted?.map((data, id) => {
              return (
                <div key={id} className="flex gap-4 items-center">
                  <span>+</span>
                  <Button variant={"outline"}>{data.label}</Button>
                </div>
              );
            })}
          <span>+</span>
          <Button variant={"outline"}>?</Button>
        </ul>
      </div>
      <div>
        <div className="p-4 mt-2">
          {/* ffmpeg{" "} */}
          {promptResult ? (
            <div className="w-fit flex p-2  rounded-xl border-stone-300 border-2 items-center justify-center">
              <p>{promptResult}</p>
              <Button variant={"ghost"}>
                <IoCopyOutline />
              </Button>
            </div>
          ) : (
            <span className="text-stone-400">
              Please input command to make more extend command
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default LayoutMid;
