import React, { useTransition } from "react";
import { Modal, Button, Text, TextInput, Stack, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Register,
  registerSchema,
} from "@/app/(main)/create-event/_actions/event.schema";
import { useCreateRegisterMutation } from "@/lib/services/event.api";

interface RegisterModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose, id }: RegisterModalProps) => {
  const [creating, startCreate] = useTransition();
  const [registerData] = useCreateRegisterMutation();
  const defaultValues = {
    fullname: "",
    eventid: "",
  };

  const {
    trigger,
    register,
    getValues,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const handleCreate = async () => {
    const valid = await trigger();
    const values = getValues();
    console.log(values);
    if (!valid) return;

    startCreate(async () => {
      const values = getValues();
      const result = await registerData(values);
      console.log(result);
      console.log(values);
    });
  };
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Register for Event"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
    >
      <Stack>
        <TextInput
          label="Full Name"
          placeholder="enter your name"
          {...register("fullname")}
          error={errors.fullname ? errors.fullname.message?.toString() : ""}
        />

        <Flex justify={"flex-end"} align={"flex-end"}>
          <Button
            bg={"orange"}
            onClick={() => {
              setValue("eventid", id);
              handleCreate();
            }}
            loading={creating}
          >
            Register for Event
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
