import React, { ReactNode } from 'react';
import styles from '../Presenters.module.css';

interface WindowFrameProps {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  headerColor?: string;
  backgroundColor?: string;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ title, children, style, headerColor, backgroundColor }) => {
  return (
    <div className={styles.window} style={{ ...style, backgroundColor: backgroundColor || 'white' }}>
      <div className={styles.header} style={{ backgroundColor: headerColor || '#F4F04E' }}>
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