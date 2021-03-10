import { useContext, createContext, useState, Children } from "react";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";

const TabsContext = createContext();
const TabListContext = createContext();

const TabsNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <SignupForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </TabsContext.Provider>
  );
};

function Tabs({ children }) {
  return <div className="tabs">{children}</div>;
}

function TabList({ children }) {
  return (
    <div className="tabs__list">
      {Children.map(children, (child, index) => (
        <TabListContext.Provider value={index}>{child}</TabListContext.Provider>
      ))}
    </div>
  );
}

function Tab({ children, disabled }) {
  const index = useContext(TabListContext);
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;

  return (
    <div
      className={`tabs__tab ${
        disabled ? "disabled" : isActive ? "active" : ""
      }`}
      key={index}
      onClick={() => (disabled ? undefined : setActiveIndex(index))}
    >
      {children}
    </div>
  );
}

function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
  return (
    <div className="tabs__panels">
      {Children.toArray(children)[activeIndex]}
    </div>
  );
}

function TabPanel({ children }) {
  return children;
}

export const DataTabs = ({ data, position = "top", disabled = [] }) => {
  const tabs = (
    <TabList>
      {data.map((item, index) => (
        <Tab key={index} disabled={disabled.includes(index)}>
          {item.label}
        </Tab>
      ))}
    </TabList>
  );

  const panels = (
    <TabPanels>
      {data.map((item, index) => (
        <TabPanel key={index}>{item.content}</TabPanel>
      ))}
    </TabPanels>
  );

  return (
    <TabsNew>{position === "bottom" ? [panels, tabs] : [tabs, panels]}</TabsNew>
  );
};

export default TabsNew;
