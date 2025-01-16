import { Switch } from "@/components/ui/switch";
import { ComponentCategory } from "../types";
import { ToggleRight } from "lucide-react";

export const switchCategory: ComponentCategory = {
  id: "switch",
  title: "Switch",
  icon: ToggleRight,
  description: "A toggle switch component to represent an on/off state.",
  stories: [
    {
      id: "default-switch",
      title: "Default Switch",
      description: "A simple toggle switch component.",
      component: (
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode" className="text-sm font-medium">
            Airplane Mode
          </label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode" className="text-sm font-medium">
    Airplane Mode
  </label>
</div>`,
    },
    {
      id: "disabled-switch",
      title: "Disabled Switch",
      description: "A disabled switch component.",
      component: (
        <div className="flex items-center space-x-2">
          <Switch id="wifi" disabled />
          <label htmlFor="wifi" className="text-sm font-medium">
            WiFi (Disabled)
          </label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Switch id="wifi" disabled />
  <label htmlFor="wifi" className="text-sm font-medium">
    WiFi (Disabled)
  </label>
</div>`,
    },
  ],
};
