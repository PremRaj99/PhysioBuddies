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
      color: "#60a5fa",
    },
  };
  const chartData = [
    {
      month: "January",
      desktop: 186,
      mobile: 80,
    },
    {
      month: "February",
      desktop: 305,
      mobile: 200,
    },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <div className="bg-bg-secondary p-4">
      <div className="grid grid-cols-2">
        <div className="p-4">
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
                radius={4}
              />
              <Bar
                dataKey="mobile"
                fill="var(--color-mobile)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="">kdajns</div>
      </div>
    </div>
  );
}

export default Dashboard;
