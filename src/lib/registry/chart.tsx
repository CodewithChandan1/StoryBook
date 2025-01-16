import {  ChartContainer, ChartLegend, ChartTooltipContent } from "@/components/ui/chart";
import { ComponentCategory } from "../types";
import { PieChart } from "lucide-react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

export const chartCategory: ComponentCategory = {
  id: "chart",
  title: "Charts",
  icon: PieChart,
  description: "Data visualization components",
  stories: [
    {
      id: "default-chart",
      title: "Default Chart",
      description: "A standard chart component",
      component: (
        <ChartContainer
          config={{
            bar: { color: "#3b82f6" },
          }}
        >
          <BarChart
            data={[
              { name: "Jan", value: 4000 },
              { name: "Feb", value: 3000 },
              { name: "Mar", value: 2000 },
            ]}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegend />} />
            <Bar dataKey="value" fill="var(--color-bar)" />
          </BarChart>
        </ChartContainer>
      ),
      code: `<Chart type="bar" data={{ labels: ['Jan', 'Feb'], datasets: [{ data: [30, 50] }] }} />`,
    },
  ],
};
