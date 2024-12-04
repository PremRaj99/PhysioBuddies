import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </Provider>
);
