import { Header } from 'semantic-ui-react';
import { BiographyImage } from './common/BiographyPane';
import { PaneContainer } from './common/PaneContainer';
import { LargerParagraph } from './common/Universal';
import FactCarousel from './FactCarousel';

const BiographyPane = () => {
  return (
    <PaneContainer id='biography'>
      <Header as='h2'>Hi There!</Header>
      <BiographyImage
        src='images/jadon.png'
        size='medium'
        alt='Jadon Fan selfie'
      />
      <LargerParagraph>
        My name is Jadon Fan. I graduated with a BASc in Computer Engineering
        at the University of Waterloo in June 2022. I was part of the University's
        co-op program, which meant that I alternated between study
        terms and work terms every 4 months. I hope you enjoy exploring my
        website, which I am using to gain further experience in web development.
      </LargerParagraph>
      <LargerParagraph>
        I would describe myself as a determined person who loves to employ his
        problem solving skills. When I face a problem, I will put in as much
        effort as I can (eating and sleeping are still important!), and use
        whatever relevant tools I have at my disposal, to find a solution to
        that problem. That said, my mantra is that
        <q>
          while it is important to work hard, working smart is more efficient
          and effective
        </q>
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
