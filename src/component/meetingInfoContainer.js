import React from 'react';
import CurrentMeetingInfo from './currentMeetingInfo';
import NextMeetingInfo from './nextMeetingInfo';

class MeetingInfoContainer extends React.Component {
    render() {
        const props = this.props;
        const { roomName } = props;

        return (
            <div>
                <span className='lrn-room-name'>{roomName}</span>
                <CurrentMeetingInfo {...props}/>
                <NextMeetingInfo {...props}/>
            </div>
        );
    }
}

export default MeetingInfoContainer;
