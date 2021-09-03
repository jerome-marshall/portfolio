import React, { useState } from "react";
import {
  Container,
  ExperienceContent,
  StyledExperienceSection,
  TabPanelContainer,
  TabsContainer,
} from "./ExperienceElements";
import { Tab, TabPanel, Tabs } from "./Tabs";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    console.log(e);
    setActiveTab(value);
  };

  return (
    <StyledExperienceSection>
      <ExperienceContent>
        <h2 className="nav-heading">Where I've worked</h2>
        <Container>
          <TabsContainer>
            <Tabs selectedTab={activeTab} onChange={handleChange}>
              <Tab lable="Cognizant" value={1}></Tab>
              <Tab lable="Web Me Secure" value={2}></Tab>
              <Tab lable="Tab 3" value={3}></Tab>
            </Tabs>
          </TabsContainer>
          <TabPanelContainer>
            <TabPanel value={activeTab} selectedIndex={1}>
              <p className="title">Program Analyst @ Cognizant</p>
              <p className="expTime">Nov 2020 - Present</p>
              <ul>
                {/* {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)} */}
                <li>
                  Completed a hands-on three-month training, trained in various
                  technologies such as Java, Spring, Bootstrap, Docker, AWS.
                </li>
                <li>Supported in various roles as a support engineer</li>
                <li>
                  Contributed to managing the CI/CD pipeline of the project.
                </li>
                <li>
                  Contributed to managing thsdfasdfasdffffffffffffsdffffffffffe
                  CI/CD pipeline of the project.
                </li>
                <li>
                  Contributed to managing the CI/CD ped fawef awe df aweg earfg
                  ahr tgwaeoi ftha;og hapewufh ;asdkof n;alsmdnv ;oajgfh
                  p;ouipeline of the project.
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={activeTab} selectedIndex={2}>
              Tab 2
            </TabPanel>
            <TabPanel value={activeTab} selectedIndex={3}>
              Tab 3
            </TabPanel>
          </TabPanelContainer>
        </Container>
      </ExperienceContent>
    </StyledExperienceSection>
  );
};

export default Experience;
