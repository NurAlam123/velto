"use client";

import Image from "next/image";

const GaborProject = () => {
  return (
    <div className="w-full">
      <p className="text-6xl mb-4 font-bold text-neutral-600 h-12 text-center">
        PROJECT
      </p>
      <div className="mt-12">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full flex flex-col justify-start items-center">
            <p className="text-center contain-paint text-3xl/[1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-110 hover:scale-y-[120%] ease-elastic uppercase peer">
              Write
            </p>
            <div className="hidden peer-hover:block">
              <div className="absolute w-24 h-24 bg-white rounded-xl -top-8 left-2 -rotate-12 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/write-1.gif"
                  alt="writing"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-24 h-24 bg-white rounded-xl -top-28 left-1/2 rotate-6 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/write-2.gif"
                  alt="writing"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-24 h-24 bg-white rounded-xl top-2 right-2 rotate-12 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/write-3.jpg"
                  alt="writing"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-col justify-center items-center">
            <p className="text-center contain-paint text-3xl/[1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-110 hover:scale-y-[120%] ease-elastic uppercase peer">
              Process
            </p>
            <div className="hidden peer-hover:block">
              <div className="absolute w-24 h-24 bg-white rounded-xl top-6 left-6 -rotate-12 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/process-1.gif"
                  alt="first bun"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-24 h-24 bg-white rounded-xl -top-32 left-1/3 rotate-6 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/process-2.jpg"
                  alt="first bun"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-24 h-24 bg-white rounded-xl top-6 right-6 rotate-12 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/process-3.jpg"
                  alt="first bun"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-col justify-center items-center">
            <p className="text-center contain-paint text-3xl/[1em] font-bold transition-[scale] duration-700 w-fit text-neutral-800/50 hover:text-neutral-800 cursor-pointer select-none scale-y-110 hover:scale-y-[120%] ease-elastic uppercase peer">
              Burn
            </p>
            <div className="hidden peer-hover:block">
              <div className="absolute w-24 h-24 bg-white rounded-xl -top-10 left-4 -rotate-12 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/burn-1.jpg"
                  alt="first bun"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-24 h-24 bg-white rounded-xl -top-36 left-32 rotate-6 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/burn-2.jpg"
                  alt="first bun"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-24 h-24 bg-white rounded-xl -top-12 right-6 rotate-12 overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/gabor/burn-3.jpg"
                  alt="first bun"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaborProject;
