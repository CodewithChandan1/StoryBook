import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { ComponentCategory } from "../types";
import { Table2 } from "lucide-react";

export const tableCategory: ComponentCategory = {
  id: "table",
  title: "Table",
  icon: Table2,
  description: "A flexible and accessible table component.",
  stories: [
    {
      id: "default-table",
      title: "Default Table",
      description: "A basic table with header, body, and footer.",
      component: (
        <Table>
          <TableCaption>A simple table example</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Header 1</TableHead>
              <TableHead>Header 2</TableHead>
              <TableHead>Header 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Row 1, Cell 1</TableCell>
              <TableCell>Row 1, Cell 2</TableCell>
              <TableCell>Row 1, Cell 3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 2, Cell 1</TableCell>
              <TableCell>Row 2, Cell 2</TableCell>
              <TableCell>Row 2, Cell 3</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Footer Content</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ),
      code: `<Table>
  <TableCaption>A simple table example</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
      <TableHead>Header 3</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Row 1, Cell 1</TableCell>
      <TableCell>Row 1, Cell 2</TableCell>
      <TableCell>Row 1, Cell 3</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Row 2, Cell 1</TableCell>
      <TableCell>Row 2, Cell 2</TableCell>
      <TableCell>Row 2, Cell 3</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Footer Content</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
    },
  ],
};
