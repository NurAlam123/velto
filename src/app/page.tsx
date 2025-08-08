import Countdown from "@/components/segments/countdown";
import Box from "@/components/ui/box";
import Image from "@/components/ui/image";
import Wallet from "@/components/segments/wallet";
import GaborProject from "@/components/segments/GaborProject";

export default function Home() {
  return (
    <div className="h-screen max-w-md mx-auto px-2 mt-8 md:mt-32">
      <div className="my-8 flex justify-between items-end px-2 z-[999] bg-white">
        <h1 className="text-2xl md:text-4xl font-bold">Velto</h1>
        <div>
          <a href="https://github.com/NurAlam123/velto" target="_blank">
            <Image
              src="/logo/github.svg"
              alt="github"
              width={24}
              height={24}
              className="size-6"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 pb-8 md:pb-32">
        <Box title="Wallet" badges={["hover"]} date="Aug 03, 2025" versions={2}>
          <Wallet />
        </Box>
        <Box
          title="Countdown Timer"
          badges={["click"]}
          date="Aug 04, 2025"
          versions={2}
        >
          <Countdown />
        </Box>
        <Box
          title="Spencer Gabor Project Section"
          badges={["hover"]}
          date="Aug 08, 2025"
        >
          <GaborProject />
        </Box>
      </div>
    </div>
  );
}
