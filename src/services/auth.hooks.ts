import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Successfully logged in ");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Successfully registered");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
