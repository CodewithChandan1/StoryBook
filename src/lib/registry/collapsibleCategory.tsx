import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ComponentCategory } from "../types";
import { Folder } from "lucide-react";

export const collapsibleCategory: ComponentCategory = {
  id: "collapsible",
  title: "Collapsible",
  icon: Folder,
  description:
    "A component for displaying content that can be expanded or collapsed.",
  stories: [
    {
      id: "default-collapsible",
      title: "Default Collapsible",
      description: "A simple collapsible component with a trigger and content.",
      component: (
        <Collapsible>
          <CollapsibleTrigger className="p-2 bg-blue-500 text-white rounded">
            Show More
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 bg-gray-100">
            This is the collapsible content. It can be hidden or shown.
          </CollapsibleContent>
        </Collapsible>
      ),
      code: `<Collapsible>
  <CollapsibleTrigger className="p-2 bg-blue-500 text-white rounded">
    Show More
  </CollapsibleTrigger>
  <CollapsibleContent className="p-4 bg-gray-100">
    This is the collapsible content. It can be hidden or shown.
  </CollapsibleContent>
</Collapsible>`,
    },
    {
      id: "collapsible-with-custom-content",
      title: "Collapsible with Custom Content",
      description: "A collapsible component with a custom trigger and content.",
      component: (
        <Collapsible>
          <CollapsibleTrigger className="flex items-center space-x-2 p-2 bg-green-500 text-white rounded">
            <span>Toggle Details</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 bg-gray-200">
            Here is some additional information that can be revealed.
          </CollapsibleContent>
        </Collapsible>
      ),
      code: `<Collapsible>
  <CollapsibleTrigger className="flex items-center space-x-2 p-2 bg-green-500 text-white rounded">
    <span>Toggle Details</span>
  </CollapsibleTrigger>
  <CollapsibleContent className="p-4 bg-gray-200">
    Here is some additional information that can be revealed.
  </CollapsibleContent>
</Collapsible>`,
    },
  ],
};
