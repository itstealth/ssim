import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const meritTiers = [
  { tier: "Tier I", catXat: "80 and above", cmat: "Rank 1–1,000", matAtma: "775 and above", icet: "Rank 1–200", award: "₹4,00,000" },
  { tier: "Tier II", catXat: "70–79", cmat: "Rank 1,001–2,000", matAtma: "750–774", icet: "Rank 201–400", award: "₹3,00,000" },
  { tier: "Tier III", catXat: "60–69", cmat: "Rank 2,001–3,000", matAtma: "700–749", icet: "Rank 401–600", award: "₹2,00,000" },
  { tier: "Tier IV", catXat: "50–59", cmat: "Rank 3,001–4,000", matAtma: "650–699", icet: "Rank 601–800", award: "₹1,00,000" },
  { tier: "Tier V", catXat: "45–49", cmat: "Rank 4,001–5,000", matAtma: "600–649", icet: "Rank 801–1,000", award: "₹50,000" },
];

export default function EntranceScholarships() {
  return (
    <section className="py-10 px-4" aria-labelledby="admission-merit-scholarships">
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden border-slate-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
            <CardTitle id="admission-merit-scholarships" className="text-2xl font-bold">
              Admission Merit Scholarships · Batch 2027–29
            </CardTitle>
            <p className="text-white/90">Scholarship tiers are based on the qualifying entrance exam score or rank.</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead>Tier</TableHead>
                    <TableHead>CAT / XAT percentile</TableHead>
                    <TableHead>CMAT rank</TableHead>
                    <TableHead>MAT / ATMA score</TableHead>
                    <TableHead>ICET rank</TableHead>
                    <TableHead className="text-right">Scholarship</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {meritTiers.map((row) => (
                    <TableRow key={row.tier}>
                      <TableCell className="font-semibold">{row.tier}</TableCell>
                      <TableCell>{row.catXat}</TableCell>
                      <TableCell>{row.cmat}</TableCell>
                      <TableCell>{row.matAtma}</TableCell>
                      <TableCell>{row.icet}</TableCell>
                      <TableCell className="text-right font-bold text-purple-700">{row.award}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="px-5 py-4 text-sm text-slate-600">
              CAT/XAT figures are percentiles; MAT/ATMA figures are scores; CMAT and ICET figures are ranks. Amounts are in INR. Final eligibility is subject to verification of official scorecards and institute policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
