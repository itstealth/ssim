"use client";
import { useState, useMemo, useEffect } from "react";
// import SEO from "@/components/Seo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrganizationSchema } from "@/components/Schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  BuildingIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const programTabs = [
  { id: "PGDM-BA", name: "PGDM BA" },
  { id: "PGDM-BIFS", name: "PGDM BIFS" },
  { id: "PGDM", name: "PGDM Triple Specialisation" },
];

export default function Internships() {
  const [apiStudentsData, setApiStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("PGDM-BA");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/internships");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiStudentsData(data);
        setError(null);
      } catch (e) {
        console.error("Failed to fetch placement data:", e);
        setError(e.message);
        setApiStudentsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacementData();
  }, []);

  const years = useMemo(
    () =>
      Array.from(
        new Set(apiStudentsData.map((student) => student.year).filter(Boolean))
      ).sort((a, b) => {
        const yearA = parseInt(a, 10) || 0;
        const yearB = parseInt(b, 10) || 0;
        return yearB - yearA;
      }),
    [apiStudentsData]
  );

  useEffect(() => {
    if (years.length > 0 && selectedYear === "") {
      setSelectedYear(years[0].toString());
    }
  }, [years, selectedYear]);

  const companies = useMemo(
    () =>
      Array.from(
        new Set(
          apiStudentsData
            .filter(
              (student) =>
                selectedProgram === "all" ||
                (student.program &&
                  student.program.toLowerCase() === selectedProgram.toLowerCase())
            )
            .map((student) => student.company)
            .filter(Boolean)
        )
      ).sort((a, b) => a.localeCompare(b)),
    [apiStudentsData, selectedProgram]
  );

  const specializations = useMemo(
    () =>
      Array.from(
        new Set(
          apiStudentsData
            .filter(
              (student) =>
                selectedProgram === "all" ||
                (student.program &&
                  student.program.toLowerCase() === selectedProgram.toLowerCase())
            )
            .map((student) => student.majorSpecialization)
            .filter(Boolean)
        )
      ).sort((a, b) => a.localeCompare(b)),
    [apiStudentsData, selectedProgram]
  );

  const filteredStudents = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filtered = apiStudentsData.filter((student) => {
      const searchFilter =
        normalizedSearchTerm === "" ||
        (student.roll &&
          student.roll.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.name &&
          student.name.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.company &&
          student.company.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.program &&
          student.program.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.majorSpecialization &&
          student.majorSpecialization
            .toLowerCase()
            .includes(normalizedSearchTerm)) ||
        (student.year &&
          student.year.toString().includes(normalizedSearchTerm));

      const yearFilter =
        selectedYear === "all" ||
        (student.year && student.year.toString() === selectedYear);
      const programFilter =
        selectedProgram === "all" ||
        (student.program &&
          student.program.toLowerCase() === selectedProgram.toLowerCase());
      const companyFilter =
        selectedCompany === "all" ||
        (student.company && student.company === selectedCompany);
      const specializationFilter =
        selectedSpecialization === "all" ||
        (student.majorSpecialization &&
          student.majorSpecialization === selectedSpecialization);

      return (
        searchFilter &&
        yearFilter &&
        programFilter &&
        companyFilter &&
        specializationFilter
      );
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        aValue = (aValue || "").toString().toLowerCase();
        bValue = (bValue || "").toString().toLowerCase();

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [
    searchTerm,
    selectedYear,
    selectedProgram,
    selectedCompany,
    selectedSpecialization,
    sortConfig,
    apiStudentsData,
  ]);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const clearFilters = () => {
    setSelectedYear(years.length > 0 ? years[0].toString() : "all");
    setSelectedCompany("all");
    setSelectedSpecialization("all");
    setSearchTerm("");
    setSortConfig({ key: "name", direction: "asc" });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig?.key !== columnKey) return null;
    return sortConfig.direction === "asc" ? (
      <ChevronUpIcon className="w-4 h-4 inline-block ml-1" />
    ) : (
      <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />
    );
  };

  return (
    <>
      <OrganizationSchema />
      {/* <SEO
        title="Internship Records"
        description="Discover the internship opportunities and records at Siva Sivani Institute of Management (SSIM). Our students gain valuable industry experience with top companies."
        keywords="SSIM internships, internship records, student internships, corporate internships, summer internships"
        canonicalUrl="https://ssim.ac.in/placement/internships"
      /> */}
      <div className="min-h-fit bg-gradient-to-b from-background to-muted/20 pb-16">
        <div className="container max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          <div className="text-center space-y-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Student Internships
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our students' success stories and career achievements.
              Filter and sort to find specific placement details.
            </p>
          </div>

          {/* Program Tabs */}
          <div className="w-full">
            <Tabs
              value={selectedProgram}
              onValueChange={(val) => {
                setSelectedProgram(val);
                setSelectedSpecialization("all");
                setSelectedCompany("all");
              }}
              className="w-full"
            >
              <TabsList className="w-full flex flex-wrap text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 justify-center gap-2 p-1 h-auto rounded-lg">
                {programTabs.map((program) => (
                  <TabsTrigger
                    key={program.id}
                    value={program.id}
                    className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground transition-all duration-300 font-medium"
                  >
                    {program.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="rounded-sm border bg-card p-5 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Filter Internships</h2>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="grid grid-cols-1 sm:flex w-full sm:w-auto sm:flex-row sm:flex-wrap gap-3 items-center">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full sm:w-[140px] bg-background">
                    <GraduationCapIcon className="w-4 h-4 mr-2 text-red-600 text-muted-foreground" />
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {companies.length > 0 && (
                  <Select
                    value={selectedCompany}
                    onValueChange={setSelectedCompany}
                  >
                    <SelectTrigger className="w-full sm:w-[180px] bg-background">
                      <BuildingIcon className="w-4 h-4 mr-2 text-red-600 text-muted-foreground" />
                      <SelectValue placeholder="Company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Companies</SelectItem>
                      {companies.map((company) => (
                        <SelectItem key={company} value={company}>
                          {company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {specializations.length > 0 && (
                  <Select
                    value={selectedSpecialization}
                    onValueChange={setSelectedSpecialization}
                  >
                    <SelectTrigger className="w-full sm:w-[180px] bg-background">
                      <BriefcaseIcon className="w-4 h-4 mr-2 text-red-600 text-muted-foreground" />
                      <SelectValue placeholder="Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specializations</SelectItem>
                      {specializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="flex gap-2 w-full md:max-w-md">
                <Input
                  type="text"
                  placeholder="Search students, companies, roll no..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-background"
                />
              </div>
            </div>

            {(selectedYear !== "all" ||
              selectedCompany !== "all" ||
              selectedSpecialization !== "all" ||
              searchTerm.trim() !== "") && (
              <div className="flex flex-wrap items-center gap-2 pt-4">
                <span className="text-sm text-muted-foreground">
                  Active filters:
                </span>
                {selectedYear !== "all" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Year: {selectedYear}
                  </Badge>
                )}
                {selectedCompany !== "all" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Company: {selectedCompany}
                  </Badge>
                )}
                {selectedSpecialization !== "all" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Specialization: {selectedSpecialization}
                  </Badge>
                )}
                {searchTerm.trim() !== "" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Search: {searchTerm.trim()}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  size="sm"
                  className="h-7 px-3"
                >
                  <XIcon className="w-4 h-4 mr-1" />
                  Clear all
                </Button>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col">
            <Table className="text-base relative">
              <TableHeader className="bg-gray-50 sticky top-0 z-10">
                <TableRow>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                    onClick={() => handleSort("roll")}
                  >
                    <div className="flex items-center gap-1">
                      Roll No
                      <SortIcon columnKey="roll" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-1">
                      Student Name
                      <SortIcon columnKey="name" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                    onClick={() => handleSort("company")}
                  >
                    <div className="flex items-center gap-1">
                      Internship Company
                      <SortIcon columnKey="company" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                    onClick={() => handleSort("program")}
                  >
                    <div className="flex items-center gap-1">
                      Program
                      <SortIcon columnKey="program" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                    onClick={() => handleSort("majorSpecialization")}
                  >
                    <div className="flex items-center gap-1">
                      Major Specialization
                      <SortIcon columnKey="majorSpecialization" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                      Loading internship records...
                    </TableCell>
                  </TableRow>
                ) : filteredStudents.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32">
                      <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-muted-foreground">
                          No matching records found
                        </p>
                        <Button
                          variant="link"
                          onClick={clearFilters}
                          className="mt-2"
                        >
                          Clear all filters
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredStudents.map((student) => (
                    <TableRow
                      key={student.id}
                      className="hover:bg-muted/50 transition-colors cursor-default"
                    >
                      <TableCell className="whitespace-nowrap font-mono text-sm">
                        {student.roll || "-"}
                      </TableCell>
                      <TableCell className="font-medium">
                        {student.name}
                      </TableCell>
                      <TableCell>{student.company}</TableCell>
                      <TableCell className="whitespace-nowrap">
                        {student.program || "-"}
                      </TableCell>
                      <TableCell>
                        {student.majorSpecialization || "-"}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
