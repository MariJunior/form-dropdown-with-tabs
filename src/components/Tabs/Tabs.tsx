import { useState } from 'react';
import { TabItem } from './TabItem';
import styles from './Tabs.module.scss';
import { TabItemBaseProps } from './types';

interface TabsProps {
  tabsList: TabItemBaseProps[];
  defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabsList, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || null);

  const handleTabClick = (anchor: string) => {
    setActiveTab(anchor);
  }

  return (
    <ul className={styles.tab_list}>
      {tabsList.map(({ text, anchor }) => (
        <li className={styles.tab_item} key={anchor}>
          <TabItem
            text={text}
            anchor={anchor}
            onClick={() => {handleTabClick(anchor)}}
            isActive={activeTab !== null && anchor === activeTab}
          />
        </li>
      ))}
    </ul>
  )
}
