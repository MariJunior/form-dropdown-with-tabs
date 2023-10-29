import cn from 'classnames';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { DroplistItem } from '../../components/Droplist/DroplistItem';
import { Label } from '../../components/Label';
import { Tabs } from '../../components/Tabs';
import { TabItemBaseProps } from '../../components/Tabs/types';
import styles from './Dropdown.module.scss';
import { DropdownTabOptionsProps, SelectedOptionsProps } from './types';

interface DropdownProps {
  title: string;
  buttonText: string;
  tabsList: TabItemBaseProps[];
  defaultTab: string;
  options: DropdownTabOptionsProps[];
  buttonIcon?: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  buttonText,
  buttonIcon,
  tabsList,
  defaultTab,
  options
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [currentTab, setCurrentTab] = useState(defaultTab);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsProps[] | null>(null);

  const handleDropdownButtonClick = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  // TODO: добавить функционал проверки isCheck|isUncheck и, соответственно, удаления айтема
  const handleDroplistItemClick = (tabAnchor : string, label: string, checkboxName: string, id: string) => {
    if (selectedOptions === null) {
      setSelectedOptions([{tabAnchor, selectedOptions: [{label, checkboxName, id}]}]);
      return;
    }

    const isCurrentTabExists = selectedOptions.findIndex(option => option.tabAnchor === tabAnchor) !== -1;

    if (isCurrentTabExists) {
      setSelectedOptions(
        selectedOptions.map((option) =>
          option.tabAnchor === tabAnchor ? 
            {...option, selectedOptions: [...option.selectedOptions, {label, checkboxName, id}]} : 
            option
        )
      );

      return;
    }

    const newTabWithSelectedOption: SelectedOptionsProps = {
      tabAnchor,
      selectedOptions: [{
        label,
        checkboxName,
        id
      }]
    };
    setSelectedOptions([...selectedOptions, newTabWithSelectedOption]);
  };

  return (
    <div className={styles.dropdown}>
      <p className={styles.title}>{title}</p>

      <Button text={buttonText} icon={buttonIcon} onClick={handleDropdownButtonClick} />

      <div className={cn(styles.options_wrapper, { [styles.opened]: isDropdownOpened })}>
        <div className={styles.tabs}>
          <Tabs tabsList={tabsList} defaultTab={defaultTab} />
        </div>
        {options.map(({tabAnchor, checkboxName, tabOptions}) => {
          const selectedTabOptions = selectedOptions?.find(option => option.tabAnchor === tabAnchor)?.selectedOptions;

          return (
            <fieldset 
              className={cn(styles.tab_content, tabAnchor === currentTab && styles.active)} 
              id={tabAnchor}
              key={tabAnchor}
            >
              {selectedOptions && selectedOptions.length && (
                <div className={styles.selected_options}>
                  <strong className={styles.title}>Выбранные варианты: </strong>
                  <ul className={styles.options}>
                    {selectedTabOptions !== undefined && selectedTabOptions.map(({ label }) => (
                      <li className={styles.item} key={label}>
                        <Label text={label} onCloseClick={() => {}} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={styles.all_options}>
                <strong className={styles.title}>Доступные варианты: </strong>
                <ul className={styles.options}>
                  {tabOptions.map(({label, id}) => (
                    <li className={styles.item} key={id}>
                      <DroplistItem 
                        label={label} 
                        checkboxName={checkboxName}
                        id={id}
                        onClick={() => {handleDroplistItemClick(tabAnchor, label, checkboxName, id)}}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
          )
        })}
      </div>
    </div>
  );
}