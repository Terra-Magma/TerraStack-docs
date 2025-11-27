'use client';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

export default function AdoptionVisual() {
  const data = [
    { year: "Q1 '25", users: 5 },
    { year: "Q2 '25", users: 15 },
    { year: "Q3 '25", users: 30 },
    { year: "Q4 '25", users: 60 },
  ];

  const chartConfig = {
    users: {
      label: 'Adoption',
      color: 'var(--chart-1)',
    },
  } satisfies ChartConfig;

  function GetLatestDataPoint() {
    const latestDataPoint = data[data.length - 1];

    return latestDataPoint.users;
  }

  return (
    <div className="w-full bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]  rounded-lg flex flex-col items-center justify-center">
      <div>
        <h2 className="text-2xl font-semibold text-foreground text-center">Current Adoption</h2>
        <p className="mt-2 text-3xl font-bold text-foreground text-center">{GetLatestDataPoint()} Users</p>
      </div>
      <ChartContainer
        config={chartConfig}
        className="w-full h-full px-4 pt-4"
      >
        <BarChart
          accessibilityLayer
          data={data}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="users"
            fill="var(--color-secondary)"
            radius={8}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
