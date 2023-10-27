import cn from 'classnames';
import { ChangeEventHandler, useState } from 'react';
import { ReactComponent as IconTick } from '../../assets/svg/icon-tick.svg';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  name: string;
  id?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, id, isChecked, isDisabled }) => {
  const [isCheckedNow, setIsCheckedNow] = useState(isChecked ?? false);

  const handleCheckboxClick: ChangeEventHandler<HTMLInputElement> = () => {
    setIsCheckedNow(!isCheckedNow);
  }

  return (
    <label
      className={cn(styles.checkbox_item, { 
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
        onChange={handleCheckboxClick}
      />
      <IconTick className={styles.check_icon} role="presentation" />
    </label>
  )
}
