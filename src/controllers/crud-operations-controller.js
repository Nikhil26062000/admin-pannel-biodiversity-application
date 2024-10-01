import { users_list } from "../services/Api-Services";

export const delete_user = (id, setData) => {
    console.log('deleting from controller');
  setData((prevData) => prevData.filter((item) => item.id !== id));
};

export const update_user = (setData, editId, setEditId, setFormData,formData) => {
  console.log('Üpdating from controller');
  setData((prevData) =>
    prevData.map((item) =>
      item.id === editId ? { ...item, ...formData } : item,
      console.log("Form data before updating :",formData)
    )
  );
  setEditId(null);
  setFormData({ name: "", email: "", username: "", role: "" });
};

export const edit_user = (item,setEditId,setFormData) =>{
    console.log("editing user from controller");
    setEditId(item.pid);
    setFormData({
      pid: item.pid,
      userid: item.userid,
      username: item.username,
      role: item.role,
    });
}

export const toggle_show_hide = (showAll, setShowAll, setCurrentPage) =>{
    setShowAll(!showAll);
    if (!showAll) {
      setCurrentPage(0); // Reset pagination when switching to "Show All"
    }
}

export const fetch_user_list = async(setData) => {
  let api_response = await users_list();
  console.log(api_response.data);
  setData(api_response.data)
}
