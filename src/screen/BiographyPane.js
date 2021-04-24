import { Header, Image } from 'semantic-ui-react';
import { PaneContainer } from '../component/PaneContainer';
import { LargerParagraph } from '../component/Universal';
import FactCarousel from './FactCarousel';

const BiographyPane = () => {
  return (
    <PaneContainer id='biography'>
      <Header as='h2'>Welcome To My Website!</Header>
      <Image
        src='images/jadon.png'
        size='medium'
        wrapped
        alt='Jadon'
        style={{ float: 'left', marginRight: 20 }}
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
        I chose Computer Engineering because I wanted to explore both hardware
        and software. While it may sound cliché, I enjoy the flexibility of what
        can be accomplished through programming. On one day, I might be writing
        code for a software that will advance medical technologies or for a game
        with gameplay mechanics and plots to my liking. On another day, I might
        be programming an embedded microprocessor, like I did in ECE298, to
        remotely adjust fan speeds by clapping your hands. On the other hand, I
        am curious about how hardware is used to run software. Since I was first
        introduced to programming back in high school, I have wondered exactly
        how a series of words on a screen can instruct a computing device to do
        something, and how a computing device is able to store and follow those
        instructions.
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

      <FactCarousel />
    </PaneContainer>
  );
};

export default BiographyPane;
