import "./App.css";
import Dropdown, {
  DropdownButton,
  DropdownMenu,
} from "./components/common/Dropdown";
import MainLayout from "./components/common/MainLayout";
import Panel, {
  PanelBody,
  PanelCap,
  PanelFooter,
  PanelHeader,
} from "./components/common/Panel";
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/common/Tabs";
import QuestionEditor from "./components/edit/QuestionEditor";

function App() {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>tab1</Tab>
          <Tab index={1}>tab2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <Panel>
              <QuestionEditor />
            </Panel>
          </TabPanel>
          <TabPanel index={1}>panel2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
