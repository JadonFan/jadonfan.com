import React, { Component } from 'react';
import { Header, Icon, Message, Segment } from 'semantic-ui-react';
import {
  CarouselBubble,
  CarouselBubbles,
  CarouselButton,
  CarouselNavigation,
} from '../component/FactCarousel';
import { LargerParagraph, Title } from '../component/Universal';
import { facts } from '../data/facts';

class FactCarousel extends Component {
  static CAROUSEL_AUTO_MOVE_TIME = 5000;

  constructor(props) {
    super(props);
    this.handlePreviousSlide = this.handlePreviousSlide.bind(this);
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handleAutoTransition = this.handleAutoTransition.bind(this);
    this.intervalId = undefined;
    this.state = {
      funFactNum: 0,
      autoNextFact: false,
    };
  }

  handlePreviousSlide() {
    var prevNum = this.state.funFactNum - 1;
    if (prevNum < 0) {
      prevNum = facts.length - 1;
    }
    this.setState({ funFactNum: prevNum });
  }

  handleNextSlide() {
    var nextNum = this.state.funFactNum + 1;
    if (nextNum >= facts.length) {
      nextNum = 0;
    }
    this.setState({ funFactNum: nextNum });
  }

  /**
   *
   * @param {BigInt} k the index corresponding to the funFacts array
   */
  createFactTrackDot(k) {
    var colorNotifyCurrent =
      this.state.funFactNum === k
        ? { backgroundColor: 'black' }
        : { backgroundColor: '#A9A9A9' };
    return <CarouselBubble key={k} style={colorNotifyCurrent} />;
  }

  handleAutoTransition() {
    this.setState({ autoNextFact: !this.state.autoNextFact });
    if (this.state.autoNextFact) {
      clearInterval(this.intervalId);
    } else {
      this.intervalId = setInterval(
        () => this.handleNextSlide(),
        FactCarousel.CAROUSEL_AUTO_MOVE_TIME
      );
    }
  }

  render() {
    return (
      <>
        <Header as='h5' size='large' attached='top' block>
          <Title>Facts</Title>
          <CarouselButton
            floated='right'
            icon={this.state.autoNextFact ? 'pause' : 'play'}
            onClick={this.handleAutoTransition}
            style={{ backgroundColor: 'transparent' }}
          />
        </Header>
        <Segment attached raised>
          <LargerParagraph>{facts[this.state.funFactNum]}</LargerParagraph>
          {this.state.autoNextFact && (
            <Message info>
              <Icon name='info' />
              This carousel automatically switches to the next slide every
              {' ' + FactCarousel.CAROUSEL_AUTO_MOVE_TIME / 1000} seconds
            </Message>
          )}
        </Segment>
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
