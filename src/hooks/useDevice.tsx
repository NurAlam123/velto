import { useState, useEffect } from "react";

function useDevice() {
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isTouchDevice = navigator.maxTouchPoints > 0;

      if (
        /iphone|ipad|ipod|android|blackberry|windows phone|mobile/i.test(
          userAgent,
        )
      ) {
        setDeviceType("mobile");
      } else if (isTouchDevice) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDevice();
  }, []);

  return deviceType;
}

export default useDevice;
