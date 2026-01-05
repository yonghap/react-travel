"use client";

import { useEffect, useRef } from "react";
const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // 이미 로드되어 있으면 중복 실행 방지
    if (window.google) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, []);

  const initMap = () => {
    const center = { lat: 35.0116, lng: 135.7681 }; // 교토

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 14,
      disableDefaultUI: true,
    });

    const marker = new window.google.maps.Marker({
      position: center,
      map,
      title: "노을 본 자리",
      icon: {
        url: "/images/marker.svg",
        scaledSize: new window.google.maps.Size(40, 40),
        anchor: new window.google.maps.Point(20, 40),
      },
    });

    marker.addListener("click", () => {
      console.log("마커 클릭");
      map.panTo(center);
      map.setZoom(16);
    });
  };

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
