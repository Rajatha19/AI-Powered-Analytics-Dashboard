"use client";
import { useState, useEffect } from "react";
import MetricCard from "./MetricCard";
import { metrics as initialMetrics } from "@/data/mockData";

export default function RealtimeMetricCards() {
  const [metrics, setMetrics] = useState(initialMetrics);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev =>
        prev.map(m => ({
          ...m,
          value: Math.max(0, m.value + Math.round(Math.random() * 40 - 20)),
        }))
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map(({ title, value, diff, isPositive }) => (
        <MetricCard
          key={title}
          title={title}
          value={value}
          diff={diff}
          isPositive={isPositive}
        />
      ))}
    </section>
  );
}
