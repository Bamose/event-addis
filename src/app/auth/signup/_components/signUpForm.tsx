"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { IconAlertCircle } from "@tabler/icons-react";
import { NewUser, newUserSchema } from "../_actions/authSchema";


export default function SignUpForm() {
   const [creating, startCreate] = useTransition();

  const [errorMessages, setErrorMessages] = useState("");


  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    reset,
    trigger,
    register,
    getValues,
    formState: { errors },
  } = useForm<NewUser>({
    resolver: zodResolver(newUserSchema),
    defaultValues,
  });


 
  const handleCreate = async () => {
    const valid = await trigger();
    if (!valid) return;

    startCreate(async () => {
      const values = getValues();
      /* const result = await signUp(values);
      if (result?.data) {
        redirect(`/auth/verify/${result?.data?.verification?.id}`);
      }

      if ("errors" in result) {
        if (result.errors === AUTH_ERRORS.SIGNUP_USER_EXISTS) {
          setErrorMessages(
            `Something went wrong. Please try again or contact support.`
          );
        } else {
          setErrorMessages("Unknown error occurred");
        }
      } */
    });
  }; 
  return (
    <form /* action={handleCreate} */>
      <Stack bg={'white'} className="h-[100vh]">
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          autoComplete="name"
          required
          {...register("name")}
          error={errors.name ? errors.name.message?.toString() : ""}
        />
       
          <TextInput
            key="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
            error={errors.email ? errors.email.message?.toString() : ""}
          />
    
     
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="new-password"
          required
          {...register("password")}
          error={errors.password ? errors.password.message?.toString() : ""}
        />
        {errorMessages && (
          <Alert
            className="my-4"
            color="red"
            title="Signup Error"
            icon={<IconAlertCircle />}
          >
            {errorMessages}
          </Alert>
        )}
        <Button type="submit" disabled={creating} loading={creating} fullWidth>
          Next
        </Button>
        <Button component={Link} href="/auth/login" fullWidth variant="outline">
          Back to Login
        </Button>
      </Stack>
    </form>
  );
}
