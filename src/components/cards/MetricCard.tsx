// components/cards/MetricCard.tsx
import CountUp from "react-countup";

type MetricCardProps = {
  title: string;
  value: number | React.ReactNode;
  diff: string;
  isPositive: boolean;
};

export default function MetricCard({ title, value, diff, isPositive }: MetricCardProps) {
  return (
    <div className="p-4 glassmorphism shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-lg">
      <h3 className="text-gray-500 font-semibold">{title}</h3>
      <div className="flex items-center space-x-2 mt-2">
        <p className="text-3xl font-bold">
          {typeof value === "number" ? <CountUp end={value} duration={1} separator="," /> : value}
        </p>
        <span className={isPositive ? "text-green-500" : "text-red-500"}>{diff}</span>
      </div>
    </div>
  );
}
