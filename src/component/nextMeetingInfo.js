import React from 'react';

class NextMeetingInfo extends React.Component {
    render() {
        const { timeNext, titleNext, hostNext } = this.props;

        return (
            <div className='lrn-next-meeting'>
                <h4>Next Meeting: {titleNext}</h4>
                <h4 className='lrn-meeting-time'>{timeNext}</h4>
                <p className='lrn-meeting-host'>Booked by {hostNext}</p>
            </div>
        );
    }
}

export default NextMeetingInfo;
