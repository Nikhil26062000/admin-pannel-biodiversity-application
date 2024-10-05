import { set_Privileges, users_list } from "../services/Api-Services";


export const toggle_show_hide = (showAll, setShowAll, setCurrentPage) => {
  setShowAll(!showAll);
  if (!showAll) {
    setCurrentPage(0);
  }
};

export const fetch_user_list = async (setData) => {
  let api_response = await users_list();
  console.log(api_response.data);
  setData(api_response.data);
};

export const fetch_roles_from_json = async (setRoles) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/roles.json`);
  const data = await res.json();
  setRoles(data.roles);
};

export const fetch_rolebase_from_json = async (setRoleBase) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/RoleBase.json`);
  const data = await res.json();
  console.log(data.rolebase);
  console.log(data.rolebase[2].role_name);
  
  setRoleBase(data.rolebase);
};

export const fetch_privileges_from_json = async (setPrivileges) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/privileges.json`);
  const data = await res.json();
  setPrivileges(data.privileges);
};

export const handle_role_change = (id, roles, setRoles) => {
  const updatedRoles = roles?.map((role) => {
    if (role.role_id === id) {
      // Set only the selected role to `isChecked: true`
      return { ...role, isChecked: true };
    } else {
      // Set all other roles to `isChecked: false`
      return { ...role, isChecked: false };
    }
  });

  setRoles(updatedRoles);

  console.log("Roles after click radio ", updatedRoles);
};

export const handle_privileges_change = (id, privileges, setPrivileges) => {

  console.log(id);
  const updatedCheckboxes = privileges.map((checkbox) => {
    if (checkbox.id == id) {
      return { ...checkbox, isChecked: !checkbox.isChecked };
    }
    return checkbox;
  });

  console.log("updatedCheckboxes------>", updatedCheckboxes);
 
  setPrivileges(updatedCheckboxes);

};

export const handle_user_change = (
  e,
  roles,
  users,
  setFilterUser,
  setSelectedUser,
  obj,
  privileges
) => {
  roles.map((r) => {
    r.isChecked = false;
  });
  console.log("Role value", roles);

  console.log(e);

  const pid = e.target.value;

  const filteredUser = users.find((user) => user.pid == pid);
  console.log(parseInt(filteredUser.role));

  roles.map((role) => {
    if (role.role_id == parseInt(filteredUser.role) && role.role_id != 0) {
      role.isChecked = true;
    }
  });
  setFilterUser(filteredUser);
  setSelectedUser(pid);
  console.log("Updated Roles", roles);


  obj = {
    edit: filteredUser.privileges.includes("edit"),
    update: filteredUser.privileges.includes("update"),
    approve: filteredUser.privileges.includes("approve"),
    view: filteredUser.privileges.includes("view"),
    delete: filteredUser.privileges.includes("delete"),
  };

  console.log(obj);

  privileges.map((p) => (p.isChecked = obj[p.name]));

};

export const handle_roles_privilege_form_submit = async (
  e,
  roles,
  privileges,
  selectedUser
) => {
  e.preventDefault();
 
  let finalRole = {};
  roles.map((r) => {
    if (r.isChecked == true) {
      finalRole = r;
    }
  });

  console.log("Backend data prev :", privileges);
  const selectedPrivileges = privileges
    .filter((privilege) => privilege.isChecked)
    .map((privilege) => privilege.name);

  console.log(selectedPrivileges);

  const formData = {
    role: finalRole,

    privileges: selectedPrivileges,
    pid: selectedUser,
  };

  console.log("Form Data:", formData);

  const res = await set_Privileges(formData);
  console.log(res);
 
};
