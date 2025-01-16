import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { ComponentCategory } from "../types";
import { MessageSquare } from "lucide-react";

export const dialogCategory: ComponentCategory = {
  id: "dialog",
  title: "Dialog",
  icon: MessageSquare,
  description: "A customizable dialog component with overlays and transitions.",
  stories: [
    {
      id: "default-dialog",
      title: "Default Dialog",
      description: "A basic dialog with a trigger, content, and close button.",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <button className="p-2 bg-gray-200 rounded">Open Dialog</button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a basic dialog component example.
              </DialogDescription>
            </DialogHeader>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              ligula vitae est vehicula vestibulum.
            </p>
            <DialogFooter>
              <DialogClose asChild>
                <button className="p-2 bg-red-500 text-white rounded">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <button className="p-2 bg-gray-200 rounded">Open Dialog</button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>This is a basic dialog component example.</DialogDescription>
    </DialogHeader>
    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula vitae est vehicula vestibulum.</p>
    <DialogFooter>
      <DialogClose asChild>
        <button className="p-2 bg-red-500 text-white rounded">Close</button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
    {
      id: "dialog-with-custom-trigger",
      title: "Dialog with Custom Trigger",
      description: "A dialog component with a custom trigger button.",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <button className="p-2 bg-blue-500 text-white rounded">
              Open Custom Dialog
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Custom Trigger Dialog</DialogTitle>
              <DialogDescription>
                This dialog is opened by a custom trigger button.
              </DialogDescription>
            </DialogHeader>
            <p className="text-sm">
              You can use any element as the trigger for the dialog.
            </p>
            <DialogFooter>
              <DialogClose asChild>
                <button className="p-2 bg-gray-500 text-white rounded">
                  Dismiss
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <button className="p-2 bg-blue-500 text-white rounded">Open Custom Dialog</button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Trigger Dialog</DialogTitle>
      <DialogDescription>This dialog is opened by a custom trigger button.</DialogDescription>
    </DialogHeader>
    <p className="text-sm">You can use any element as the trigger for the dialog.</p>
    <DialogFooter>
      <DialogClose asChild>
        <button className="p-2 bg-gray-500 text-white rounded">Dismiss</button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
  ],
};
