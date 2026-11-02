import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EntranceScholarships from "@/app/admissions/EntranceScholarships";

const academicAwards = [
  { rank: "Rank 1", term1: "₹30,000", term2: "₹30,000", term3: "₹30,000" },
  { rank: "Rank 2", term1: "₹20,000", term2: "₹20,000", term3: "₹20,000" },
  { rank: "Rank 3", term1: "₹10,000", term2: "₹10,000", term3: "₹10,000" },
];

export default function Scholarships() {
  return (
    <div className="bg-white">
      <EntranceScholarships />
      <section className="px-4 pb-12" aria-labelledby="academic-excellence-scholarships">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden border-slate-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
              <CardTitle id="academic-excellence-scholarships" className="text-2xl font-bold">
                Academic Excellence Scholarships
              </CardTitle>
              <p className="text-white/90">Term-rank awards shown in the SSIM 2027–29 brochure.</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-indigo-50">
                      <TableHead>Term rank</TableHead>
                      <TableHead>Term 1</TableHead>
                      <TableHead>Term 2</TableHead>
                      <TableHead>Term 3</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {academicAwards.map((award) => (
                      <TableRow key={award.rank}>
                        <TableCell className="font-semibold">{award.rank}</TableCell>
                        <TableCell>{award.term1}</TableCell>
                        <TableCell>{award.term2}</TableCell>
                        <TableCell>{award.term3}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="px-5 py-4 text-sm text-slate-600">
                This is an illustrative, non-exhaustive list. Scholarship awards are subject to institute policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
