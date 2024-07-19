"use client";

import MapComponent from "@/components/location/Map";
import { useLocationStore } from "@/zustand/locationStore";
import React, { useEffect } from "react";

const LocationPage = () => {
  const { setLocation } = useLocationStore();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation(latitude, longitude);
    });
  }, [setLocation]);

  return (
    <div>
      <h1>내 근처 관광지</h1>
      <MapComponent />
    </div>
  );
};

export default LocationPage;
