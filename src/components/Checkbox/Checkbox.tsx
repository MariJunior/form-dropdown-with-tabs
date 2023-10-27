import cn from 'classnames';
import { ChangeEventHandler, useState } from 'react';
import { ReactComponent as IconTick } from '../../assets/svg/icon-tick.svg';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  name: string;
  id?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  withBackground?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  name, 
  id, 
  isChecked, 
  isDisabled, 
  withBackground,
  isHovered,
  onClick
}) => {
  const [isCheckedNow, setIsCheckedNow] = useState(isChecked ?? false);

  const handleCheckboxCheck: ChangeEventHandler<HTMLInputElement> = () => {
    setIsCheckedNow(!isCheckedNow);
    onClick && onClick();
  }

  return (
    <label
      className={cn(styles.checkbox_item, {
        [styles.hover]: isHovered,
        [styles.with_background]: withBackground,
        [styles.checked]: isCheckedNow, 
        [styles.disabled]: isDisabled
      })}
      htmlFor={id ?? name} 
    >
      <input
        className={styles.checkbox_input}
        type="checkbox" 
        name={name} 
        id={id ?? name} 
        checked={isCheckedNow}
        disabled={isDisabled}
        onChange={handleCheckboxCheck}
      />
      <IconTick 
        className={cn(styles.check_icon, {
          [styles.visible]: isCheckedNow
        })} 
        role="presentation" 
      />
    </label>
  )
}
