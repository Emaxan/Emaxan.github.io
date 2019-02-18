import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="" style={{width:"100%",height:"100%",fontSize:"80%"}}>
        <Timeline lineColor="#61dafb" >
          <TimelineEvent 
            style={{backgroundColor:"transparent"}}
            collapsible
            createdAt="1997-01-15 11:55 PM"
            title="Event one"
            titleStyle={{backgroundColor:"yellow", padding:"10px"}}
            subtitle="Subtitle one"
            subtitleStyle={{backgroundColor:"lime", padding:"10px"}}
            icon={<i className="material-icons md-18">textsms</i>}
            iconColor="black"
            bubbleStyle={{backgroundColor:"gray",}}
            contentStyle={{backgroundColor:"red"}}
          >
            I received the payment for $543. Should be shipping the item within a couple of hours.
          </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}

export default Home;
