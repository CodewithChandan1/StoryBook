import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ComponentCategory } from "../types";
import { ListFilter } from "lucide-react";

export const selectCategory: ComponentCategory = {
  id: "select",
  title: "Select",
  icon: ListFilter,
  description: "Displays a list of options for the user to pick from.",
  installation: 'npx shadcn-ui@latest add select',
  notes: [
    "Follows the WAI-ARIA combobox pattern",
    "Supports keyboard navigation",
    "Can be controlled or uncontrolled"
  ],
  stories: [
    {
      id: "default-select",
      title: "Default Select",
      description: "A standard select component with options",
      component: (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      ),
      code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`,
      props: [
        {
          name: "value",
          type: "string",
          description: "The controlled value of the select",
          required: false
        },
        {
          name: "defaultValue",
          type: "string",
          description: "The default value of the select",
          required: false
        }
      ],
      accessibility: {
        role: "combobox",
        practices: [
          "Uses native select element when JavaScript is disabled",
          "Supports keyboard navigation",
          "Announces selected option"
        ],
        keyboard: [
          { key: "Space", description: "Opens/closes the select dropdown" },
          { key: "Enter", description: "Opens/closes the select dropdown" },
          { key: "Arrow Up/Down", description: "Navigates between options" }
        ]
      }
    }
  ]
};