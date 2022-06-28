import { Divider } from 'semantic-ui-react';
import { MainContainer } from './components/common/Universal';
import ProjectPane from './components/ProjectPane';
import WorkExperiencePane from './components/WorkExperiencePane';
import BiographyPane from './components/BiographyPane';
import SkillPane from './components/SkillPane';
import NavigationBar from './components/NavigationBar';
import AcademicPane from './components/AcademicPane';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <MainContainer>
          <BiographyPane />
          <Divider />
          <SkillPane />
          <Divider />
          <WorkExperiencePane />
          <Divider />
          <ProjectPane />
          <Divider />
          <AcademicPane />
        </MainContainer>
        <ScrollButton />
      </main>
    </>
  );
}

export default App;
