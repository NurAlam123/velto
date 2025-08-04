import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: false,
});
