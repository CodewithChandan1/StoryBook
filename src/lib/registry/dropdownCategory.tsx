import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { ComponentCategory } from "../types";
import { MoreHorizontal } from "lucide-react";

export const dropdownCategory: ComponentCategory = {
  id: "dropdown-menu",
  title: "Dropdown Menu",
  icon: MoreHorizontal,
  description: "A customizable dropdown menu component.",
  stories: [
    {
      id: "default-dropdown",
      title: "Default Dropdown",
      description: "A basic dropdown menu with simple items.",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">Open Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => alert("Profile clicked")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Settings clicked")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert("Log Out clicked")}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Menu</button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={() => alert("Profile clicked")}>
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => alert("Settings clicked")}>
      Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => alert("Log Out clicked")}>
      Log Out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      id: "checkbox-dropdown",
      title: "Checkbox Dropdown",
      description: "A dropdown menu with checkbox items.",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">
              Open Checkbox Menu
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>
              Enable Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Dark Mode</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert("Save clicked")}>
              Save Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Checkbox Menu</button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem checked>
      Enable Notifications
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>
      Dark Mode
    </DropdownMenuCheckboxItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => alert("Save clicked")}>
      Save Settings
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      id: "radio-dropdown",
      title: "Radio Dropdown",
      description: "A dropdown menu with radio group items.",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">Open Radio Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Radio Menu</button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
    <DropdownMenuRadioGroup>
      <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
  ],
};
