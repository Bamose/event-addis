'use client';

import React from 'react';
import { Container, Grid, Text, Group, Box, Anchor, Input, Button, Flex } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

function Footer() {
  return (
    <Box component="footer" py="md" style={{ backgroundColor: '#0a1f44', color: 'white' }}>
      <Container>
        <Grid>
          <Group>
          <Box>
          <Grid.Col span={12}>
            <Group justify="center">
              {['Facebook', 'Instagram', 'LinkedIn', 'Pinterest'].map((link) => (
                <Anchor key={link} href="#" style={{ color: 'white' }}>
                  {link}
                </Anchor>
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col span={12} mt="md">
            <Flex justify="center" direction="column">
              <Text ta="center" size="lg" >
                Wir halten dich auf dem laufenden
              </Text>
              <Group gap="sm" style={{ width: '100%', maxWidth: '400px' }}>
                <Input
                  placeholder="Deine E-Mail Adresse"
                  styles={{
                    input: {
                      backgroundColor: '#0a1f44',
                      border: '1px solid white',
                      color: 'white',
                    },
                  }}
                  style={{ flexGrow: 1 }}
                />
                <Button
                  variant="outline"
                  color="white"
                  style={{ borderColor: 'white' }}
                  rightSection={<IconArrowRight />}
                />
              </Group>
            </Flex>

          </Grid.Col>
          </Box>
          <Box>
            <Flex direction={'row'} gap={32}>
          <Grid.Col span={3} mt="md">
            <Text size="lg">
              Quick links
            </Text>
            {['So gehts', 'Erfahrung', 'Aligner', 'Preise', 'Standorte'].map((link) => (
              <Text key={link}>
                <Anchor href="#" style={{ color: 'white' }}>
                  {link}
                </Anchor>
              </Text>
            ))}
          </Grid.Col>
          <Grid.Col span={3} mt="md">
            <Text size="lg">
              Newz
            </Text>
            {['Blog', 'FAQ', 'Lift Media', 'Offene Stellen', 'Presse kit'].map((link) => (
              <Text key={link}>
                <Anchor href="#" style={{ color: 'white' }}>
                  {link}
                </Anchor>
              </Text>
            ))}
          </Grid.Col>
          <Grid.Col span={3} mt="md">
            <Text size="lg" >
              Behandlung
            </Text>
            {['Gratis Termin', 'Freunde einladen', 'Patienteninformationen'].map((link) => (
              <Text key={link}>
                <Anchor href="#" style={{ color: 'white' }}>
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
