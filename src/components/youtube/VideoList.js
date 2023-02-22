import React from "react";
import VideoItem from "./VideoItem";


/*
function video list digunakan untuk 
menampilkan vidio yang di pilih sekaligus
menhandle vidio agar bisa di render
*/ 
const VideoList = ({videos,handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) =>{
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });
    return <div className="ui relaxed divided list">{renderedVideos}</div>;
}
export default VideoList;