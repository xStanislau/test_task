import axios from "../mockAxios";

const login = async data => {
  const response = await axios.post("/", data);
  return response;
};

export default login;
