"use client";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CgGym } from "react-icons/cg";
import { FaFire } from "react-icons/fa";
import { MdStackedLineChart } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";

export default function BottomNav() {
  const location = usePathname();
  const router = useRouter();
  let value = 0;
  if (location === "/") value = 0;
  if (location === "/customise") value = 1;
  if (location === "/settings") value = 2;
  if (location === "/stats") value = 3;
  return (
    <BottomNavigation
      showLabels
      value={value}
      className="p-4 z-100 "
      sx={{
        bgcolor: "darkgray",
        "& .Mui-selected": {
          "& .MuiBottomNavigationAction-label": {
            fontSize: (theme) => theme.typography.caption,
            fontWeight: "bold",
            lineHeight: "20px",
          },
          "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
            color: (theme) => theme.palette.background.paper,
          },
        },
      }}
      onChange={(event, newValue) => {
        if (newValue === 0) router.push("/");
        if (newValue === 1) router.push("/customise");
        if (newValue === 2) router.push("/settings");
        if (newValue === 3) router.push("/stats");
      }}
    >
      <BottomNavigationAction icon={<FaFire size={25} />} />
      <BottomNavigationAction icon={<CgGym size={25} />} />
      <BottomNavigationAction icon={<TbPlugConnected size={25} />} />
      <BottomNavigationAction icon={<MdStackedLineChart size={25} />} />
    </BottomNavigation>
  );
}
