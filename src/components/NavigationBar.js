import { Container, Menu, Icon } from 'semantic-ui-react';

const NavigationBar = () => {
  return (
    <Menu fixed='top' size='massive' inverted as='nav'>
      <Container>
        <Menu.Item header>Jadon Fan</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            icon
            href='https://github.com/JadonFan'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='github' size='large' />
          </Menu.Item>
          <Menu.Item
            icon
            href='https://www.linkedin.com/in/jadon-fan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='linkedin' size='large' />
          </Menu.Item>
          <Menu.Item icon href='mailto:jdsare@gmail.com'>
            <Icon name='mail' size='large' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavigationBar;
