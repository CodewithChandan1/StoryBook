import { Button } from "@/components/ui/button";
import { ComponentCategory } from "../types";
import { MousePointer } from "lucide-react";

export const buttonCategory: ComponentCategory = {
  id: "buttons",
  title: "Buttons",
  icon: MousePointer,
  description: "Clickable elements that trigger actions",
  stories: [
    {
      id: "default-button",
      title: "Default Button",
      description: "A standard button component",
      component: <Button>Click me</Button>,
      code: `<Button>Click me</Button>`,
      variants: [
        {
          id: "secondary-button",
          title: "Secondary Button",
          description: "A secondary style button",
          component: <Button variant="secondary">Secondary</Button>,
          code: `<Button variant="secondary">Secondary</Button>`,
        },
        {
          id: "destructive-button",
          title: "Destructive Button",
          description: "A button for destructive actions",
          component: <Button variant="destructive">Delete</Button>,
          code: `<Button variant="destructive">Delete</Button>`,
        },
        {
          id: "outline-button",
          title: "Outline Button",
          description: "A button with an outline style",
          component: <Button variant="outline">Outline</Button>,
          code: `<Button variant="outline">Outline</Button>`,
        },
      ],
    },
  ],
};