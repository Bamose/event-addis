'use client'
import { Tabs,Box } from '@mantine/core';
import classes from './tabs.module.css'          
function DepTabs() { 
    return (
      <Tabs color="dark" defaultValue="development">
        <Tabs.List grow>
          <Tabs.Tab  className={classes.tabs} value="development"> All</Tabs.Tab>
          <Tabs.Tab className={classes.tabs}   value="cybersecurity">Music</Tabs.Tab>
            <Tabs.Tab className={classes.tabs}  value="cpd">Food</Tabs.Tab>
            <Tabs.Tab className={classes.tabs}  value="cpd">Concert</Tabs.Tab>
            <Tabs.Tab className={classes.tabs}  value="cpd">Gallery</Tabs.Tab>
            <Tabs.Tab className={classes.tabs}  value="cpd">Amphi theater</Tabs.Tab>
            <Tabs.Tab className={classes.tabs}  value="cpd">Comedy</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  }

  export default DepTabs;