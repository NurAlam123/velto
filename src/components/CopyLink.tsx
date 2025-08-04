"use client";

import Image from "./ui/image";

const CopyLink = ({ id }: { id: string }) => {
  const handleClick = () => {
    const href = window.location.host + `/#${id}`;
    window.navigator.clipboard.writeText(href);
  };

  return (
    <button
      className="cursor-pointer group active:scale-90 transition duration-100 ease-in-out"
      aria-label="copy link"
      onClick={handleClick}
    >
      <Image
        src="/icons/link.svg"
        alt="link"
        width={24}
        height={24}
        className="size-4 opacity-50 group-hover:opacity-100 transition duration-100 ease-in-out"
      />
    </button>
  );
};

export default CopyLink;
