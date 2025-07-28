import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type DataRow = {
  user: string;
  email: string;
  status: string;
};

export function exportAsPDF(data: DataRow[], filename = "dashboard-data.pdf") {
  const doc = new jsPDF();

  autoTable(doc, {
    head: [["User", "Email", "Status"]],
    body: data.map(item => [item.user, item.email, item.status]),
  });

  doc.save(filename);
}
