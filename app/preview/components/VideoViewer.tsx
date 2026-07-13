"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "../preview.module.css";

type VideoViewerProps = {
  src: string;
  playing: boolean;
};

export function VideoViewer({ src, playing }: VideoViewerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const syncPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.muted = true;
      void video.play().catch(() => {
        // The preview is remote-controlled, so a browser may briefly reject
        // play() while the file is still buffering. The next canplay/update
        // event retries with the same requested state.
      });
    } else {
      video.pause();
    }
  }, [playing]);

  useEffect(() => {
    syncPlayback();
  }, [src, syncPlayback]);

  return (
    <section className={styles.videoViewer} aria-label="Video preview">
      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          onCanPlay={syncPlayback}
          onLoadedData={syncPlayback}
          onLoadedMetadata={syncPlayback}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
