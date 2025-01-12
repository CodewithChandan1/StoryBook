import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentCategory } from "../types";
import { TextCursor } from "lucide-react";

export const inputCategory: ComponentCategory = {
  id: "inputs",
  title: "Inputs",
  icon: TextCursor,
  description: "Form input elements for user data entry",
  stories: [
    {
      id: "default-input",
      title: "Default Input",
      description: "A standard text input field",
      component: <Input placeholder="Enter text..." />,
      code: `<Input placeholder="Enter text..." />`,
      variants: [
        {
          id: "labeled-input",
          title: "Labeled Input",
          description: "Input field with a label",
          component: (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          ),
          code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`,
        },
        {
          id: "disabled-input",
          title: "Disabled Input",
          description: "A disabled input field",
          component: <Input disabled placeholder="Disabled input" />,
          code: `<Input disabled placeholder="Disabled input" />`,
        },
      ],
    },
  ],
};