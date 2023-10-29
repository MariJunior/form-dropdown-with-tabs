import './App.scss';
import { Checkbox } from './components/Checkbox';
import { DroplistItem } from './components/Droplist/DroplistItem';
import { Label } from './components/Label';
import { Tabs } from './components/Tabs';
import { TabItemBaseProps } from './components/Tabs/types';
import { Dropdown } from './features/Dropdown';
import { DropdownTabOptionsProps } from './features/Dropdown/types';

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
];

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
];

const locationsOptions: DropdownTabOptionsProps[] = [
  {
    tabAnchor: 'zhk-group',
    checkboxName: 'zhk-group-options',
    tabOptions: [
      {
        label: 'Академический',
        id: 'akademicheskiy',
      },
      {
        label: 'Басманный',
        id: 'basmannuy',
      },
      {
        label: 'Замоскворечье',
        id: 'zamoskworechye',
      },
      {
        label: 'Измайлово',
        id: 'izmaylovo',
      },
      {
        label: 'Люблино',
        id: 'lyublino',
      },
      {
        label: 'Замоскворечье-1',
        id: 'zamoskworechye-new',
      },
      {
        label: 'Басманный-1',
        id: 'basmannuy-new',
      },
    ]
  },
  {
    tabAnchor: 'region-group',
    checkboxName: 'region-group-options',
    tabOptions: [
      {
        label: 'Центральный',
        id: 'centralnuy',
      },
      {
        label: 'Северный',
        id: 'severnuy',
      },
      {
        label: 'Восточный',
        id: 'vostochnuy',
      },
      {
        label: 'Западный',
        id: 'zapadnuy',
      },
      {
        label: 'Южный',
        id: 'yuzhnuy',
      },
      {
        label: 'Новомосковский',
        id: 'novomoskowskiy',
      },
    ]
  },
  {
    tabAnchor: 'district-group',
    checkboxName: 'district-group-options',
    tabOptions: [
      {
        label: 'Бауманский',
        id: 'baumanskiy',
      },
      {
        label: 'Городской',
        id: 'gorodskoy',
      },
      {
        label: 'Замоскворецкий',
        id: 'zamoskworeckiy',
      },
      {
        label: 'Краснопресненский',
        id: 'krasnopresnenskiy',
      },
      {
        label: 'Хамовнический',
        id: 'hamovhicheskiy',
      },
      {
        label: 'Сокольнический',
        id: 'sokoknicheskiy',
      },
    ]
  },
  {
    tabAnchor: 'metro-group',
    checkboxName: 'metro-group-options',
    tabOptions: [
      {
        label: 'кунцевская',
        id: 'kuncevskaya',
      },
      {
        label: 'спортивная',
        id: 'sportivnaya',
      },
      {
        label: 'сокол',
        id: 'sokol',
      },
      {
        label: 'тульская',
        id: 'tulskaya',
      },
      {
        label: 'китай-город',
        id: 'kitay-gorod',
      },
      {
        label: 'семеновская',
        id: 'semenovskaya',
      },
    ],
  },
];

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

      <div className="control-states-list">
        <Dropdown 
          title="Локация"
          buttonText="ЖК, Округ, район, метро"
          tabsList={locationsTabs}
          defaultTab="zhk-group"
          options={locationsOptions}
        />
      </div>
    </div>
  );
}

export default App;
