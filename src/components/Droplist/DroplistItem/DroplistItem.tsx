import { useState } from 'react';
import { Checkbox } from "../../Checkbox";
import styles from './DroplistItem.module.scss';

interface DroplistItemProps {
  label: string;
  checkboxName: string;
  id?: string;
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
  const [isCheckedNow, setisCheckedNow] = useState(isChecked ?? false);
  const [isCheckboxHovered, setIsCheckboxHovered] = useState(false);

  const handleItemClick = () => {
    setisCheckedNow(!isCheckedNow);
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
