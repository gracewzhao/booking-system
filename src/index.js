import React from 'react';
import ReactDom from 'react-dom';
import MeetingInfoContainer from './component/meetingInfoContainer';
import './css/style.scss';

const states = {
    usaStates: {
        roomName: 'USA',
        title: 'Wookenberge stand up',
        host: 'Grace W Zhao',
        time: '10:00 - 12:00 18th June 2018',
        titleNext: 'Assessment // OKRs',
        timeNext: '15:30 - 16: 40 18th June 2018',
        hostNext: 'Grace W Zhao'
    },
    auStates: {
        roomName: 'AUSTRALIA',
        title: 'Team Assessment Sprint Retrospective',
        host: 'Grace W Zhao',
        time: '13:00 - 15:15 19th June 2018',
        titleNext: 'Weekly Catchup',
        timeNext: '15:30 - 16: 40 19th June 2018',
        hostNext: 'Grace W Zhao'
    }
};

ReactDom.render(
    <MeetingInfoContainer {...states.usaStates}/>,
    document.getElementById('usa')
);

ReactDom.render(
    <MeetingInfoContainer {...states.auStates} showClock={true}/>,
    document.getElementById('australia')
);
