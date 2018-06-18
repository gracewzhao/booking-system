import React from 'react';
import ReactDom from 'react-dom';
import MeetingInfoContainer from './component/meetingInfoContainer';
import css from './css/style.scss';

ReactDom.render(
    <MeetingInfoContainer roomName='usa'/>,
    document.getElementById('usa')
);

ReactDom.render(
    <MeetingInfoContainer roomName='australia'/>,
    document.getElementById('australia')
);
