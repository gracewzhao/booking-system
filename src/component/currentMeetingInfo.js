import React from 'react';
import logo from '../images/ghost-app-icon.png';

class CurrentMeetingInfo extends React.Component {

    render() {
        const { isMeetingOn } = this.props;

        return (
            <div>
                {!isMeetingOn && (
                    this.roomAvailable()
                )}
                {isMeetingOn && (
                    this.roomIsTaken()
                )}
            </div>
        );
    }

    roomIsTaken() {
        const { time, title, host } = this.props;

        return (
            <div>
                <h1 className='lrn-meeting-head'>Current Meeting</h1>
                <h3 className='lrn-meeting-title'>{title}</h3>
                <h3 className='lrn-meeting-time'>{time}</h3>
                <h3 className='lrn-meeting-host'>{host} </h3>
                <img className='lrn-booking-logo' src={logo}/>
            </div>
        );
    }

    roomAvailable() {
        return (
            <div className='lrn-room-available'>
                <h1>Room</h1>
                <h1>Available</h1>
            </div>
        );
    }
}

export default CurrentMeetingInfo;
