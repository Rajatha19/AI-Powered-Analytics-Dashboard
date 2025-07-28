// components/charts/BarChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type BarChartProps = {
  data: { date: string; conversions: number; users: number }[];
};

export default function CustomBarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="conversions" fill="#ef4444" />
        <Bar dataKey="users" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
