const GaborProject = () => {
  return (
    <div className="w-full">
      <p className="text-4xl mb-4 font-bold text-neutral-600 h-12 text-center">
        PROJECT
      </p>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full flex flex-col justify-center items-center">
            <p className="text-center text-2xl font-bold transition-all w-fit duration-150 hover:transition-all hover:duration-150 text-neutral-500 hover:text-neutral-800 peer cursor-pointer select-none hover:scale-y-110">
              PROJECT 1
            </p>
            <div className="hidden peer-hover:block">
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl -top-12 left-6 -rotate-12"></div>
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl -top-36 left-1/2 rotate-6"></div>
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl top-4 right-6 rotate-12"></div>
            </div>
          </div>
          <div className="relative w-full flex flex-col justify-center items-center">
            <p className="text-center text-2xl font-bold transition-all w-fit duration-150 hover:transition-all hover:duration-150 text-neutral-500 hover:text-neutral-800 peer cursor-pointer select-none hover:scale-y-110">
              PROJECT 2
            </p>
            <div className="hidden peer-hover:block">
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl top-6 left-6 -rotate-12"></div>
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl -top-32 left-1/3 rotate-6"></div>
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl top-6 right-6 rotate-12"></div>
            </div>
          </div>
          <div className="relative w-full flex flex-col justify-center items-center">
            <p className="text-center text-2xl font-bold transition-all w-fit duration-150 hover:transition-all hover:duration-150 text-neutral-500 hover:text-neutral-800 peer cursor-pointer select-none hover:scale-y-110">
              PROJECT 3
            </p>
            <div className="hidden peer-hover:block">
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl top-8 left-8 -rotate-12"></div>
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl -top-36 left-32 rotate-6"></div>
              <div className="absolute w-24 h-24 bg-neutral-400 rounded-xl -top-8 right-6 rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaborProject;
