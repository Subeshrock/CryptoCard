import {
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import Chart from "./Chart";

const selected = {
  borderBottomColor: "#4B40EE",
  borderBottomWidth: "3px",
  borderBottomStyle: "solid",
  color: "#1A243A",
};
const MainTab = () => {
  return (
    <Tabs defaultIndex={1} variant="unstyled">
      <TabList borderBottomColor="#EFF1F3" borderBottomWidth="1px">
        <Tab _selected={selected} color="#6F7177">
          Summary
        </Tab>
        <Tab _selected={selected} color="#6F7177">
          Chart
        </Tab>
        <Tab _selected={selected} color="#6F7177">
          Statistics
        </Tab>
        <Tab _selected={selected} color="#6F7177">
          Analysis
        </Tab>
        <Tab _selected={selected} color="#6F7177">
          Settings
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text fontSize="18px">No UI is given</Text>
        </TabPanel>
        <TabPanel>
          <Chart />
        </TabPanel>
        <TabPanel>
          <Text fontSize="18px">No UI is given</Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize="18px">No UI is given</Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize="18px">No UI is given</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainTab;
