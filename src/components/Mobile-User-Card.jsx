// import React, { useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DoneIcon from '@mui/icons-material/Done';
// import EditIcon from '@mui/icons-material/Edit';

// const MobileUserCard = () => {
//   // Sample data for demonstration
//   const initialData = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', username: 'johndoe', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', username: 'janesmith', role: 'User' },
//     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', username: 'bobjohnson', role: 'Editor' },
//     // Add more data as needed
//   ];

//   const [data, setData] = useState(initialData);
//   const [editId, setEditId] = useState(null);
//   const [formData, setFormData] = useState({ id: '', name: '', email: '', username: '', role: '' });

//   // Handle Edit button click
//   const handleEdit = (item) => {
//     setEditId(item.id);
//     setFormData({ id: item.id, name: item.name, email: item.email, username: item.username, role: item.role });
//   };

//   // Handle Update button click
//   const handleUpdate = () => {
//     setData(prevData =>
//       prevData.map(item =>
//         item.id === editId ? { ...item, ...formData } : item
//       )
//     );
//     setEditId(null);
//     setFormData({ id: '', name: '', email: '', username: '', role: '' });
//   };

//   // Handle Delete button click
//   const handleDelete = (id) => {
//     setData(prevData => prevData.filter(item => item.id !== id));
//   };

//   return (
//     <>
//     <h1 className="text-lg font-bold text-center pt-2">User List</h1>
//     <div className=" mx-auto mt-4  px-4 md:flex justify-around flex-wrap">
//       {data.map((item) => (
//         <div key={item.id} className="bg-white my-2 p-4 rounded shadow-md border border-gray-300">
//           <div className="mb-2">
//             <strong>ID:</strong> {item.id}
//           </div>
//           <div className="mb-2">
//             <strong>Name:</strong> {editId === item.id ? (
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="border p-1 w-full rounded"
//               />
//             ) : (
//               item.name
//             )}
//           </div>
//           <div className="mb-2">
//             <strong>Email:</strong> {editId === item.id ? (
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="border p-1 w-full rounded"
//               />
//             ) : (
//               item.email
//             )}
//           </div>
//           <div className="mb-2">
//             <strong>Username:</strong> {editId === item.id ? (
//               <input
//                 type="text"
//                 value={formData.username}
//                 onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//                 className="border p-1 w-full rounded"
//               />
//             ) : (
//               item.username
//             )}
//           </div>
//           <div className="mb-2">
//             <strong>Role:</strong> {editId === item.id ? (
//               <input
//                 type="text"
//                 value={formData.role}
//                 onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//                 className="border p-1 w-full rounded"
//               />
//             ) : (
//               item.role
//             )}
//           </div>
//           <div className="mt-4 flex justify-end space-x-4">
//             {editId === item.id ? (
//               <button
//                 onClick={handleUpdate}
//                 className=""
//               >
//                 <DoneIcon className="!text-lg text-green-600 "/>
//               </button>
//             ) : (
//               <button
//                 onClick={() => handleEdit(item)}
//                 className=""
//               >
//                 <EditIcon  className="!text-lg text-yellow-600 "/>
//               </button>
//             )}
//             <button
//               onClick={() => handleDelete(item.id)}
//               className=""
//             >
//               <DeleteIcon  className="!text-lg text-red-600 "/>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default MobileUserCard;









import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

const MobileUserCard = () => {
  // Sample data for demonstration
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      email: "john1@example.com",
      username: "johndoe1",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane2@example.com",
      username: "janesmith2",
      role: "User",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob3@example.com",
      username: "bobjohnson3",
      role: "Editor",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice4@example.com",
      username: "alicebrown4",
      role: "Admin",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie5@example.com",
      username: "charliedavis5",
      role: "User",
    },
    {
      id: 6,
      name: "Eve Adams",
      email: "eve6@example.com",
      username: "eveadams6",
      role: "Editor",
    },
    {
      id: 7,
      name: "Frank Miller",
      email: "frank7@example.com",
      username: "frankmiller7",
      role: "Admin",
    },
    {
      id: 8,
      name: "Grace Wilson",
      email: "grace8@example.com",
      username: "gracewilson8",
      role: "User",
    },
    {
      id: 9,
      name: "Hank Harris",
      email: "hank9@example.com",
      username: "hankharris9",
      role: "Editor",
    },
    {
      id: 10,
      name: "Ivy Clark",
      email: "ivy10@example.com",
      username: "ivyclark10",
      role: "Admin",
    },
    {
      id: 11,
      name: "Jack Lee",
      email: "jack11@example.com",
      username: "jacklee11",
      role: "User",
    },
    {
      id: 12,
      name: "Kelly King",
      email: "kelly12@example.com",
      username: "kellyking12",
      role: "Editor",
    },
    {
      id: 13,
      name: "Liam Scott",
      email: "liam13@example.com",
      username: "liamscott13",
      role: "Admin",
    },
    {
      id: 14,
      name: "Mia Moore",
      email: "mia14@example.com",
      username: "miamoore14",
      role: "User",
    },
    {
      id: 15,
      name: "Nathan Ross",
      email: "nathan15@example.com",
      username: "nathanross15",
      role: "Editor",
    },
    {
      id: 16,
      name: "Olivia Perez",
      email: "olivia16@example.com",
      username: "oliviaperez16",
      role: "Admin",
    },
    {
      id: 17,
      name: "Paul Young",
      email: "paul17@example.com",
      username: "paulyoung17",
      role: "User",
    },
    {
      id: 18,
      name: "Quinn Baker",
      email: "quinn18@example.com",
      username: "quinnbaker18",
      role: "Editor",
    },
    {
      id: 19,
      name: "Ruby Wright",
      email: "ruby19@example.com",
      username: "rubywright19",
      role: "Admin",
    },
    {
      id: 20,
      name: "Sam Green",
      email: "sam20@example.com",
      username: "samgreen20",
      role: "User",
    },
    {
      id: 21,
      name: "Tina Turner",
      email: "tina21@example.com",
      username: "tinaturner21",
      role: "Editor",
    },
    {
      id: 22,
      name: "Uma White",
      email: "uma22@example.com",
      username: "umawhite22",
      role: "Admin",
    },
    {
      id: 23,
      name: "Victor Black",
      email: "victor23@example.com",
      username: "victorblack23",
      role: "User",
    },
    {
      id: 24,
      name: "Wendy Carter",
      email: "wendy24@example.com",
      username: "wendycarter24",
      role: "Editor",
    },
    {
      id: 25,
      name: "Xander Morris",
      email: "xander25@example.com",
      username: "xandermorris25",
      role: "Admin",
    },
    {
      id: 26,
      name: "Yara Evans",
      email: "yara26@example.com",
      username: "yaraevans26",
      role: "User",
    },
    {
      id: 27,
      name: "Zane Bell",
      email: "zane27@example.com",
      username: "zanebell27",
      role: "Editor",
    },
    {
      id: 28,
      name: "Amy Collins",
      email: "amy28@example.com",
      username: "amycollins28",
      role: "Admin",
    },
    {
      id: 29,
      name: "Brian Stewart",
      email: "brian29@example.com",
      username: "brianstewart29",
      role: "User",
    },
    {
      id: 30,
      name: "Chloe Cooper",
      email: "chloe30@example.com",
      username: "chloecooper30",
      role: "Editor",
    },
    {
      id: 31,
      name: "David Howard",
      email: "david31@example.com",
      username: "davidhoward31",
      role: "Admin",
    },
    {
      id: 32,
      name: "Ella Martinez",
      email: "ella32@example.com",
      username: "ellamartinez32",
      role: "User",
    },
    {
      id: 33,
      name: "Fiona Roberts",
      email: "fiona33@example.com",
      username: "fionaroberts33",
      role: "Editor",
    },
    {
      id: 34,
      name: "George Lewis",
      email: "george34@example.com",
      username: "georgelewis34",
      role: "Admin",
    },
    {
      id: 35,
      name: "Hannah Walker",
      email: "hannah35@example.com",
      username: "hannahwalker35",
      role: "User",
    },
    {
      id: 36,
      name: "Ian Hall",
      email: "ian36@example.com",
      username: "ianhall36",
      role: "Editor",
    },
    {
      id: 37,
      name: "Jasmine Scott",
      email: "jasmine37@example.com",
      username: "jasminescott37",
      role: "Admin",
    },
    {
      id: 38,
      name: "Kyle Turner",
      email: "kyle38@example.com",
      username: "kyleturner38",
      role: "User",
    },
    {
      id: 39,
      name: "Luna Parker",
      email: "luna39@example.com",
      username: "lunaparker39",
      role: "Editor",
    },
    {
      id: 40,
      name: "Mason Lewis",
      email: "mason40@example.com",
      username: "masonlewis40",
      role: "Admin",
    },
    {
      id: 41,
      name: "Nina Harris",
      email: "nina41@example.com",
      username: "ninaharris41",
      role: "User",
    },
    {
      id: 42,
      name: "Owen King",
      email: "owen42@example.com",
      username: "owenking42",
      role: "Editor",
    },
    {
      id: 43,
      name: "Paula Brooks",
      email: "paula43@example.com",
      username: "paulabrooks43",
      role: "Admin",
    },
    {
      id: 44,
      name: "Quincy Hayes",
      email: "quincy44@example.com",
      username: "quincyhayes44",
      role: "User",
    },
    {
      id: 45,
      name: "Rachel Cook",
      email: "rachel45@example.com",
      username: "rachelcook45",
      role: "Editor",
    },
    {
      id: 46,
      name: "Steven Price",
      email: "steven46@example.com",
      username: "stevenprice46",
      role: "Admin",
    },
    {
      id: 47,
      name: "Tina Shaw",
      email: "tina47@example.com",
      username: "tinashaw47",
      role: "User",
    },
    {
      id: 48,
      name: "Umar Jenkins",
      email: "umar48@example.com",
      username: "umarjenkins48",
      role: "Editor",
    },
    {
      id: 49,
      name: "Vera Boyd",
      email: "vera49@example.com",
      username: "veraboyd49",
      role: "Admin",
    },
    {
      id: 50,
      name: "Will Kelly",
      email: "will50@example.com",
      username: "willkelly50",
      role: "User",
    },
  ];

  const [data, setData] = useState(initialData);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    username: "",
    role: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Edit button click
  const handleEdit = (item) => {
    setEditId(item.id);
    setFormData({
      id: item.id,
      name: item.name,
      email: item.email,
      username: item.username,
      role: item.role,
    });
  };

  // Handle Update button click
  const handleUpdate = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      )
    );
    setEditId(null);
    setFormData({ id: "", name: "", email: "", username: "", role: "" });
  };

  // Handle Delete button click
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Filter data based on search term
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
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
          className="border p-2 shadow-lg rounded w-[96%] mx-[2%] "
        />
      </div>

      <div className="mx-auto mt-4 px-[2%] md:flex justify-around flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white my-2 p-4 rounded shadow-md border border-gray-300"
            >
              <div className="mb-2">
                <strong>ID:</strong> {item.id}
              </div>
              <div className="mb-2">
                <strong>Name:</strong>{" "}
                {editId === item.id ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border p-1 w-full rounded"
                  />
                ) : (
                  item.name
                )}
              </div>
              <div className="mb-2">
                <strong>Email:</strong>{" "}
                {editId === item.id ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border p-1 w-full rounded"
                  />
                ) : (
                  item.email
                )}
              </div>
              <div className="mb-2">
                <strong>Username:</strong>{" "}
                {editId === item.id ? (
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className="border p-1 w-full rounded"
                  />
                ) : (
                  item.username
                )}
              </div>
              <div className="mb-2">
                <strong>Role:</strong>{" "}
                {editId === item.id ? (
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="border p-1 w-full rounded"
                  />
                ) : (
                  item.role
                )}
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                {editId === item.id ? (
                  <button onClick={handleUpdate} className="">
                    <DoneIcon className="!text-lg text-green-600 " />
                  </button>
                ) : (
                  <button onClick={() => handleEdit(item)} className="">
                    <EditIcon className="!text-lg text-yellow-600 " />
                  </button>
                )}
                <button onClick={() => handleDelete(item.id)} className="">
                  <DeleteIcon className="!text-lg text-red-600 " />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No results found</p>
        )}
      </div>
    </>
  );
};

export default MobileUserCard;













