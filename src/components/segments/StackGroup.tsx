import { ChevronDownIcon } from "@/assets/icons";

const StackGroup = () => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <p className="text-lg font-medium">Cards</p>
        <div>
          <p className="flex gap-1 font-medium">
            <span>4</span>
            <ChevronDownIcon />
          </p>
        </div>
      </div>

      <div className="grid gap-1">
        <div className="bg-neutral-200 min-w-72 min-h-16 rounded-2xl py-2 px-4"></div>
        <div className="bg-neutral-200 min-w-72 min-h-16 rounded-2xl py-2 px-4"></div>
        <div className="bg-neutral-200 min-w-72 min-h-16 rounded-2xl py-2 px-4"></div>
        <div className="bg-neutral-200 min-w-72 min-h-16 rounded-2xl py-2 px-4"></div>
      </div>
    </div>
  );
};

export default StackGroup;
