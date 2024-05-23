'use client';
import '@mantine/core/styles.css';

import { MantineProvider} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

export default function RootStyleRegistry({
  children,
}: {

  children: React.ReactNode;
}) {

  return (
    <MantineProvider defaultColorScheme="light" >
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
}

