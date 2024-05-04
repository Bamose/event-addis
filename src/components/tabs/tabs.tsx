import { Button, Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconMusic, IconPizza, IconClubs } from '@tabler/icons-react';
         
function DepTabs() { 
  const iconStyle = { width: rem(24), height: rem(24) };
    return (
      <Tabs color="teal" defaultValue="gallery">
      <Tabs.List>
        
        <Tabs.Tab value="gallery" leftSection={<IconMusic style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconPizza style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconClubs style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
   
    );
  }

  export default DepTabs;