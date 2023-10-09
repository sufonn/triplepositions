"use client"

import Header from "@/layouts/header";
import MobileMenu from "@/layouts/mobileMenu";
import Footer from "@/layouts/footer";

export default function Home() {
  return (
    <div className="wraper">
      <Header />
      <MobileMenu />
      <Footer />
    </div>
  )
}
