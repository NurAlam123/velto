import {
  AddSquareIcon,
  HomeIcon,
  PlaySquareIcon,
  SearchIcon,
  UserCircleIcon,
} from "@/assets/icons";

const TabBar = () => {
  return (
    <div className="relative">
      <div className="relative w-80 h-12 bg-white shadow-sm border border-neutral-100 rounded-full flex items-center justify-between px-6">
        {Tabs.map((tab, i) => (
          <button key={i}>
            <tab.icon />
          </button>
        ))}
      </div>
      <div
        className="absolute w-full h-full bg-neutral-100 rounded-full flex items-center justify-between px-6 top-0 overflow-hidden"
        style={{
          clipPath: "inset(4px 78% 4px 4px round 20px)",
        }}
      >
        {Tabs.map((tab, i) => (
          <button key={i}>
            <tab.icon />
          </button>
        ))}
      </div>
    </div>
  );
};

const Tabs = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Search",
    icon: SearchIcon,
  },
  {
    name: "Add",
    icon: AddSquareIcon,
  },
  {
    name: "Reel",
    icon: PlaySquareIcon,
  },
  {
    name: "User",
    icon: UserCircleIcon,
  },
];

export default TabBar;
