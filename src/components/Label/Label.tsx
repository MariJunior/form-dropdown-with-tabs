import cn from 'classnames';
import { ReactComponent as IconCross } from '../../assets/svg/icon-cross.svg';
import styles from './Label.module.scss';

interface LabelProps {
  text: string;
  canRemove?: boolean;
  onCloseClick?: () => void;
}

export const Label: React.FC<LabelProps> = ({ text, canRemove, onCloseClick }) => {
  if (!canRemove) {
    return (
      <p className={styles.label}>
        {text}
      </p>
    );
  }

  return (
    <button
      className={cn(styles.label, styles.can_close)}
      type="button"
      onClick={onCloseClick}
    >
      {text}
      <IconCross
        className={styles.close}
        role="presentation"
        aria-label="удалить выбранный пункт"
      />
    </button>
  )
}
