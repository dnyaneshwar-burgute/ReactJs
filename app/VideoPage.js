import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';


class VideoPage extends React.Component {
  render(){
    return(
      <div className='blog'>
         <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="./images/mov_bbb.mp4" type="video/webm" />
        </Video>
      </div>
    );
  }
}

export default VideoPage;