// @ts-nocheck
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const catchAsync = (fn: () => unknown): (() => Promise<void>) => {
  return async (): Promise<void> => {
    try {
      const res = await fn();

      if (res.data.message) {
        toast.success(res.data.message);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage = axiosError.response?.data.message;
      if (errorMessage === "Validation Error") {
        toast.error(
          axiosError.response?.data.errors.map((e) => e.message).join("\n"),
        );
      } else {
        if (errorMessage.length) toast.error(errorMessage);

        if (
          errorMessage === "invalid token" ||
          errorMessage === "jwt expired"
        ) {
          localStorage.removeItem("token");
          window.location.href = "/auth";
        }
        if (errorMessage === "jwt malformed") {
          window.location.reload();
        }
      }
    }
  };
};

export default catchAsync;
