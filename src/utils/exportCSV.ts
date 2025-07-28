import Papa from "papaparse";
import { saveAs } from "file-saver";

type DataRow = {
  user: string;
  email: string;
  status: string;
};

export function exportAsCSV(data: DataRow[], filename = "dashboard-data.csv") {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: "text/csv" });
  saveAs(blob, filename);
}
