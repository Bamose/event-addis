"use client";
import {
  Box,
  Stack,
  Title,
  Text,
  Flex,
  Button,
  Group,
  TextInput,
} from "@mantine/core";
import { DateInput, DatePickerInput, DateTimePicker, TimeInput } from "@mantine/dates";
import {
  IconArrowRight,
  IconDropletDollar,
  IconHeartHandshake,
  IconReceiptDollar,
} from "@tabler/icons-react";
import React, { useState, useTransition } from "react";
import { NewTicket, newTicketSchema } from "../_actions/ticket.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from 'next/navigation'
import { useCreateTicketMutation } from "@/lib/services/event.api";
import { modals } from "@mantine/modals";

export function Detail() {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [creating, startCreate] = useTransition();
  const [ticketData] = useCreateTicketMutation();
  const router = useRouter()
  const searchParams = useSearchParams()
  const eventId = searchParams.get('id')
  console.log(eventId)
  const togglePanel = (buttonType: string) => {
    setPanelOpen(true);
    setValue('tickettype', buttonType);
    if(eventId){
    setValue('eventid', eventId)
    }
    setSelectedButton(buttonType);
  };
  
  const defaultValues = {
    eventId: "",
    salesEndDate: new Date(),
    salesStartDate: new Date(),
    salesEndTime: "",
    salesStartTime: "",
    fullName: "",
    quantity: "",
    price: "",
    ticketType: "",
  };

  const {
    trigger,
    register,
    getValues,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<NewTicket>({
    resolver: zodResolver(newTicketSchema),
    defaultValues,
  });

  const handleCreate = async () => {
    const valid = await trigger();
    const values = getValues();
    console.log(values);
    if (!valid) return;

    startCreate(async () => {
      const values = getValues();
       const result = await ticketData(values); 
      /* console.log("event id", result); */

       if ("data" in result) {
        modals.openConfirmModal({
          title: "Create a ticket",
          centered: true,
          children: (
            <Text size="sm">
              You created an event successfully
            </Text>
          ),
          labels: { confirm: "go to Home page", cancel: "cancel" },
          confirmProps: { color: "orange" },
          onCancel: () => console.log("Cancel"),
          onConfirm: () => {
             router.push(`/events`);
          },
        });
      } 
    });
  };
  return (
    <>
      <Stack className="w-2/3">
        <Title size={"h2"}> Create Ticket</Title>
        <Text c={"gray"}>
          Choose a ticket type or build a section with multiple ticket types.
        </Text>
        <Button unstyled onClick={() => togglePanel("paid")}>
          <Group
            justify={"space-between"}
            className={`border border-gray rounded-2xl p-3 ${
              selectedButton === "paid" ? "bg-blue-200/20" : ""
            }`}
          >
            <Group>
              <Box className="p-5 bg-blue-400/30 rounded-xl">
                <IconReceiptDollar size={32} />
              </Box>

              <Flex direction={"column"} align={"flex-start"}>
                <Title>Paid</Title>
                <Text>Create ticket that people have to pay</Text>
              </Flex>
            </Group>
            <IconArrowRight />
          </Group>
        </Button>
        <Button unstyled onClick={() => togglePanel("free")}>
          <Group
            justify={"space-between"}
            className={`border border-gray rounded-2xl p-3 ${
              selectedButton === "free" ? "bg-blue-200/20" : ""
            }`}
          >
            <Group>
              <Box className="p-5 bg-blue-400/30 rounded-xl">
                <IconDropletDollar size={32} />
              </Box>

              <Flex direction={"column"} align={"flex-start"}>
                <Title>Free</Title>
                <Text>Create ticket that people have to pay</Text>
              </Flex>
            </Group>
            <IconArrowRight />
          </Group>
        </Button>
        <Button unstyled onClick={() => togglePanel("donation")}>
          <Group
            justify={"space-between"}
            className={`border border-gray rounded-2xl p-3 ${
              selectedButton === "donation" ? "bg-blue-200/20" : ""
            }`}
          >
            <Group justify={"flex-start"}>
              <Box className="p-5 bg-blue-400/30 rounded-xl">
                <IconHeartHandshake size={32} />
              </Box>

              <Flex direction={"column"} align={"flex-start"}>
                <Title>Donation</Title>
                <Text>Create ticket that people have to pay</Text>
              </Flex>
            </Group>
            <IconArrowRight />
          </Group>
        </Button>
        <Stack
          className={`fixed top-[7vh] right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
            isPanelOpen ? "translate-x-0" : "translate-x-full"
          } p-5`}
        >
          <Title size={"h2"}>Add tickets</Title>
          <Group>
            <Button
              variant={selectedButton === "paid" ? "filled" : "outline"}
              onClick={() => togglePanel("paid")}
            >
              Paid
            </Button>
            <Button
              variant={selectedButton === "free" ? "filled" : "outline"}
              onClick={() => togglePanel("free")}
            >
              Free
            </Button>
            <Button
              variant={selectedButton === "donation" ? "filled" : "outline"}
              onClick={() => togglePanel("donation")}
            >
              Donation
            </Button>
          </Group>
          <form>
            <Stack>
              <TextInput
                placeholder="Full Name"
                required
                {...register("fullname")}
                error={
                  errors.fullname ? errors.fullname.message?.toString() : ""
                }
              />
              <TextInput
                placeholder="Availability quantity"
                {...register("quantity")}
                error={
                  errors.quantity ? errors.quantity.message?.toString() : ""
                }
              />{" "}
              <TextInput
                placeholder="Price"
                disabled={
                  selectedButton !== "paid" && selectedButton !== "donation"
                }
                {...register("price")}
                error={
                  errors.price ? errors.price.message?.toString() : ""
                }
              />
              <Group grow>
              <Controller
                name="salesstartdate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DateInput
                    label="Sales Start Date"
                    placeholder="Date input"
                    value={value ? new Date(value) : new Date()}
                    onChange={(date) => onChange(date)}
                  />
                )}
              />
              <Controller
                name="salesstarttime"
                control={control}
                render={({ field: { onChange } }) => (
                  <TimeInput
                    label="Sales Start Time"
                    placeholder="Specify the time of the event."
                    onChange={(time) => onChange(time)}
                  />
                )}
              />
              </Group>
              <Group grow>
              <Controller
                name="salesenddate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DateInput
                    label="Sales End Date"
                    placeholder="Date input"
                    value={value ? new Date(value) : new Date()}
                    onChange={(date) => onChange(date)}
                  />
                )}
              />
              <Controller
                name="salesendtime"
                control={control}
                render={({ field: { onChange } }) => (
                  <TimeInput
                    label="Sales End Time"
                    placeholder="Specify the time of the event."
                    onChange={(time) => onChange(time)}
                  />
                )}
              />

              </Group>
              <Group justify="flex-start">
                <Button
                  variant="filled"
                  color={"gray"}
                  onClick={() => setPanelOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="filled" color={"orange"} onClick={handleCreate} loading={creating}>
                  Save
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
}
