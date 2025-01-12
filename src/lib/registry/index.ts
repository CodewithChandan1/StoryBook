import { ComponentCategory } from "../types";
import { buttonCategory } from "./button";
import { cardCategory } from "./card";
import { inputCategory } from "./input";
import { tabsCategory } from "./tabs";
import { alertCategory } from "./alert";
import { badgeCategory } from "./badge";
import { selectCategory } from "./select";

export const registry: ComponentCategory[] = [
  buttonCategory,
  cardCategory,
  inputCategory,
  tabsCategory,
  alertCategory,
  badgeCategory,
  selectCategory,
];