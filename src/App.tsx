import './App.scss';
import { Checkbox } from './components/Checkbox';
import { Label } from './components/Label';
import { Tabs } from './components/Tabs';
import { TabItemBaseProps } from './components/Tabs/types';
import logo from './logo.svg';

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

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="form-block">
        <div className="control-states-list">
          <Checkbox name="test-checkbox"id="checkbox-default" />
          <Checkbox isDisabled name="test-checkbox"id="checkbox-disabled" />
          <Checkbox isChecked name="test-checkbox"id="checkbox-checked" />
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
      </div>
    </div>
  );
}

export default App;
