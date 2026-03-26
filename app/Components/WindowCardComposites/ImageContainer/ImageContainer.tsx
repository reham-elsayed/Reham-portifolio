import React from 'react';
import styles from '../Presenters.module.css';

interface ImageContentProps {
  src: string;
  alt: string;
}

const ImageContent: React.FC<ImageContentProps> = ({ src, alt }) => {
  return (
    <div className={styles.image_content}>
      <img  src={src} alt={alt} />
    </div>
  );
};

export default ImageContent;