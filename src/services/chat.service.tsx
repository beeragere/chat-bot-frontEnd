import axios from "axios";
export const getTesting = async (): Promise<string> => {
  return axios.get("/api");
};
