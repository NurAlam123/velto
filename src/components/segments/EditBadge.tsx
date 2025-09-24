const EditBadge = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-green-200/80 px-3 py-2 rounded-full">
        <p className="text-green-500 font-semibold flex items-center gap-2 select-none">
          <CheckIcon className="size-4 fill-green-500" />
          <span>Completed</span>
        </p>
      </div>

      <div>
        <button className="bg-neutral-200 rounded-full p-2 cursor-pointer hover:bg-neutral-300 transition-all active:scale-[98%] outline-none ring-0">
          <PencilIcon className="fill-black size-4" />
        </button>
      </div>
    </div>
  );
};

// Icons
const PencilIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z" />
      <path d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z" />
    </svg>
  );
};

const CheckIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M429.811 577.1l-80.485-86.309c-21.425-22.976-57.42-24.233-80.396-2.807s-24.233 57.42-2.807 80.396l81.839 87.762-.158.152 43.493 45.038c19.643 20.341 52.056 20.907 72.397 1.264l35.686-34.462 8.195-7.642-.133-.143 251.802-243.163c22.607-21.832 23.236-57.857 1.405-80.464s-57.857-23.236-80.464-1.405L429.812 577.1zM512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z" />
    </svg>
  );
};

export default EditBadge;
