import cn from 'classnames';
import { MouseEventHandler } from 'react';
import { TabItemBaseProps } from '../types';
import styles from './TabItem.module.scss';

interface TabItemProps extends TabItemBaseProps {
  onClick: () => void;
  isActive?: boolean;
}

export const TabItem: React.FC<TabItemProps> = ({ anchor, text, onClick, isActive }) => {
  const handleTabClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    onClick();
  }

  return (
    <a
      className={cn(styles.tab, { [styles.active]: isActive })} 
      href={`#${anchor}`}
      onClick={handleTabClick}
    >
      {text}
    </a>
  );
};
