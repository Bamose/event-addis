"use client";

import React from "react";
import {
  Container,
  Grid,
  Text,
  Group,
  Box,
  Anchor,
  Input,
  Button,
  Flex,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

function Footer() {
  return (
    <Box
      component="footer"
      py="md"
      style={{ backgroundColor: "#0a1f44", color: "white" }}
    >
      <Container>
        <Grid>
          <Group gap={32}>
            <Box  >
              <Grid.Col span={12}>
                <Group justify="center">
                  {["Facebook", "Instagram", "LinkedIn", "Pinterest"].map(
                    (link) => (
                      <Anchor key={link} href="#" style={{ color: "white" }}>
                        {link}
                      </Anchor>
                    )
                  )}
                </Group>
              </Grid.Col>
              <Grid.Col span={12} mt="md">
                <Flex justify="center" direction="column">
                  <Text ta="center" size="lg">
                    We keep you up to date
                  </Text>
                  <Group gap="sm" style={{ width: "100%", maxWidth: "400px" }}>
                    <Input
                      placeholder="Enter your email address"
                      styles={{
                        input: {
                          backgroundColor: "#0a1f44",
                          border: "1px solid white",
                          color: "white",
                        },
                      }}
                      style={{ flexGrow: 1 }}
                    />
                    <Button
                      variant="outline"
                      color="white"
                      style={{ borderColor: "white" }}
                      rightSection={<IconArrowRight />}
                    />
                  </Group>
                </Flex>
              </Grid.Col>
            </Box>
            <Box className={cn("pl-[5vw]")}>
              <Flex direction={"row"} gap={32}>
                <Grid.Col span={3} mt="md">
                  <Text size="lg">Quick links</Text>
                  {[
                    "How it works",
                    "Experience",
                    "Aligner",
                    "Prices",
                    "Locations",
                    "Address"
                  ].map((link) => (
                    <Text key={link}>
                      <Anchor href="#" style={{ color: "white" }}>
                        {link}
                      </Anchor>
                    </Text>
                  ))}
                </Grid.Col>
                <Grid.Col span={3} mt="md">
                  <Text size="lg">News</Text>
                  {[
                    "Blog",
                    "FAQ",
                    "Lift Media",
                    "Job Openings",
                    "Press Kit",
                  ].map((link) => (
                    <Text key={link}>
                      <Anchor href="#" style={{ color: "white" }}>
                        {link}
                      </Anchor>
                    </Text>
                  ))}
                </Grid.Col>
                <Grid.Col span={3} mt="md">
                  <Text size="lg">Treatment</Text>
                  {[
                    "Free Appointment",
                    "Invite Friends",
                    "Patient Information",
                  ].map((link) => (
                    <Text key={link}>
                      <Anchor href="#" style={{ color: "white" }}>
                        {link}
                      </Anchor>
                    </Text>
                  ))}
                </Grid.Col>
              </Flex>
            </Box>
          </Group>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
