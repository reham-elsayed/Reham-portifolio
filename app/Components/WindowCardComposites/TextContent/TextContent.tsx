import React from 'react';
import styles from '../Presenters.module.css';

interface TerminalContentProps {
  lines: string[];
}

const TerminalContent: React.FC<TerminalContentProps> = ({ lines }) => {
  return (
    <div className={styles.terminal_content}>
      {lines.map((line, index) => (
        <p key={index} className={styles.terminalLine}>{line}</p>
      ))}
    </div>
  );
};

export default TerminalContent;