"use client";
import { useEffect, useRef } from 'react';
import styles from './VideoHero.module.scss';
import poster from '@/assets/poster.webp';

function VideoHero() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            const videoElement = videoRef.current as HTMLVideoElement
            videoElement.playbackRate = 0.7;
        }
    }, [])

    return (
        <video className={styles.video}
            src='https://firebasestorage.googleapis.com/v0/b/linko-52873.appspot.com/o/19595802-b48f-4bb4-b574-7272a33724fc.mp4?alt=media&token=6acf49bc-07e1-4b70-a36a-0c325069f756' autoPlay
            loop
            muted
            ref={videoRef}
            poster={poster.src}
        />
    )
}

export default VideoHero