import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b0860b39-d3e1-43f6-8720-f86ce38c42fa",
  },
});
export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => {
        return res.data;
      });
  },
  getAuth: () => {
    return instance.get("auth/me").then((res) => {
      return res.data;
    });
  },
  deleteFollow: (id) => {
    return instance.delete(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
  postFollow: (id) => {
    return instance.post(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((res) => {
      return res.data;
    });
  },
  getStatus: (id) => {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus: (status) => {
    return instance.put(`profile/status/`, { status });
  },
  authLogin: (email, password, rememberMe = false) => {
    return instance.post("auth/login/", { email, password, rememberMe });
  },
  outLogin: () => {
    return instance.delete("auth/login");
  },
  updatePhoto: (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  upDateProfile: (data) => {
    return instance.put("/profile", data);
  },
};
