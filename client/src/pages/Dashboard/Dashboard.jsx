import { ChartContainer } from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
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
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  return (
    <div className="bg-bg-secondary p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 rounded-lg flex-col shadow-xl flex bg-bg-primary">
          <div className="flex gap-8 justify-between">
            <span>Total Users</span>
            {/* icons */}
          </div>
          <div className="text-xl font-bold">
            4515
          </div>
          <div className="font-light text-gray-700">
            from last month
          </div>
        </div>

        <div className="p-4 rounded-lg b flex-col shadow-xl flex-bg-primary">
          <div className="flex justify-between">
            <span>Total Revenue</span>
            {/* icons */}
          </div>
          <div className="text-xl font-bold">
            4515
          </div>
          <div className="font-light text-gray-700">
            from last month
          </div>
        </div>

        <div className="p-4 rounded-l flex-col shadow-xl flex bg-bg-primary">
          <div className="flex justify-between">
            <span>Active Now</span>
            {/* icons */}
          </div>
          <div className="text-xl font-bold">
            4515
          </div>
          <div className="font-light text-gray-700">
            from last month
          </div>
        </div>

        <div className="p-4 rounded-l flex-col shadow-xl  flex justify-center items-center bg-bg-primary">
          <div className="text-center font-bold text-2xl">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="btn">
                  Actions
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  Actions
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to="/dashboard/addblog/">
                    Add Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Item 2
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Item 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="p-4 rounded-lg col-span-2 bg-bg-primary">
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
        <div className="text-center my-auto font-bold col-span-2 text-5xl">
          Recent Activities
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
