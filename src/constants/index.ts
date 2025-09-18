import BlurCarousel from "@/components/segments/BlurCarousel";
import Countdown from "@/components/segments/countdown";
import GaborProject from "@/components/segments/GaborProject";
import ProgressiveInputStack from "@/components/segments/ProgressiveInputStack";
import TabToggler from "@/components/segments/TabToggler";
import Wallet from "@/components/segments/wallet";

export type InteractionsType = {
  id: number;
  title: string;
  badges: Array<string>;
  date: string;
  versions?: number;
  component: React.ComponentType;
};
export const interactions: Array<InteractionsType> = [
  {
    id: 6,
    title: "Tab Toggler",
    badges: ["click"],
    date: "Sep 11, 2025",
    component: TabToggler,
  },
  {
    id: 5,
    title: "Progressive Input Stack",
    badges: ["click"],
    date: "Aug 22, 2025",
    component: ProgressiveInputStack,
  },
  {
    id: 4,
    title: "Blur Carousel",
    badges: ["drag", "scroll"],
    date: "Aug 14, 2025",
    component: BlurCarousel,
  },
  {
    id: 3,
    title: "Spencer Gabor Project Section",
    badges: ["hover"],
    date: "Aug 08, 2025",
    component: GaborProject,
  },
  {
    id: 2,
    title: "Countdown Timer",
    badges: ["click"],
    date: "Aug 04, 2025",
    versions: 2,
    component: Countdown,
  },
  {
    id: 1,
    title: "Wallet",
    badges: ["hover"],
    date: "Aug 03, 2025",
    versions: 2,
    component: Wallet,
  },
];
