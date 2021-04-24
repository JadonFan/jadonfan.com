import './App.css';
import ProjectPane from './screen/ProjectPane';
import WorkExperiencePane from './screen/WorkExperiencePane';
import BiographyPane from './screen/BiographyPane';
import { Container, Divider } from 'semantic-ui-react'
import SkillPane from './screen/SkillPane';
import NavigationBar from './screen/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Container className="main-container">
        <BiographyPane />
        <Divider />
        <SkillPane />
        <Divider />
        <WorkExperiencePane />
        <Divider />
        <ProjectPane />
      </Container>
    </div>
  );
}

export default App;
