"use client";

import { useForm } from "react-hook-form";
import { FormInputField } from "../../ui/form-components/form-field";
import { Button } from "../../ui/button";
import { LoginFormData } from "../../../types/auth/login.types";
import { login_validation_schema } from "../../../schemas/authentication/login.schema";
import { toast } from "sonner";
import Form from "../../ui/form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginForm() {
  const {
    formState: { errors, isSubmitting, isValid },
    register,
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: yupResolver(login_validation_schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInputField
        name="email"
        label="Email"
        register={register}
        placeholder="Enter your email"
        type="text"
        error={errors.email!}
      />
      <FormInputField
        name="password"
        label="Password"
        register={register}
        placeholder="Enter your password"
        type="password"
        error={errors.password!}
      />
      <Button
        text="Login"
        type="submit"
        variant={!isValid ? "secondary" : "default"}
        className="w-full"
        // disabled={isSubmitting}
      />
    </Form>
  );
}
