import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Dashboard() {
  return (
    <div className="bg-bg-secondary p-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          Open
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            Team
          </DropdownMenuItem>
          <DropdownMenuItem>
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dashboard;
