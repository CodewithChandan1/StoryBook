import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { ComponentCategory } from "../types";
import { Sidebar } from "lucide-react";

export const drawerCategory: ComponentCategory = {
  id: "drawer",
  title: "Drawer",
  icon: Sidebar,
  description: "A sliding panel that appears from the edge of the screen.",
  stories: [
    {
      id: "bottom-drawer",
      title: "Bottom Drawer",
      description: "A basic bottom drawer with a trigger and content.",
      component: (
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">
              Open Bottom Drawer
            </button>
          </DrawerTrigger>
          <DrawerContent position="bottom">
            <DrawerHeader>
              <DrawerTitle>Bottom Drawer</DrawerTitle>
              <DrawerDescription>
                This is a basic bottom drawer example.
              </DrawerDescription>
            </DrawerHeader>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              ligula vitae est vehicula vestibulum.
            </p>
            <DrawerFooter>
              <DrawerClose asChild>
                <button className="p-2 bg-red-500 text-white rounded">
                  Close
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `<Drawer>
  <DrawerTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Bottom Drawer</button>
  </DrawerTrigger>
  <DrawerContent position="bottom">
    <DrawerHeader>
      <DrawerTitle>Bottom Drawer</DrawerTitle>
      <DrawerDescription>This is a basic bottom drawer example.</DrawerDescription>
    </DrawerHeader>
    <p className="p-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula vitae est vehicula vestibulum.</p>
    <DrawerFooter>
      <DrawerClose asChild>
        <button className="p-2 bg-red-500 text-white rounded">Close</button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    },
    {
      id: "top-drawer",
      title: "Top Drawer",
      description: "A drawer that slides in from the top.",
      component: (
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">Open Top Drawer</button>
          </DrawerTrigger>
          <DrawerContent position="top">
            <DrawerHeader>
              <DrawerTitle>Top Drawer</DrawerTitle>
              <DrawerDescription>
                This is a drawer that slides in from the top.
              </DrawerDescription>
            </DrawerHeader>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              ligula vitae est vehicula vestibulum.
            </p>
            <DrawerFooter>
              <DrawerClose asChild>
                <button className="p-2 bg-red-500 text-white rounded">
                  Close
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `<Drawer>
  <DrawerTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Top Drawer</button>
  </DrawerTrigger>
  <DrawerContent position="top">
    <DrawerHeader>
      <DrawerTitle>Top Drawer</DrawerTitle>
      <DrawerDescription>This is a drawer that slides in from the top.</DrawerDescription>
    </DrawerHeader>
    <p className="p-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula vitae est vehicula vestibulum.</p>
    <DrawerFooter>
      <DrawerClose asChild>
        <button className="p-2 bg-red-500 text-white rounded">Close</button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    },
    {
      id: "left-drawer",
      title: "Left Drawer",
      description: "A drawer that slides in from the left.",
      component: (
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">
              Open Left Drawer
            </button>
          </DrawerTrigger>
          <DrawerContent position="left">
            <DrawerHeader>
              <DrawerTitle>Left Drawer</DrawerTitle>
              <DrawerDescription>
                This is a drawer that slides in from the left.
              </DrawerDescription>
            </DrawerHeader>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              ligula vitae est vehicula vestibulum.
            </p>
            <DrawerFooter>
              <DrawerClose asChild>
                <button className="p-2 bg-red-500 text-white rounded">
                  Close
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `<Drawer>
  <DrawerTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Left Drawer</button>
  </DrawerTrigger>
  <DrawerContent position="left">
    <DrawerHeader>
      <DrawerTitle>Left Drawer</DrawerTitle>
      <DrawerDescription>This is a drawer that slides in from the left.</DrawerDescription>
    </DrawerHeader>
    <p className="p-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula vitae est vehicula vestibulum.</p>
    <DrawerFooter>
      <DrawerClose asChild>
        <button className="p-2 bg-red-500 text-white rounded">Close</button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    },
    {
      id: "right-drawer",
      title: "Right Drawer",
      description: "A drawer that slides in from the right.",
      component: (
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">
              Open Right Drawer
            </button>
          </DrawerTrigger>
          <DrawerContent position="right">
            <DrawerHeader>
              <DrawerTitle>Right Drawer</DrawerTitle>
              <DrawerDescription>
                This is a drawer that slides in from the right.
              </DrawerDescription>
            </DrawerHeader>
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              ligula vitae est vehicula vestibulum.
            </p>
            <DrawerFooter>
              <DrawerClose asChild>
                <button className="p-2 bg-red-500 text-white rounded">
                  Close
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `<Drawer>
  <DrawerTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Right Drawer</button>
  </DrawerTrigger>
  <DrawerContent position="right">
    <DrawerHeader>
      <DrawerTitle>Right Drawer</DrawerTitle>
      <DrawerDescription>This is a drawer that slides in from the right.</DrawerDescription>
    </DrawerHeader>
    <p className="p-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula vitae est vehicula vestibulum.</p>
    <DrawerFooter>
      <DrawerClose asChild>
        <button className="p-2 bg-red-500 text-white rounded">Close</button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    },
  ],
};
