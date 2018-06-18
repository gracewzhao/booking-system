import React from 'react';
import logo from '../images/ghost-app-icon.png';

class CurrentMeetingInfo extends React.Component {

    render() {
        const { title, host } = this.props;

        const liveTime = new Date();
        const hour = liveTime.getHours();
        const minute = liveTime.getMinutes();

        const formatTime = `Time: ${hour}: ${minute} - ${hour + 1}: ${minute + 10} `;


        return (
            <div>
                <h1 className='lrn-meeting-head'>Current Meeting</h1>
                <h2 className='lrn-meeting-title'>{title}Title: Wookenberge stand up</h2>
                <h2 className='lrn-meeting-time'>{formatTime}</h2>
                <h3 className='lrn-meeting-host'>{host} Grace W Zhao</h3>
                <img className='lrn-booking-logo' src={logo}/>
            </div>
        );
    }
}

export default CurrentMeetingInfo;
