"use client";

import { BlockedIcon, ListFilterIcon } from "@/assets/icons";
import { useState } from "react";

const FilterDisclouser = () => {
  const [expend, setExpend] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center relative justify-center">
        <button className="bg-neutral-50 p-2 size-14 flex items-center justify-center rounded-full shadow-xs cursor-pointer active:scale-[98%] z-[1] border-2 border-neutral-200">
          <ListFilterIcon className="size-6" />
        </button>
        <div className="bg-neutral-50 border-2 border-neutral-200 size-14 rounded-full flex items-center justify-center z-0 absolute top-0 left-full inset-0 -translate-x-4">
          <div className="opacity-60">
            <BlockedIcon />
          </div>
        </div>

        {/* Expend */}
        <div className="absolute bg-neutral-50 rounded-full p-6 opacity-0 min-w-14 min-h-14 border border-neutral-200 shadow-sm z-[2]"></div>
      </div>
    </div>
  );
};

export default FilterDisclouser;
