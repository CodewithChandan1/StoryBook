import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { ComponentCategory } from "../types";
import { Clipboard } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const formCategory: ComponentCategory = {
  id: "form",
  title: "Form",
  icon: Clipboard,
  description: "Form components with validation and error handling.",
  stories: [
    {
      id: "default-form",
      title: "Default Form",
      description: "A basic form with validation using react-hook-form.",
      component: <DefaultFormExample />,
      code: `<DefaultFormExample />`,
    },
    {
      id: "form-with-description",
      title: "Form with Description and Message",
      description: "A form showing how to use descriptions and error messages.",
      component: <FormWithDescriptionExample />,
      code: `<FormWithDescriptionExample />`,
    },
  ],
};

// eslint-disable-next-line react-refresh/only-export-components
function DefaultFormExample() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: unknown) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function FormWithDescriptionExample() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: unknown) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                Your username must be unique and between 3-16 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
