"use client";

import { useEffect, useRef } from "react";
const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

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
    const center = { lat: 34.9697, lng: 138.3867 };

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 9,
      disableDefaultUI: true,
    });

    // 여러 마커 좌표 배열
    const locations = [
      { lat: 34.9697, lng: 138.3867, title: "시즈오카역" }, // Shizuoka Station
      { lat: 35.0717, lng: 138.5412, title: "삿타토게" }, // Satta Pass
      { lat: 35.222, lng: 138.621, title: "후지산 세계유산센터" }, // Mt. Fuji World Heritage Center (Fujinomiya)
      { lat: 35.3395, lng: 138.5563, title: "타누키 호수" }, // Lake Tanuki
      { lat: 35.3075, lng: 138.5867, title: "시라이토 폭포" }, // Shiraito Falls
      { lat: 35.517, lng: 138.75, title: "가와구치코 나가사키 공원" }, // Kawaguchiko Nagasaki Park
      { lat: 35.5012, lng: 138.8014, title: "야라쿠라야마 센겐공원" }, // Arakurayama Sengen Park
      { lat: 35.4601, lng: 138.8329, title: "오시노 핫카이" }, // Oshino Hakkai
      { lat: 35.4252, lng: 138.8806, title: "나가이케 친수공원" }, // Nagaike Shinsui Park
      { lat: 35.1679, lng: 138.1809, title: "오쿠오이코조역 전망대" }, // Okuoikojo Station Observatory
      { lat: 35.1810587, lng: 138.1122714, title: "꿈의 현수교" }, // Kokonoe Yume Suspension Bridge (Oita)
      { lat: 34.995, lng: 138.5228, title: "미호노 마츠바라" }, // Miho no Matsubara
      { lat: 35.15, lng: 138.67, title: "후지산 꿈의 대교" }, // Fuji Dream Bridge (Shizuoka)
      { lat: 35.19, lng: 138.64, title: "오부치 사사바" }, // Obuchi Sasaba (Fuji City)
      { lat: 35.2023, lng: 139.022, title: "하코네 신사" }, // Hakone Shrine
      { lat: 34.9036, lng: 139.0942, title: "오무로 산" }, // Mount Omuro (Ito, Shizuoka)
      { lat: 34.9, lng: 139.1, title: "조가사키 해안" }, // Jogasaki Coast (Ito, Shizuoka)
      { lat: 35.4167, lng: 138.8717, title: "야마나카 호수" }, // Lake Yamanaka
      { lat: 35.415, lng: 138.87, title: "사이호" }, // Lake Sai (Saiko)
      { lat: 35.35, lng: 138.75, title: "나카노쿠라토게 전망대" }, // Nakanokuratoge Observatory (Fuji area, Shizuoka)
    ];

    // 반복문으로 마커 생성
    locations.forEach((loc) => {
      const marker = new window.google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.title,
        icon: {
          url: "/images/marker.svg",
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 40),
        },
      });

      marker.addListener("click", () => {
        alert(`마커 클릭: ${loc.title}`);
      });
    });
  };

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
