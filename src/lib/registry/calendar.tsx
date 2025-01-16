import { Calendar } from "@/components/ui/calendar";
import { ComponentCategory } from "../types";
import { CalendarDays } from "lucide-react";

export const calendarCategory: ComponentCategory = {
  id: "calendar",
  title: "Calendar",
  icon: CalendarDays,
  description: "A date selection component",
  stories: [
    {
      id: "default-calendar",
      title: "Default Calendar",
      description: "A standard calendar component",
      component: <Calendar />,
      code: `<Calendar />`,
    },
  ],
};
