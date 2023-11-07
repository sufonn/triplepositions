"use client"

import Header from "@/layouts/header";
// import MobileMenu from "@/layouts/mobileMenu";
import Footer from "@/layouts/footer";
import Preloader from "@/layouts/preloader";

export default function Home() {
  return (
    <div className="wraper">
      <Preloader />
      <Header />
      {/* <MobileMenu /> */}
      <Footer />
    </div>
  )
}
