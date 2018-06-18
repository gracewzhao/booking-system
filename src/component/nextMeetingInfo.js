import React from 'react';

class NextMeetingInfo extends React.Component {
    render() {
        const { timeNext, titleNext, hostNext } = this.props;

        return (
            <div>
                <h3>Next Meeting: {timeNext} 15:30 - 16: 40</h3>
                <p className='lrn-meeting-title'>Title: {titleNext} Assessment // OKRs</p>
                <h4 className='lrn-meeting-host'>Booked by {hostNext} Grace W Zhao</h4>
            </div>
        );
    }
}

export default NextMeetingInfo;
