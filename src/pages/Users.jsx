




import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TableComponent from "../components/TableComponent";
import Header from "../components/Header";
import MobileUserCard from "../components/Mobile-User-Card";

const Users = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 1024); // 1024px is the threshold for mobile/tablet devices
  };

  useEffect(() => {
    checkScreenSize(); // Check initial screen size
    window.addEventListener("resize", checkScreenSize); // Add listener to check on window resize
    return () => window.removeEventListener("resize", checkScreenSize); // Clean up listener
  }, []);

  return (
    <>
      {!isMobile && (
        <main className="flex overflow-y-hidden max-lg:hidden">
          <section className="w-[20%]">
            <Sidebar />
          </section>

          <section className="w-[80%] flex justify-center ">
            <TableComponent />
          </section>
        </main>
      )}

      {/* For mobile and tablet devices */}
      {isMobile && (
        <section>
          <Header />
          <MobileUserCard />
        </section>
      )}
    </>
  );
};

export default Users;

