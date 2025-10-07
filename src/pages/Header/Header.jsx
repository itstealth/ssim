/* eslint-disable react/prop-types */

import BannerNav from "@/pages/Header/BannerNav";
import TopBar from "@/pages/Header/TopBar";

export default function Header({ className }) {
  return (
    <header className={`font-sans ${className}`}>
      <TopBar />
      <BannerNav />
    </header>
  );
}
