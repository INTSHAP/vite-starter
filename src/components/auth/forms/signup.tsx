"use client";

import { useForm } from "react-hook-form";
import { FormInputField } from "../../ui/form-components/form-field";
import { Button } from "../../ui/button";
import { signup_validation_schema } from "../../../schemas/authentication/signup.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { SignupFormData } from "../../../types/auth/signup.types";
import Form from "../../ui/form";

export default function SignupForm() {
  const {
    formState: { errors, isSubmitting, isValid },
    register,
    handleSubmit,
  } = useForm<SignupFormData>({
    resolver: yupResolver(signup_validation_schema),
  });

  // const onSubmit = async (data: SignupFormData) => {
  //   try {
  //     await signIn("credentials", data);
  //     toast.success(`logging ${data.email} ...`);
  //   } catch (error) {
  //     if (error instanceof AuthError) {
  //       switch (error.type) {
  //         case "CredentialsSignin":
  //           // return "Invalid credentials.";
  //           toast.success("Invalid credentials.");
  //         default:
  //           // return "Something went wrong.";
  //           toast.success("Something went wrong.");
  //       }
  //     }
  //     throw error;
  //   }
  // };
  return (
    <Form>
      <FormInputField
        name="firstname"
        label="First name"
        register={register}
        placeholder="Enter your first name"
        type="text"
        error={errors.firstname!}
      />
      <FormInputField
        name="lastname"
        label="Last name"
        register={register}
        placeholder="Enter your last name"
        type="text"
        error={errors.lastname!}
      />
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
      <FormInputField
        name="confirmPassword"
        label="Confirm password"
        register={register}
        placeholder="Enter your password"
        type="password"
        error={errors.confirmPassword!}
      />
      <Button
        text="Sign up"
        type="submit"
        variant={!isValid ? "secondary" : "default"}
        className="w-full"
        disabled={isSubmitting || !isValid}
      />
    </Form>
  );
}
