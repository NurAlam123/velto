const DepthCard = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="scale-75">
        <div className="group relative h-96 w-64 perspective-distant transform-3d [--card-duration:200ms]">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-neutral-200 opacity-100 transition-all duration-(--card-duration) ease-out group-hover:top-2 group-hover:right-2 group-hover:-bottom-2 group-hover:-left-1 group-hover:translate-x-2 group-hover:rotate-x-36 group-hover:rotate-z-45 group-hover:opacity-100"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl border border-neutral-400 bg-white p-4 transition-all duration-(--card-duration) ease-out group-hover:rotate-x-36 group-hover:rotate-z-45 overflow-hidden">
            <p className="text-xl font-medium text-neutral-500">Veltoo</p>

            <div className="absolute size-64 perspective-distant transform-3d top-1/2 left-1/2 -translate-y-1/2 -translate-x-4 rounded-full *:rounded-full *:transition-all *:duration-200 *:ease-out *:absolute *:inset-0 *:border-2 *:border-neutral-700 overflow-hidden bg-[repeating-linear-gradient(45deg,var(--color-neutral-400),var(--color-neutral-300)_2px,var(--color-white)_2px,var(--color-white)_4px)]">
              <div className="group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="group-hover:translate-x-4 group-hover:translate-y-6"></div>
              <div className="group-hover:translate-x-8 group-hover:translate-y-12"></div>
              <div className="group-hover:translate-x-12 group-hover:translate-y-18 bg-neutral-800 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepthCard;
