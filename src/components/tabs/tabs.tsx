import { Text, Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconMusic,
  IconPizza,
  IconClubs,
} from "@tabler/icons-react";

function DepTabs() {
  const iconStyle = { width: rem(24), height: rem(24) };
  return (
    <Tabs color="teal" defaultValue="gallery">
      <Tabs.List grow>
        <Tabs.Tab value="concert" leftSection={<IconMusic style={iconStyle} />}>
          <Text size="lg">Concert</Text>
        </Tabs.Tab>
        <Tabs.Tab value="food" leftSection={<IconPizza style={iconStyle} />}>
          <Text size="lg">Food & Drinks</Text>
        </Tabs.Tab>
        <Tabs.Tab
          value="nightlife"
          leftSection={<IconClubs style={iconStyle} />}
        >
          <Text size="lg">NightLife</Text>
        </Tabs.Tab>
      </Tabs.List>

      {/*       <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel> */}
    </Tabs>
  );
}

export default DepTabs;
