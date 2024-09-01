import React, { useEffect, useRef } from 'react';
import axios from 'axios';

interface VideoPlayerProps {
  filename: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ filename }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        if (videoRef.current) {
          // Video oqimini olish uchun so'rov yuboring
          const response = await axios({
            method: 'GET',
            url: `http://localhost:3001/api/video/${filename}`,
            responseType: 'blob',
            headers: {
              'Range': 'bytes=0-',
            },
          });
          
          // Olingan blobni URL-ga aylantiring va video elementiga qo'ying
          const videoUrl = URL.createObjectURL(response.data);
          if (videoRef.current) {
            videoRef.current.src = videoUrl;
          }
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [filename]);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;