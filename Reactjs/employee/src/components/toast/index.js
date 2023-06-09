import { toast } from "react-toastify";

export const errorToast = ({ message, autoClose = 1000 }) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose,
  });
};

export const successToast = ({ message, autoClose = 1000 }) => {
  toast.success(message, {
    position: toast.POSITION.TOP_LEFT,
    autoClose,
  });
};
export const modifyToast = ({ message, autoClose = 1000 }) => {
  toast.info(message, {
    position: toast.POSITION.TOP_LEFT,
    autoClose,
  });
};
export const removeToast = ({ message, autoClose = 1000 }) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose,
    theme: "colored",
  });
};
