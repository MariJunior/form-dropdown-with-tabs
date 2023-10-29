import { useState } from 'react';
import { Checkbox } from "../../Checkbox";
import styles from './DroplistItem.module.scss';
import { DroplistItemBaseProps } from './types';

interface DroplistItemProps extends DroplistItemBaseProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const DroplistItem: React.FC<DroplistItemProps> = ({
  label,
  checkboxName,
  id,
  isChecked,
  isDisabled,
  onClick
}) => {
  const [isCheckedNow, setIsCheckedNow] = useState(isChecked ?? false);
  const [isCheckboxHovered, setIsCheckboxHovered] = useState(false);

  const handleItemClick = () => {
    setIsCheckedNow(!isCheckedNow);
    onClick && onClick();
  }

  const handleItemMouseEnter = () => {
    setIsCheckboxHovered(true);
  }

  const handleItemMouseLeave = () => {
    setIsCheckboxHovered(false);
  }

  return (
    <p 
      className={styles.droplist_item} 
      onClick={handleItemClick} 
      onMouseEnter={handleItemMouseEnter}
      onMouseLeave={handleItemMouseLeave}
    >
      <span>{label}</span>
      <Checkbox
        name={checkboxName} 
        id={id}
        isChecked={isCheckedNow} 
        isDisabled={isDisabled} 
        onClick={handleItemClick}
        isHovered={isCheckboxHovered}
      />
    </p>
  )
}
