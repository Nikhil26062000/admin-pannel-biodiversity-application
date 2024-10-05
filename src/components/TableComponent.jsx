

import { styled } from "@mui/system";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { containerVariants2 } from "../constants";
import { fetch_rolebase_from_json, fetch_user_list } from "../controllers/crud-operations-controller";
import { grey, blue } from "@mui/material/colors"; // Ensure you import grey and blue

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [roleBase,setRoleBase] = useState();

  // Fetch user data
  useEffect(() => {
    fetch_user_list(setData);
    fetch_rolebase_from_json(setRoleBase)
  }, []);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    [item.username, item.userid].some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate pagination
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredData.length) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="transition-all duration-500 ease-in-out transform w-full"
    >
      <h1 className="text-center text-3xl pt-5 font-bold">USERS LIST</h1>
      <section className="w-full flex justify-center">
        <input
          type="text"
          className="w-[500px] py-1 px-2 rounded-md bg-[#e5e7eb] outline-none mt-4 placeholder-black transition-all duration-300 focus:shadow-lg focus:bg-white"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <div className="mx-auto mt-8 w-full h-[65vh] overflow-y-scroll">
        <Root sx={{ maxWidth: "100%" }}>
          <table aria-label="custom pagination table">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">PID</th>
                <th className="border border-gray-300 px-4 py-2">UserID</th>
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
                <th className="border border-gray-300 px-4 py-2">Privileges</th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0
                ? filteredData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredData
              ).map((item, index) => (
                <motion.tr
                  key={index}
                  variants={containerVariants2}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="transition-all duration-300 transform hover:bg-gray-100"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {item.pid}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.userid}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.username}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.role === "1"
                      ? roleBase[0].role_name
                      : item.role === "2"
                      ? roleBase[1].role_name
                      : item.role === "3"
                      ? roleBase[2].role_name
                      : "----"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.privileges.join(" - ")}
                  </td>
                </motion.tr>
              ))}
              {emptyRows > 0 && (
                <tr style={{ height: 34 * emptyRows }}>
                  <td colSpan={5} aria-hidden />
                </tr>
              )}
            </tbody>
          </table>
         <div className="w-full flex justify-center">
         <CustomTablePagination
            rowsPerPageOptions={[10, 25, 50, { label: "All", value: -1 }]}
            colSpan={5}
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            slotProps={{
              select: {
                "aria-label": "rows per page",
              },
              actions: {
                showFirstButton: true,
                showLastButton: true,
                slots: {
                  firstPageIcon: FirstPageRoundedIcon,
                  lastPageIcon: LastPageRoundedIcon,
                  nextPageIcon: ChevronRightRoundedIcon,
                  backPageIcon: ChevronLeftRoundedIcon,
                },
              },
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
         </div>
        </Root>
      </div>
    </motion.div>
  );
};

const Root = styled("div")(
  ({ theme }) => `
  border-radius: 12px;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  overflow: clip;

  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    border: none;
    width: 100%;
    margin: -1px;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }
  `
);

const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 0;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select} {
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 2px 0 2px 4px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 6px; 
    background-color: transparent;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    transition: all 100ms ease;

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
      border-color: ${blue[400]};
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    display: flex;
    gap: 6px;
    border: transparent;
    text-align: center;
  }

  & .${classes.actions} > button {
    display: flex;
    align-items: center;
    padding: 0;
    border: transparent;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    transition: all 120ms ease;

    > svg {
      font-size: 22px;
    }

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  }
`
);

export default TableComponent;
