"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { IconAlertCircle } from "@tabler/icons-react";
import { NewUser, newUserSchema } from "../_actions/authSchema";
import { useSignUpMutation } from "@/lib/services/event.api";
import { cn } from "@/utils/cn";

export default function SignUpForm() {
  const [creating, startCreate] = useTransition();
  const [signUpData] = useSignUpMutation();
  const [errorMessages, setErrorMessages] = useState("");

  const defaultValues = {
    userName: "",
    email: "",
    password: "",
  };

  const {
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
      console.log(values);
      await signUpData(values);
     /*  redirect(`/events`); */

    });
  };
  return (
    <form action={handleCreate}>
      <Stack bg={"white"} className="h-[70vh]">
        <TextInput
          label="User Name"
          placeholder="Enter your user name"
          autoComplete="name"
          required
          {...register("userName")}
          error={errors.userName ? errors.userName.message?.toString() : ""}
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
        <Button bg={'orange'} type="submit" disabled={creating} loading={creating} fullWidth>
          Sign Up
        </Button>
        <Box className={cn("border py-1 cursor-pointer   border-orange-500 flex flex-row w-full justify-center rounded")}>
        <Button  unstyled c={'orange'} component={Link} href="/auth/signin" fullWidth variant="outline">
          Log in
        </Button>
        </Box>
      </Stack>
    </form>
  );
}
