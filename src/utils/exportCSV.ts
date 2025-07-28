import Papa from "papaparse";
import { saveAs } from "file-saver";

export function exportAsCSV(data: any[], filename = "dashboard-data.csv") {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: "text/csv" });
  saveAs(blob, filename);
}
