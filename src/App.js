import { Divider } from 'semantic-ui-react';
import { MainContainer } from './component/Universal';
import ProjectPane from './screen/ProjectPane';
import WorkExperiencePane from './screen/WorkExperiencePane';
import BiographyPane from './screen/BiographyPane';
import SkillPane from './screen/SkillPane';
import NavigationBar from './screen/NavigationBar';
import AcademicPane from './screen/AcademicPane';

function App() {
  return (
    <div>
      <NavigationBar />
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
    </div>
  );
}

export default App;
