import { ChartContainer } from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bar,
  BarChart,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "bg-bg-primary",
    },
  };
  const chartData = [
    {
      month: "January",
      desktop: 186,
    },
    {
      month: "February",
      desktop: 305,
    },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73},
    { month: "May", desktop: 209},
    { month: "June", desktop: 214},
  ];

  return (
    <div className="bg-bg-secondary p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-bg-primary">
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} />
              <Bar
                dataKey="desktop"
                fill="var(--color-desktop)"
                radius={10}
              />
              <Bar
                dataKey="mobile"
                fill="var(--color-mobile)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </div>
        <h2 className="text-center my-auto font-bold text-5xl">
          Recent Activity
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;
