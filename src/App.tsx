import './App.scss';
import { Checkbox } from './components/Checkbox';
import { DroplistItem } from './components/Droplist/DroplistItem';
import { Label } from './components/Label';
import { Tabs } from './components/Tabs';
import { TabItemBaseProps } from './components/Tabs/types';

const tabstestData: TabItemBaseProps[] = [
  {
    anchor: 'tab-item-1',
    text: 'tab item',
  },
  {
    anchor: 'tab-item-2',
    text: 'tab item',
  },
  {
    anchor: 'tab-item-3',
    text: 'tab item',
  },
  {
    anchor: 'tab-item-4',
    text: 'tab item',
  },
  {
    anchor: 'tab-item-5',
    text: 'tab item',
  },
]

const locationsTabs: TabItemBaseProps[] = [
  {
    anchor: 'zhk-group',
    text: 'жк'
  },
  {
    anchor: 'region-group',
    text: 'округ'
  },
  {
    anchor: 'district-group',
    text: 'район'
  },
  {
    anchor: 'metro-station-group',
    text: 'метро'
  },
]

function App() {
  return (
    <div className="form-block">
      <h2>Little UI-kit</h2>

      <div className="control-states-list">
        <Checkbox name="test-checkbox"id="checkbox-default" withBackground />
        <Checkbox isDisabled name="test-checkbox"id="checkbox-disabled" />
        <Checkbox isChecked name="test-checkbox"id="checkbox-checked" withBackground />
        <Checkbox isChecked isDisabled name="test-checkbox"id="checkbox-checked-disabled" />
      </div>
      
      <div className="control-states-list">
        <Tabs tabsList={tabstestData} defaultTab='tab-item-2' />
      </div>

      <div className="control-states-list">
        <Tabs tabsList={tabstestData} />
      </div>

      <div className="control-states-list">
        <Label text="id 74003" />
        <Label text="id 74005" canRemove />
      </div>

      <div className="control-states-list">
        <DroplistItem label="Академический" checkboxName="select-shk" />
      </div>
    </div>
  );
}

export default App;
