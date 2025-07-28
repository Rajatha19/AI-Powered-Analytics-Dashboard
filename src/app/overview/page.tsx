"use client";

import { useState, useEffect } from "react";
import type { ColumnDef } from "@tanstack/react-table";

import Providers from "@/components/Providers";
import RealtimeMetricCards from "@/components/cards/RealtimeMetricCards"; // real-time updated metric cards
import CustomLineChart from "@/components/charts/LineChart";
import CustomBarChart from "@/components/charts/BarChart";
import CustomPieChart from "@/components/charts/PieChart";
import DataTable from "@/components/tables/DataTable";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SkeletonCard from "@/components/ui/SkeletonCard";
import DateRangeFilter from "@/components/ui/DateRangeFilter";

import { chartData as initialChartData } from "@/data/mockData";

// Pie chart fixed data
const pieData = [
  { name: "Social", value: 400 },
  { name: "Search", value: 300 },
  { name: "Referral", value: 300 },
];

type UserTableRow = {
  user: string;
  email: string;
  status: string;
};

const columns: ColumnDef<UserTableRow>[] = [
  { header: "User", accessorKey: "user" },
  { header: "Email", accessorKey: "email" },
  { header: "Status", accessorKey: "status" },
];

// Static table data
const tableData: UserTableRow[] = [
  { user: "Alice", email: "alice@example.com", status: "Active" },
  { user: "Bob", email: "bob@example.com", status: "Inactive" },
  { user: "Charlie", email: "charlie@example.com", status: "Active" },
];

export default function OverviewPage() {
  const [loading, setLoading] = useState(true);
  const [filteredChartData, setFilteredChartData] = useState(initialChartData);
  const [filteredTableData] = useState(tableData); // removed unused setter

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Filter chart data according to date range from filter component
  function handleDateRangeChange(selection: { startDate: Date; endDate: Date }) {
    if (!selection.startDate || !selection.endDate) return;

    const filteredCharts = initialChartData.filter((item) => {
      const date = new Date(item.date);
      return date >= selection.startDate && date <= selection.endDate;
    });
    setFilteredChartData(filteredCharts);

    // You may filter table data similarly, if you have dates in table rows
  }

  return (
    <Providers>
      <main className="p-6 space-y-8 max-w-screen-xl mx-auto">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">ADmyBRAND Insights Dashboard</h1>
          <ThemeToggle />
        </header>

        <DateRangeFilter onChange={handleDateRangeChange} />

        {loading ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </section>
        ) : (
          <RealtimeMetricCards />
        )}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <CustomLineChart data={filteredChartData} />
              <CustomBarChart data={filteredChartData} />
              <CustomPieChart data={pieData} />
            </>
          )}
        </section>

        <section>
          <div className="flex justify-end gap-4 mb-2">
            <button
              className="btn"
              onClick={() =>
                import("@/utils/exportCSV").then((mod) => mod.exportAsCSV(tableData))
              }
            >
              Export CSV
            </button>
            <button
              className="btn"
              onClick={() =>
                import("@/utils/exportPDF").then((mod) => mod.exportAsPDF(tableData))
              }
            >
              Export PDF
            </button>
          </div>
          <DataTable columns={columns} data={filteredTableData} />
        </section>
      </main>
    </Providers>
  );
}
