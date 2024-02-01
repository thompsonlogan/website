import Image from "next/image"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Search } from "@/app/Dashboard/components/search"
import { UserNav } from "@/app/Dashboard/components/user-nav"
import { MainNav } from "@/app/Dashboard/components/main-nav"
import { Overview } from "@/app/Dashboard/components/overview"
import { DataTable } from "@/components/data-table/data-table"
import { RecentSales } from "@/app/Dashboard/components/recent-sales"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Exercise, columns } from "@/app/Dashboard/components/dashboard-columns"
import { CalendarDateRangePicker } from "@/app/Dashboard/components/date-range-picker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

function getData1(): Exercise[]{
  return [
      {
          day: "Full Body 1",             
          exercise: "Back Squat",         
          warmup_sets: 4,      
          working_sets: 1,     
          reps: 2,             
          load: 320,             
          percent: 87.5,          
          rpe: 7,              
          rest_time: 4,        
          actual: 320,           
          notes: "",   
      },
      {
          day: "",             
          exercise: "Front squat (or box squat)",         
          warmup_sets: 0,      
          working_sets: 3,     
          reps: 8,             
          load: 0,             
          percent: 0,          
          rpe: 7,              
          rest_time: 4,        
          actual: 135,           
          notes: "",            
      },
      {
          day: "",             
          exercise: "Barbell bench press",         
          warmup_sets: 4,      
          working_sets: 1,     
          reps: 4,             
          load: 215,             
          percent: 85,          
          rpe: 8.5,              
          rest_time: 4,        
          actual: 215,           
          notes: "",            
      },
      {
          day: "",             
          exercise: "Barbell bench press",        
          warmup_sets: 0,      
          working_sets: 2,     
          reps: 6,             
          load: 205,             
          percent: 80,          
          rpe: 7,              
          rest_time: 2,        
          actual: 205,           
          notes: "",           
      },
      {
          day: "",             
          exercise: "Weighted pull-up",         
          warmup_sets: 1,      
          working_sets: 3,     
          reps: 6,             
          load: 0,             
          percent: 0,          
          rpe: 8,              
          rest_time: 2,        
          actual: 180,           
          notes: "",            
      },
      {
          day: "",             
          exercise: "Glute-ham raise (or Nordic ham curl)",         
          warmup_sets: 1,      
          working_sets: 3,     
          reps: 8,             
          load: 0,             
          percent: 0,          
          rpe: 7,              
          rest_time: 2,        
          actual: 180,           
          notes: "",           
      },
      {
          day: "",             
          exercise: "Seated face pull",         
          warmup_sets: 0,      
          working_sets: 4,     
          reps: 20,             
          load: 0,             
          percent: 0,          
          rpe: 9,              
          rest_time: 2,        
          actual: 50,           
          notes: "",           
      }
  ]
}

export function DashboardForm() {
  return (
    <>
      <div className="md:hidden">
        <Image src="/examples/dashboard-light.png" width={1280} height={866} alt="Dashboard" className="block dark:hidden"/>
        <Image src="/examples/dashboard-dark.png" width={1280} height={866} alt="Dashboard" className="hidden dark:block"/>
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/*<Search />*/}
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>Analytics</TabsTrigger>
              <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
              <TabsTrigger value="notifications" disabled>Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <div className="col-span-3">
                  <DataTable columns={columns} data={getData1()} />
                </div>
                {/*<Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataTable columns={columns} data={getData1()} />
                    {/*<RecentSales />
                  </CardContent>
                </Card>*/}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}