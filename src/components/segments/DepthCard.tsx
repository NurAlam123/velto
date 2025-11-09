const DepthCard = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="scale-75">
        <div className="group relative h-96 w-64 perspective-distant transform-3d">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-neutral-200 opacity-100 transition-all duration-300 ease-out group-hover:top-2 group-hover:right-2 group-hover:-bottom-2 group-hover:-left-1 group-hover:translate-x-2 group-hover:rotate-x-36 group-hover:rotate-z-45 group-hover:opacity-100"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl border border-neutral-400 bg-white p-4 transition-all duration-300 ease-out group-hover:rotate-x-36 group-hover:rotate-z-45">
            <p className="text-xl font-medium text-neutral-500">Veltoo</p>

            <div className="absolute inset-0 top-1/2 right-0 h-full -translate-y-1/2 overflow-hidden">
              <div className="relative left-1/2 h-full perspective-distant transform-3d *:transition-all *:ease-in-out">
                <div className="absolute top-10 -right-26 size-80 -translate-y-0 -translate-z-20 scale-80 rotate-12 rounded-full bg-neutral-400 duration-335 group-hover:top-1 group-hover:-right-2 group-hover:scale-100"></div>

                <div className="absolute top-6 -right-14 size-76 origin-bottom -translate-y-0 -translate-z-20 scale-85 rotate-12 rounded-full bg-neutral-500 duration-330 group-hover:top-4 group-hover:right-4 group-hover:scale-100"></div>

                <div className="absolute top-10 -right-8 size-72 origin-bottom -translate-y-0 -translate-z-20 scale-90 rotate-6 rounded-full bg-neutral-600 duration-325 group-hover:top-8 group-hover:-right-0 group-hover:scale-100"></div>

                <div className="absolute top-14 -right-2 size-68 origin-bottom -translate-y-0 -translate-z-20 scale-95 rotate-6 rounded-full bg-neutral-700 duration-320 group-hover:top-12 group-hover:right-0 group-hover:scale-100"></div>

                <div className="absolute top-16 right-0 size-64 -translate-y-0 rounded-full bg-neutral-800 opacity-100 duration-300 group-hover:-right-2 group-hover:-translate-z-18"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepthCard;
