import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { containerVariants2 } from "../constants";
import { fetch_user_list } from "../controllers/crud-operations-controller";

const TableComponent = () => {
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(true); // State to toggle between full and paginated view
  const itemsPerPage = 10;
  const [role, setRole] = useState();

  // Calculate pagination
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = data?.slice(offset, offset + itemsPerPage);

  useEffect(() => {
    fetch_user_list(setData);
  }, []);



  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleToggle = () => {
    setShowAll(!showAll);
    setCurrentPage(0);
  };

  const filteredData = showAll
    ? data?.filter((item) =>
        [item.username,item.userid].some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : currentPageData?.filter((item) =>
        [item.username,item.userid].some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="transition-all duration-500 ease-in-out transform w-full  "
    >
      <h1 className="text-center text-3xl pt-5 font-bold">USERS LIST</h1>
      <section className="w-full flex justify-center gap-5">
        <input
          type="text"
          className="w-[500px] py-1 px-2 rounded-md bg-[#e5e7eb] outline-none mt-4 placeholder-black transition-all duration-300 focus:shadow-lg focus:bg-white"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleToggle}
          className="mt-4 py-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          {showAll ? "Show Paginated" : "Show All"}
        </button>
      </section>

      <div className="mx-auto mt-8 w-full h-[65vh] overflow-y-scroll">
        <table className="table-auto border-collapse w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">pid</th>
              <th className="border border-gray-300 px-4 py-2">Userid</th>
              <th className="border border-gray-300 px-4 py-2">Username</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Privileges</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item) => (
              <motion.tr
                key={item.id}
                variants={containerVariants2}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="transition-all duration-300 transform hover:bg-gray-100"
              >
                <td className="border border-gray-300 px-4 py-2">{item.pid}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.userid}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.username}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.role === "1"
                    ? "f4f"
                    : item.role === "2"
                    ? "admin"
                    : item.role === "3"
                    ? "user"
                    : "----"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.privileges.join(" - ")}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {!showAll && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center space-x-4 my-4"}
          activeClassName={"bg-blue-500 text-white px-2 py-1 rounded-full"}
          previousLinkClassName={"px-2 py-1 bg-gray-200 rounded-full"}
          nextLinkClassName={"px-2 py-1 bg-gray-200 rounded-full"}
          disabledClassName={"text-gray-400"}
        />
      )}
    </motion.div>
  );
};

export default TableComponent;
