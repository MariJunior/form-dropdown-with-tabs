import { DroplistItemBaseProps } from "../../components/Droplist/DroplistItem/types";

type TabBlockOptionsProps = {
  label: string;
  id: string;
}

export type DropdownTabOptionsProps = {
  tabAnchor: string;
  checkboxName: string;
  tabOptions: TabBlockOptionsProps[];
}

export type SelectedOptionsProps = {
  tabAnchor: string;
  selectedOptions: DroplistItemBaseProps[];
}