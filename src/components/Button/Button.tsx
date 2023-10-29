import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  counter?: number;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, counter, onClick }) => {
  return (
    <button 
      className={cn(styles.button, { [styles.with_icon]: icon })}
      type="button" 
      onClick={onClick}
    >
      {icon}
      {text}
      {counter && <span className={styles.counter}>{counter}</span>}
    </button>
  );
};
