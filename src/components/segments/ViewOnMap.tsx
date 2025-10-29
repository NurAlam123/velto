"use client";

import { NavigationIcon } from "@/assets/icons";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const ViewOnMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  const coordinates: [number, number] = [-16.5004, -151.7415];
  const initialZoom = 12;
  const flyToZoom = 14;

  useEffect(() => {
    import("leaflet").then((L) => {
      if (!mapContainer.current || mapRef.current) return;

      const customPinIcon = L.divIcon({
        className: "custom-svg-marker",
        html: MapPinSVG,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -40],
      });

      try {
        const map = L.map(mapContainer.current, {
          center: coordinates,
          zoom: initialZoom,
          zoomControl: true,
        });
        mapRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker(coordinates, { icon: customPinIcon })
          .addTo(map)
          .bindPopup(
            `<b>Bora Bora</b><br><i>French Polynesia</i><br><i style="color:#737373">${coordinates[0].toFixed(4)}, ${coordinates[1].toFixed(4)}</i>`,
          )
          .openPopup();

        map.flyTo(coordinates, flyToZoom, { duration: 2 });
      } catch (e) {
        console.error("Leaflet map initialization failed:", e);
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-48 h-14 relative">
      <div className="bg-neutral-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 flex items-center justify-center rounded-4xl overflow-hidden [clip-path:inset(7.25rem_3rem_round_2rem)] transition-[clip-path] duration-[400ms] ease-out hover:[clip-path:inset(0_round_2rem)] hover:transition-[clip-path] hover:duration-200 hover:ease-in-out group">
        <p className="flex items-center justify-center gap-1 font-semibold text-sm select-none pointer-events-none translate-0 transition-all duration-200 ease-out delay-200 group-hover:opacity-0 group-hover:translate-y-5 group-hover:blur-sm group-hover:transition-all group-hover:ease-out group-hover:duration-200">
          <NavigationIcon className="size-8" />
          <span>View on Map</span>
        </p>

        <div
          ref={mapContainer}
          className="absolute inset-0 top-0 left-0 opacity-0 pointer-events-none transition-opacity duration-[50ms] delay-[50ms] group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-200 group-hover:ease-in-out group-hover:delay-[50ms] origin-center group-hover:pointer-events-auto"
        ></div>
      </div>
    </div>
  );
};

const MapPinSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3856 23.789L11.3831 23.7871L11.3769 23.7822L11.355 23.765C11.3362 23.7501 11.3091 23.7287 11.2742 23.7008C11.2046 23.6451 11.1039 23.5637 10.9767 23.4587C10.7224 23.2488 10.3615 22.944 9.92939 22.5599C9.06662 21.793 7.91329 20.7041 6.75671 19.419C5.60303 18.1371 4.42693 16.639 3.53467 15.0528C2.64762 13.4758 2 11.7393 2 10C2 7.34784 3.05357 4.8043 4.92893 2.92893C6.8043 1.05357 9.34784 0 12 0C14.6522 0 17.1957 1.05357 19.0711 2.92893C20.9464 4.8043 22 7.34784 22 10C22 11.7393 21.3524 13.4758 20.4653 15.0528C19.5731 16.639 18.397 18.1371 17.2433 19.419C16.0867 20.7041 14.9334 21.793 14.0706 22.5599C13.6385 22.944 13.2776 23.2488 13.0233 23.4587C12.8961 23.5637 12.7954 23.6451 12.7258 23.7008C12.6909 23.7287 12.6638 23.7501 12.645 23.765L12.6231 23.7822L12.6169 23.7871L12.615 23.7885C12.615 23.7885 12.6139 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789ZM12 23L11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="#fe4d4d"></path> </g></svg>`;

export default ViewOnMap;
