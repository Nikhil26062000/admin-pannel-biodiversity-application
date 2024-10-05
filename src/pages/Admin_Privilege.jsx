import { useState, useEffect } from "react";
import { adminPrivelegs, set_Privileges, users_list } from "../services/Api-Services";
import { toast } from "react-hot-toast";
import {
  fetch_privileges_from_json,
  fetch_roles_from_json,
  handle_privileges_change,
  handle_role_change,
  handle_roles_privilege_form_submit,
  handle_user_change,
} from "../controllers/crud-operations-controller";

const RoleSelection = () => {
  const [roles, setRoles] = useState([]);  // will store the roles fetching from public folder
  const [privileges, setPrivileges] = useState([]);  // will store the privileges fetching from public folder
  const [users, setUsers] = useState([]);  // will store the users fetching from api

  const [selectedUser, setSelectedUser] = useState(""); // Use user ID here
  const [loading, setLoading] = useState(true);  // used to show shimmer

  const [filterUser, setFilterUser] = useState([]);

  let obj = {};  

  const fetchRoles = async () => {
    await fetch_roles_from_json(setRoles);  // calling controllers to fetch roles
  };

  const fetchPrivileges = async () => {
    fetch_privileges_from_json(setPrivileges);  // calling controllers to fetch privileges
  };

  const fetchUsers = async () => {
    const res = await users_list();  // calling api from api service to fetch users
    setUsers(res.data);
  };
  useEffect(() => {
    Promise.all([fetchRoles(), fetchPrivileges(), fetchUsers()]).then(() =>
      setLoading(false)
    );
  }, []);

  const handleRoleChange = (id) => {
    handle_role_change(id, roles, setRoles);  // contoller handle the role change when user select roles to store in db
  };

  const handlePrivilegeChange = (id) => {
    handle_privileges_change(id, privileges, setPrivileges);   // contoller handle the privilege change when user select privileges to store in db
  };

  const handleUserChange = (e) => {
    //controller which used to handle user change from dropdown
    handle_user_change(
      e,
      roles,
      users,
      setFilterUser,
      setSelectedUser,
      obj,
      privileges
    );
  };

  const handleSubmit = async (e) => {
    handle_roles_privilege_form_submit(e, roles, privileges, selectedUser);  // controller for submit the final form 
    fetchUsers();  // fetching the latest data after uploading the form 
  };

  // Shimmer Effect to show when data is not present
  const Shimmer = ({
    height = "h-6",
    width = "w-full",
    marginBottom = "mb-4",
  }) => (
    <div className={`animate-pulse ${marginBottom}`}>
      <div className={`${height} ${width} bg-gray-300 rounded`}></div>
    </div>
  );

  return (
    <div className="w-[100%]   absolute lg:w-[80%]  ">
      <h2 className="text-center text-lg font-bold pt-10 lg:text-2xl lg:pt-20">
        Select Roles and Privileges
      </h2>
      <div className="w-full px-[5px] lg:px-[20px]">
        <div className="w-[100%] mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
          {loading ? (
            <div>
              <Shimmer width="w-40" height="h-4" marginBottom="mb-4" />
              <Shimmer width="w-full" height="h-6" marginBottom="mb-4" />
              <Shimmer width="w-32" height="h-4" marginBottom="mb-4" />
              <Shimmer width="w-full" height="h-6" marginBottom="mb-4" />
              <Shimmer width="w-40" height="h-4" marginBottom="mb-4" />
              <Shimmer width="w-full" height="h-6" marginBottom="mb-4" />
              <Shimmer height="h-12" width="w-full" marginBottom="mb-0" />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Users Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select User
                </label>
                <div>
                  <select
                    required
                    value={selectedUser} // Bind to selectedUser's ID
                    onChange={handleUserChange}
                    className="form-select text-xs block w-full mt-1 bg-white border border-gray-300 rounded-xs shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value="" disabled>
                      Select a user
                    </option>
                    {users.map((user) => (
                      <option key={user.pid} value={user.pid}>
                        {user.username}
                        {" - "}
                        {user.userid}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Roles Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Role
                </label>
                <div className="flex space-x-6">
                  {roles.map((role) => (
                    <label
                      key={role.role_id}
                      className="flex items-center space-x-2 text-xs"
                    >
                      <input
                        required
                        type="radio"
                        value={role.role_name}
                        name="role"
                        checked={role.isChecked}
                        onChange={() => handleRoleChange(role.role_id)}
                        className="text-blue-600 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="capitalize text-xs">
                        {role.role_name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Privileges Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Privileges
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {privileges.map((privilege) => (
                    <label
                      key={privilege.id}
                      className="flex items-center space-x-2 "
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${privilege.id}`}
                        checked={privilege.isChecked}
                        name={privilege.name}
                        onChange={() => handlePrivilegeChange(privilege.id)}
                        className="text-blue-600 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="capitalize text-xs">
                        {privilege.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className=" bg-[#125B57] text-white py-3 px-6 rounded-lg focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
