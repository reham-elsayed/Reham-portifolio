import React, { ReactNode } from 'react';
import styles from '../Presenters.module.css';

interface WindowFrameProps {
  title?: string;
  children: ReactNode; // This is crucial for composition
  style?: React.CSSProperties; // Allowing custom positioning (top/left)
}

const WindowFrame: React.FC<WindowFrameProps> = ({ title, children, style }) => {
  return (
    <div className={styles.window} style={style}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {/* We can add standard controls like min/max/close here later */}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;