import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentCategory } from "../types";
import { Bell } from "lucide-react";

export const alertCategory: ComponentCategory = {
  id: "alerts",
  title: "Alerts",
  icon: Bell,
  description: "Display important messages to users",
  stories: [
    {
      id: "default-alert",
      title: "Default Alert",
      description: "A standard alert component",
      component: (
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      ),
      code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
      variants: [
        {
          id: "destructive-alert",
          title: "Destructive Alert",
          description: "An alert for destructive actions",
          component: (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
        },
      ],
    },
  ],
};