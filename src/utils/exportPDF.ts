import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportAsPDF(data: any[], filename = "dashboard-data.pdf") {
  const doc = new jsPDF();

  autoTable(doc, {
    head: [["User", "Email", "Status"]],
    body: data.map((item) => [item.user, item.email, item.status]),
  });

  doc.save(filename);
}
