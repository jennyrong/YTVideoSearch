import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
   
   const videoItems = props.videos.map((x)=>{
       return <VideoListItem 
         onVideoSelect={props.onVideoSelect}
         key={x.etag} 
         video={x} />
   });

    return (
      <div>
      <ul classname="col-md-4 list-group">
        {videoItems}
      </ul>
      </div>
   );
};

export default VideoList;