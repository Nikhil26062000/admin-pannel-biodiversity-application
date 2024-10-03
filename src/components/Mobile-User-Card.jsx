import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { containerVariants2 } from "../constants";
import { fetch_user_list } from "../controllers/crud-operations-controller";

// Shimmer Component
const Shimmer = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full md:w-1/3 animate-pulse">
      {/* Shimmer for PID */}
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>

      {/* Shimmer for Userid */}
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>

      {/* Shimmer for Username */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* Shimmer for Role */}
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

      {/* Shimmer for Privileges */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>

      {/* Shimmer for Button */}
      <div className="h-8 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

const MobileUserCard = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch_user_list((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const filteredData = data?.filter((item) =>
    [item.username, item.userid].some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <h1 className="text-lg font-bold text-center pt-2">User List</h1>

      {/* Search Input */}
      <div className="text-center mt-4 sticky top-14">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, username, or role..."
          className="border p-2 shadow-lg rounded w-[96%] mx-[1%]"
        />
      </div>

      <div className="mt-8">
        {/* Card layout for mobile */}
        <div className="flex flex-wrap justify-center gap-4">
          {loading
            ? // Show shimmer while loading
              Array(3)
                .fill(0)
                .map((_, index) => <Shimmer key={index} />)
            : // Show actual data once loaded
              filteredData?.map((item, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants2}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white shadow-md rounded-md p-4 w-[96%] md:w-1/3"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-left"> {item.pid}</div>
                    <div className="font-bold text-right"> {item.username}</div>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-xs">Userid : </span> {item.userid}
                    </div>
                    <div>
                      <span className="text-xs">Role : </span>
                      {item.role === "1"
                        ? "f4f"
                        : item.role === "2"
                        ? "admin"
                        : item.role === "3"
                        ? "user"
                        : "----"}
                    </div>
                    <div>
                      <span className="text-xs">Privileges : </span>{" "}
                      {item.privileges.join(" - ")}
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </>
  );
};

export default MobileUserCard;
