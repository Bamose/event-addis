import React from "react";
import { Modal, Button, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Register for Event"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered>
      <Text>Please fill in your details to reserve a spot.</Text>
    </Modal>
  );
};
