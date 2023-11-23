import { Tabs } from '@mantine/core';
import classes from './tabs.module.css'          
function DepTabs() { 
    return (
      <Tabs defaultValue="development">
        <Tabs.List grow>
          <Tabs.Tab  className={classes.tabs} color='black' value="development"> Development</Tabs.Tab>
          <Tabs.Tab className={classes.tabs}  color='black' value="cybersecurity">Cyber Security </Tabs.Tab>
            <Tabs.Tab className={classes.tabs} color='black' value="cpd">Colligate Programing Cntest </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  }

  export default DepTabs;