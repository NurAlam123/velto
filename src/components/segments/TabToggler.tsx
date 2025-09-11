const TabToggler = () => {
  return (
    <div className="w-full px-4 flex">
      <div className="flex w-full px-4 py-2 rounded-full bg-neutral-200 relative">
        <div className="font-medium text-sm text-neutral-500 relative min-w-[107px] z-[2]">
          <p>Handoff</p>
          {/* <div className="absolute top-0 left-0 bg-black w-16 h-full rounded-full"></div> */}
        </div>
        <div className="font-medium text-sm text-neutral-500 re min-w-[107px] z-[2]">
          Reading List
        </div>
        <div className="font-medium text-sm text-neutral-500 min-w-[107px] w-full text-center z-[2]">
          iCloud Keychain
        </div>
        <div className="absolute min-w-[107px] top-1/2 -translate-y-1/2 left-0.5 h-[calc(100%-4px)] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default TabToggler;
