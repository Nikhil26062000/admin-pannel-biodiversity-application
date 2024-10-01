import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetch_user_list } from "../controllers/crud-operations-controller";
import { containerVariants2 } from "../constants";

const MobileUserCard = () => {
  const [data, setData] = useState();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch_user_list(setData);
  }, []);

  const filteredData = data?.filter((item) =>
    [item.username, item.userid].some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <h1 className="text-lg font-bold text-center pt-2 ">User List</h1>

      {/* Search Input */}
      <div className="text-center mt-4 sticky top-14 ">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, username, or role..."
          className="border p-2 shadow-lg rounded w-[96%] mx-[1%] "
        />
      </div>

      <div className=" mt-8 ">
        {/* Card layout for mobile */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredData?.map((item) => (
            <motion.div
              key={item.id}
              variants={containerVariants2}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white shadow-md rounded-md p-4 w-full md:w-1/3"
            >
              <div className="mb-2">
                <span className="font-bold">PID:</span> {item.pid}
              </div>
              <div className="mb-2">
                <span className="font-bold">Userid:</span> {item.userid}
              </div>
              <div className="mb-2">
                <span className="font-bold">Username:</span> {item.username}
              </div>
              <div className="mb-2">
                <span className="font-bold">Role:</span>{" "}
                {item.role === "1"
                  ? "f4f"
                  : item.role === "2"
                  ? "admin"
                  : item.role === "3"
                  ? "user"
                  : "----"}
              </div>
              <div className="mb-2">
                <span className="font-bold">Privileges:</span>{" "}
                {item.privileges.join(" - ")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileUserCard;
