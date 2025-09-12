import { useEffect, useState } from "react";

type Browser = "chrome" | "firefox" | "other";

export function useBrowser(): Browser {
  const [browser, setBrowser] = useState<Browser>("other");

  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("firefox")) {
      setBrowser("firefox");
    } else if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
      setBrowser("chrome");
    } else {
      setBrowser("other");
    }
  }, []);

  return browser;
}
