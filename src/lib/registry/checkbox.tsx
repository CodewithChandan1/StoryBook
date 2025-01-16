import { Checkbox } from "@/components/ui/checkbox";
import { ComponentCategory } from "../types";
import { CheckSquare } from "lucide-react";

export const checkboxCategory: ComponentCategory = {
  id: "checkbox",
  title: "Checkbox",
  icon: CheckSquare,
  description: "A customizable checkbox component.",
  stories: [
    {
      id: "default-checkbox",
      title: "Default Checkbox",
      description: "A simple checkbox with a check icon when checked.",
      component: (
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm">
            Accept Terms and Conditions
          </label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm">
    Accept Terms and Conditions
  </label>
</div>`,
    },
    {
      id: "disabled-checkbox",
      title: "Disabled Checkbox",
      description: "A checkbox that is disabled and cannot be interacted with.",
      component: (
        <div className="flex items-center space-x-2">
          <Checkbox id="subscribe" disabled />
          <label htmlFor="subscribe" className="text-sm">
            Subscribe to Newsletter
          </label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="subscribe" disabled />
  <label htmlFor="subscribe" className="text-sm">
    Subscribe to Newsletter
  </label>
</div>`,
    },
  ],
};
