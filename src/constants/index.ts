import BlurCarousel from "@/components/segments/BlurCarousel";
import Countdown from "@/components/segments/countdown";
import EditBadge from "@/components/segments/EditBadge";
import FilterDisclosure from "@/components/segments/FilterDisclosure";
import GaborProject from "@/components/segments/GaborProject";
import HoldToDisconnect from "@/components/segments/HoldToDisconnect";
import ProgressiveInputStack from "@/components/segments/ProgressiveInputStack";
import SetStatus from "@/components/segments/SetStatus";
import ShowQR from "@/components/segments/ShowQR";
import FloatingTabBar from "@/components/segments/FloatingTabBar";
import TabToggler from "@/components/segments/TabToggler";
import Wallet from "@/components/segments/wallet";
import SlideToLike from "@/components/segments/SlideToLike";

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
    id: 13,
    title: "Slide to Like",
    badges: ["drag"],
    date: "Oct 09, 2025",
    component: SlideToLike,
  },
  {
    id: 12,
    title: "Floating Tab Bar",
    badges: ["click"],
    date: "Oct 07, 2025",
    component: FloatingTabBar,
  },
  {
    id: 11,
    title: "Hold to Disconnect",
    badges: ["click", "hold"],
    date: "Oct 06, 2025",
    component: HoldToDisconnect,
  },
  {
    id: 10,
    title: "Filter Disclosure",
    badges: ["click"],
    date: "Sep 26, 2025",
    component: FilterDisclosure,
  },
  {
    id: 9,
    title: "Edit Badge",
    badges: ["click"],
    date: "Sep 24, 2025",
    component: EditBadge,
  },
  {
    id: 8,
    title: "Show QR",
    badges: ["click"],
    date: "Sep 22, 2025",
    component: ShowQR,
  },
  {
    id: 7,
    title: "Set Status",
    badges: ["click", "hover"],
    date: "Sep 19, 2025",
    component: SetStatus,
  },
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
