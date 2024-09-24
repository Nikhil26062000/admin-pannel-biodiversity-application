import React from "react";
import Sidebar from "../components/Sidebar";
import TableComponent from "../components/TableComponent";
import Header from "../components/Header";
import MobileUserCard from "../components/Mobile-User-Card";

const Users = () => {
  return (
    <>
      <main className="container_box max-lg:hidden">
        <section className="left_section">
          <Sidebar />
        </section>

        <section className="right_section  ">
          <TableComponent />
        </section>
      </main>

      {/* For mobile and tablet devices */}

      <section className="lg:hidden">
        <Header/>
        <MobileUserCard/>
      </section>
    </>
  );
};

export default Users;
