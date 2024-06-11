"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, PasswordInput, Stack, TextInput,Box } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { IconAlertCircle } from "@tabler/icons-react";
import { Login, loginSchema } from "../_actions/authSchema";
import { useSigninMutation } from "@/lib/services/event.api";
import { cn } from "@/utils/cn";

export default function SignInForm() {
  const [creating, startCreate] = useTransition();
  const [signInData] = useSigninMutation();
  const [errorMessages, setErrorMessages] = useState("");

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    trigger,
    register,
    getValues,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const handleCreate = async () => {
    const valid = await trigger();
    if (!valid) return;

    startCreate(async () => {
      const values = getValues();
      console.log(values);
      await signInData(values);
      redirect(`/events`);

    });
  };
  return (
    <form action={handleCreate}>
      <Stack bg={"white"} className="h-[70vh]">
        <TextInput
          label="Email"
          placeholder="Enter your email"
          autoComplete="name"
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
            title="Login Error"
            icon={<IconAlertCircle />}
          >
            {errorMessages}
          </Alert>
        )}
        <Button bg={'orange'} type="submit" disabled={creating} loading={creating} fullWidth>
          Login
        </Button>
        <Box className={cn("border py-1 border-orange-500 flex flex-row w-full justify-center rounded")}>
        <Button  unstyled c={'orange'} component={Link} href="/auth/signup" fullWidth variant="outline">
          Sign Up
        </Button>
        </Box>
      </Stack>
    </form>
  );
}
