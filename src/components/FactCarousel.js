import { Component } from 'react';
import { Header, Icon, Message, Progress, Segment } from 'semantic-ui-react';
import {
  CarouselBody,
  CarouselBubble,
  CarouselBubbles,
  CarouselButton,
  CarouselNavigation,
} from './common/FactCarousel';
import { LargerParagraph, Title } from './common/Universal';
import { facts } from '../values/facts';

class FactCarousel extends Component {
  static CAROUSEL_AUTO_MOVE_TIME = 5000;

  constructor(props) {
    super(props);
    this.handlePreviousSlide = this.handlePreviousSlide.bind(this);
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handleAutoTransition = this.handleAutoTransition.bind(this);
    this.intervalId = null;
    this.state = {
      factIndex: 0,
      autoNextFact: false,
      slideTime: 0,
    };
  }

  handlePreviousSlide() {
    let prevNum = this.state.factIndex - 1;
    if (prevNum < 0) {
      prevNum = facts.length - 1;
    }
    this.setState({ factIndex: prevNum });
    this.resetAutoTransitionProgress();
  }

  handleNextSlide() {
    let nextNum = this.state.factIndex + 1;
    if (nextNum >= facts.length) {
      nextNum = 0;
    }
    this.setState({ factIndex: nextNum });
    this.resetAutoTransitionProgress();
  }

  resetAutoTransitionProgress() {
    if (this.state.autoNextFact) {
      this.setState({ slideTime: 0 });
    }
  }

  /**
   *
   * @param {BigInt} idx the index corresponding to the funFacts array
   */
  createFactTrackDot(idx) {
    const colorNotifyCurrent =
      this.state.factIndex === idx
        ? { backgroundColor: 'black' }
        : { backgroundColor: '#A9A9A9' };
    return <CarouselBubble key={idx} style={colorNotifyCurrent} />;
  }

  handleAutoTransition() {
    this.setState({ autoNextFact: !this.state.autoNextFact });
    if (this.state.autoNextFact) {
      clearInterval(this.intervalId);
      this.setState({ slideTime: 0 });
    } else {
      this.intervalId = setInterval(() => {
        this.setState({ slideTime: this.state.slideTime + 1_000 });
        if (this.state.slideTime >= FactCarousel.CAROUSEL_AUTO_MOVE_TIME) {
          this.handleNextSlide();
        }
      }, 1_000);
    }
  }

  render() {
    return (
      <>
        <Header as='h5' size='large' attached='top' block>
          <Title>Quick Facts</Title>
          <CarouselButton
            floated='right'
            icon={this.state.autoNextFact ? 'pause' : 'play'}
            onClick={this.handleAutoTransition}
            style={{ backgroundColor: 'transparent' }}
          />
        </Header>
        <CarouselBody attached raised>
          <LargerParagraph>{facts[this.state.factIndex]}</LargerParagraph>
          {this.state.autoNextFact && (
            <>
              <Message info>
                <Icon name='info' />
                This carousel automatically switches to the next slide every
                {' ' + FactCarousel.CAROUSEL_AUTO_MOVE_TIME / 1_000} seconds
              </Message>
              <Progress
                attached='bottom'
                percent={Math.ceil(
                  (this.state.slideTime /
                    FactCarousel.CAROUSEL_AUTO_MOVE_TIME) *
                    100
                )}
              />
            </>
          )}
        </CarouselBody>
        <Segment attached='bottom'>
          <CarouselNavigation>
            <CarouselButton
              floated='left'
              labelPosition='left'
              icon='left chevron'
              content='Previous'
              onClick={this.handlePreviousSlide}
            />
            <CarouselBubbles>
              {Array.from({ length: facts.length }, (_, k) =>
                this.createFactTrackDot(k)
              )}
            </CarouselBubbles>
            <CarouselButton
              floated='right'
              labelPosition='right'
              icon='right chevron'
              content='Next'
              onClick={this.handleNextSlide}
            />
          </CarouselNavigation>
        </Segment>
      </>
    );
  }
}

export default FactCarousel;
