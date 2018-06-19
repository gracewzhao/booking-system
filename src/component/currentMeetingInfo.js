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
            <div className='lrn-current-meeting'>
                <h2>Current Meeting</h2>
                <h4>{title}</h4>
                <h4>{time}</h4>
                <h5>{host} </h5>
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
