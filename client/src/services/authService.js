import axios from "../utils/Axios";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../Redux/User/userSlice"; // Import the Redux login action
import toast from "@/utils/toast";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      if (data.data.accessToken) {
        // Save token in localStorage
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);

        // Dispatch login action to Redux
        dispatch(loginAction(data.data.user));
        toast.success(data.message);
      } else {
        toast.error(data.data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error(error.response.data.message);
    }
  };

  const signup = async (fullName, email, username, phone, password) => {
    try {
      const { data } = await axios.post("/api/v1/auth/signup", {
        fullName,
        email,
        username,
        phone,
        password,
      });

      if (data.data.redirect) {
        navigate(data.data.redirect);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Signup failed", error);
      toast.error(error.response.data.message);
    }
  };

  const verifyEmail = async (email, token) => {
    try {
      const { data } = await axios.post("/api/v1/auth/verify", {
        email,
        token,
      });

      if (data.data.accessToken) {
        // Save token in localStorage
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);

        // Dispatch login action to Redux
        dispatch(loginAction(data.data.user));
        toast.success(data.message);
      } else {
        toast.error(data.data.message);
      }
    } catch (error) {
      console.error("Email verification failed", error);
      toast.error(error.response.data.message);
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.post("/api/v1/auth/logout");

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed", error);
      toast.error(error.response.data.message);
    }
  };

  return { login, logout, signup };
};

export default useAuth;
