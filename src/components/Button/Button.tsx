import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button 
      className={cn(styles.button, { [styles.with_icon]: icon })}
      type="button" 
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
