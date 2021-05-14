import { Divider } from 'semantic-ui-react';
import { MainContainer } from './component/Universal';
import ProjectPane from './screen/ProjectPane';
import WorkExperiencePane from './screen/WorkExperiencePane';
import BiographyPane from './screen/BiographyPane';
import SkillPane from './screen/SkillPane';
import NavigationBar from './screen/NavigationBar';
import AcademicPane from './screen/AcademicPane';
import ScrollButton from './screen/ScrollButton';

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
