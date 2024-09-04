import { useEffect, useState } from 'react';
import movieService from '@/services/movie-service';

const VideoPlayer = ({ filename }: { filename: string }) => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await movieService.getMovieByFilename(filename)
        if (response.status === 206) {
          const videoUrl = URL.createObjectURL(response.data);
          setVideoSrc(videoUrl);
        } else {
          console.error('Failed to fetch video:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [filename]);

  return (
    <>
      {videoSrc && (
        <video className='w-full h-full object-cover' controls>
          <source src={videoSrc} />
        </video>
      )}
    </>
  );
};

export default VideoPlayer;
