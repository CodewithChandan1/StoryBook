import { Badge } from "@/components/ui/badge";
import { ComponentCategory } from "../types";
import { Tag } from "lucide-react";

export const badgeCategory: ComponentCategory = {
  id: "badges",
  title: "Badges",
  icon: Tag,
  description: "Small status indicators",
  stories: [
    {
      id: "default-badge",
      title: "Default Badge",
      description: "A standard badge component",
      component: <Badge>Default</Badge>,
      code: `<Badge>Default</Badge>`,
      variants: [
        {
          id: "secondary-badge",
          title: "Secondary Badge",
          description: "A secondary style badge",
          component: <Badge variant="secondary">Secondary</Badge>,
          code: `<Badge variant="secondary">Secondary</Badge>`,
        },
        {
          id: "destructive-badge",
          title: "Destructive Badge",
          description: "A badge for destructive or error states",
          component: <Badge variant="destructive">Removed</Badge>,
          code: `<Badge variant="destructive">Removed</Badge>`,
        },
        {
          id: "outline-badge",
          title: "Outline Badge",
          description: "A badge with an outline style",
          component: <Badge variant="outline">Outline</Badge>,
          code: `<Badge variant="outline">Outline</Badge>`,
        },
      ],
    },
  ],
};