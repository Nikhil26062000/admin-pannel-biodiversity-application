export const logout = (setToken) =>{
    setToken(null);
    localStorage.removeItem("token")
    localStorage.removeItem("userid")
    localStorage.removeItem("username")
    localStorage.removeItem("role")
}