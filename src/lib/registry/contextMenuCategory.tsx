import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { ComponentCategory } from "../types";
import { MoreHorizontal } from "lucide-react";

export const contextMenuCategory: ComponentCategory = {
  id: "context-menu",
  title: "Context Menu",
  icon: MoreHorizontal,
  description: "A customizable context menu with items and submenus.",
  stories: [
    {
      id: "default-context-menu",
      title: "Default Context Menu",
      description: "A basic context menu with items and a separator.",
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">Right Click Me</button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={() => alert("Profile clicked")}>
              Profile
            </ContextMenuItem>
            <ContextMenuItem onClick={() => alert("Settings clicked")}>
              Settings
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => alert("Log Out clicked")}>
              Log Out
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `<ContextMenu>
  <ContextMenuTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Right Click Me</button>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem onClick={() => alert('Profile clicked')}>
      Profile
    </ContextMenuItem>
    <ContextMenuItem onClick={() => alert('Settings clicked')}>
      Settings
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem onClick={() => alert('Log Out clicked')}>
      Log Out
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    },
    {
      id: "context-menu-with-submenu",
      title: "Context Menu with Submenu",
      description: "A context menu with nested submenus.",
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={(e) => e.preventDefault()} // Prevent default left-click behavior
            >
              Right Click or Left Click Me
            </button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={() => alert("Profile clicked")}>
              Profile
            </ContextMenuItem>
            <ContextMenuItem onClick={() => alert("Settings clicked")}>
              Settings
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => alert("Log Out clicked")}>
              Log Out
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `<ContextMenu>
  <ContextMenuTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Right Click Me</button>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem onClick={() => alert('New File clicked')}>
      New File
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem onClick={() => alert('Delete clicked')}>
          Delete
        </ContextMenuItem>
        <ContextMenuItem onClick={() => alert('Duplicate clicked')}>
          Duplicate
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`,
    },
  ],
};
