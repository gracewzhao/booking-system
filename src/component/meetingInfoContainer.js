import React from 'react';
import CurrentMeetingInfo from './currentMeetingInfo';
import NextMeetingInfo from './nextMeetingInfo';

class MeetingInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    render() {
        const props = this.props;
        const { roomName, showClock } = props;
        const { isMeetingOn, currentTime} = this.isMeetingOn();
        const roomStates = isMeetingOn ? 'lrn-taken' : 'lrn-available';

        return (
            <div className={roomStates}>
                <span className='lrn-room-name'>{roomName}</span>
                {showClock && (
                    <span className='lrn-clock'>{currentTime}</span>
                )}
                <CurrentMeetingInfo {...props} isMeetingOn={isMeetingOn}/>
                <NextMeetingInfo {...props}/>
            </div>
        );
    }

    isMeetingOn() {
        const { time } = this.props;
        const dayTime = new Date;
        const hour = dayTime.getHours();
        const minutes = dayTime.getMinutes();
        const currentTime = minutes < 10 ? `${hour}:0${minutes}` : `${hour}:${minutes}`;
        const meetingStartTime = time.substring(0, 5);
        const meetingFinishTime = time.substring(8, 13);
        const isMeetingOn = meetingStartTime <= currentTime && currentTime <= meetingFinishTime;

        return {
            isMeetingOn: isMeetingOn,
            currentTime: currentTime
        };
    }
}

export default MeetingInfoContainer;
