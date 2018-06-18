import React from 'react';
import CurrentMeetingInfo from './currentMeetingInfo';
import NextMeetingInfo from './nextMeetingInfo';

class MeetingInfoContainer extends React.Component {
    render() {
        const props = this.props;
        const { roomName } = props;
        const roomStates = this.isMeetingOn() ? 'lrn-isTake' : 'lrn-isAvailable';

        return (
            <div className={roomStates}>
                <span className='lrn-room-name'>{roomName}</span>
                <CurrentMeetingInfo {...props} isMeetingOn={this.isMeetingOn()}/>
                <NextMeetingInfo {...props}/>
            </div>
        );
    }

    isMeetingOn() {
        const { time } = this.props;
        const dayTime = new Date;
        const hour = dayTime.getHours();
        const minutes = dayTime.getMinutes();
        const currentTime = `${hour}:${minutes}`;
        const meetingStartTime = time.substring(0, 5);
        const meetingFinishTime = time.substring(8, 13);
        const isMeetingOn = meetingStartTime <= currentTime && currentTime <= meetingFinishTime;

        return isMeetingOn;
    }
}

export default MeetingInfoContainer;
