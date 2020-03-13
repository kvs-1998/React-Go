import React from 'react'
import Channel from './Channel'

class ChannelList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.channels.map( chan => {
                    return(
                        <Channel 
                            channel={chan}
                            setChannel={this.props.setChannel}/>
                    )
                    })
                } 
            </ul>
        )
    }
}
ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}
export default ChannelList