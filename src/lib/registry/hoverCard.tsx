import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { ComponentCategory } from "../types";
import { MousePointer } from "lucide-react";

export const hoverCardCategory: ComponentCategory = {
  id: "hover-card",
  title: "Hover Card",
  icon: MousePointer,
  description: "A popover that appears when the user hovers over an element.",
  stories: [
    {
      id: "default-hover-card",
      title: "Default Hover Card",
      description: "A basic hover card with a trigger and content.",
      component: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">Hover over me</button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>This is a hover card.</p>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `<HoverCard>
  <HoverCardTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Hover over me</button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>This is a hover card.</p>
  </HoverCardContent>
</HoverCard>`,
    },
    {
      id: "custom-hover-card",
      title: "Hover Card with Custom Content",
      description: "A hover card displaying a user profile preview.",
      component: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="p-2 bg-blue-500 text-white rounded">
              Hover for Profile
            </button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-medium">John Doe</h4>
                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `<HoverCard>
  <HoverCardTrigger asChild>
    <button className="p-2 bg-blue-500 text-white rounded">Hover for Profile</button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex items-center space-x-4">
      <img src="https://via.placeholder.com/50" alt="Avatar" className="w-12 h-12 rounded-full" />
      <div>
        <h4 className="text-lg font-medium">John Doe</h4>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
    },
  ],
};
