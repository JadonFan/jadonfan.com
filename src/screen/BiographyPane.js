import { Header } from 'semantic-ui-react';
import { BiographyImage } from '../component/BiographyPane';
import { PaneContainer } from '../component/PaneContainer';
import { LargerParagraph } from '../component/Universal';
import FactCarousel from './FactCarousel';

const BiographyPane = () => {
  return (
    <PaneContainer id='biography'>
      <Header as='h2'>Welcome To My Website!</Header>
      <BiographyImage
        src='images/jadon.png'
        size='medium'
        alt='Jadon Fan selfie'
      />
      <LargerParagraph>
        I am Jadon Fan. I study Computer Engineering at the University of
        Waterloo in Ontario, Canada. I am part of the graduating class of 2022
        and currently in my fourth year of study. I am part of the University's
        co-op program, which means that I alternate between study terms and work
        terms every 4 months. I hope you enjoy exploring my website, which I am
        using to gain further experience in web development.
      </LargerParagraph>
      <LargerParagraph>
        I would describe myself as a determined person who loves to employ his
        problem solving skills. When I face a problem, I will put in as much
        effort as I can (eating and sleeping are still important!), and use
        whatever relevant tools I have at my disposal, to find a solution to
        that problem. My mantra is that,
        <quote>
          {' '}
          while it is important to work hard, working smart is more efficient
          and effective
        </quote>
        . Meanwhile, my friends would probably describe me as a helpful person
        whenever it is help with academic work or just life in general. Helping
        people not only enables me to put my knowledge and skills to good use,
        but also provides a great learning opportunity for myself. For example,
        if I make a mistake when I help others, I become aware that I might make
        that same mistake in the future and will try to find why I made that
        mistake and how I can potentially avoid it.
      </LargerParagraph>
      <div style={{ marginTop: 40 }} />
      <FactCarousel />
    </PaneContainer>
  );
};

export default BiographyPane;
