import { Button } from '../../components/Button';
import { DroplistItem } from '../../components/Droplist/DroplistItem';
import { Label } from '../../components/Label';
import { Tabs } from '../../components/Tabs';
import { TabItemBaseProps } from '../../components/Tabs/types';
import styles from './Dropdown.module.scss';
import { DropdownTabOptionsProps } from './types';

interface DropdownProps {
  title: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  tabsList: TabItemBaseProps[];
  defaultTab: string;
  options: DropdownTabOptionsProps[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  buttonText,
  buttonIcon,
  tabsList,
  defaultTab,
  options
}) => {
  return (
    <div className={styles.dropdown}>
      <p className={styles.title}>{title}</p>

      <Button text={buttonText} icon={buttonIcon} onClick={() => {}} />

      <div className={styles.options_wrapper}>
        <Tabs tabsList={tabsList} defaultTab={defaultTab} />
        {options.map(({tabAnchor, checkboxName, tabOptions}) => (
          <fieldset className={styles.tab_content} id={tabAnchor} key={tabAnchor}>
            <div className={styles.selected_options}>
              <strong>Выбранные варианты: </strong>
              <ul>
                <li>
                  <Label />
                </li>
              </ul>
            </div>
            <div className={styles.options}>
              <strong>Доступные варианты: </strong>
              <ul>
                {tabOptions.map(({label, id}) => (
                  <li key={id}>
                    <DroplistItem 
                      label={label} 
                      checkboxName={checkboxName}
                      id={id}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}