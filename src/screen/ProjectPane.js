import ProjectCard from './ProjectCard'
import { Card, Header } from 'semantic-ui-react'
import { PaneContainer } from '../component/PaneContainer'

const ProjectPane = () => {
  return (
    <PaneContainer id="projects">
      <Header as='h2'>Personal Projects</Header>
      <Card.Group>
        <ProjectCard
          imgSrc='images/notes.png'
          title='Factibly'
          meta='Crowd-Sourced Fact Checker'
          labels={['React', 'Redux', 'Apollo Client', 'MDC', 'Jest', 'Enzyme']}
          repoUrl='https://github.com/Sapphire-Labs/factibly' />
        <ProjectCard
          imgSrc='images/finance_app_icon.jpg'
          title='Budgetter'
          meta='Android Budget Tracker'
          labels={['Android SDK', 'Mavericks', 'Hilt', 'Room']}
          repoUrl='https://github.com/JadonFan/Budgeting' />
        <ProjectCard
          imgSrc='images/madmanicon.png'
          title='MadLad'
          meta='First-Person Desktop Shooter'
          labels={['Pygame', 'Numpy']}
          repoUrl='https://github.com/JadonFan/MazeShooter' />
        <ProjectCard
          imgSrc='images/MyAppLogo.png'
          title='First Game'
          meta='Family-Friendly Casual Games'
          labels={['Android SDK']}
          repoUrl='https://github.com/JadonFan/Casual-Games' />
      </Card.Group>
    </PaneContainer>
  );
}

export default ProjectPane;