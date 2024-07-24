"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { auth } from "../../firebase"
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       router.push('/'); // Redirect to login if not authenticated
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [router]);

return (
    <div className="w-full relative bg-light-grey h-[984px] overflow-hidden flex flex-col items-start justify-start text-left text-base text-purple font-body-m">
      <Navbar />
      <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-6 pb-6 gap-[24px] text-13xl text-dark-grey">
        <LeftSidebar />
        <MainContent />
      </div>
    </div>
  );
};
 

export default Dashboard
