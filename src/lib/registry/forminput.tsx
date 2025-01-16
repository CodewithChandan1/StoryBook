import { Input } from "@/components/ui/input";
import { ComponentCategory } from "../types";
import { Edit } from "lucide-react";

export const forminputCategory: ComponentCategory = {
  id: "form",
  title: "Form Inputs",
  icon: Edit,
  description: "Common input fields used in forms.",
  stories: [
    {
      id: "text-input",
      title: "Text Input",
      description: "A basic text input field.",
      component: <Input type="text" placeholder="Enter text" />,
      code: `<Input type="text" placeholder="Enter text" />`,
    },
    {
      id: "password-input",
      title: "Password Input",
      description: "A password input field.",
      component: <Input type="password" placeholder="Enter password" />,
      code: `<Input type="password" placeholder="Enter password" />`,
    },
    {
      id: "email-input",
      title: "Email Input",
      description: "An email input field.",
      component: <Input type="email" placeholder="Enter email" />,
      code: `<Input type="email" placeholder="Enter email" />`,
    },
  ],
};
