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
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LinkedinIcon,
  DownloadIcon,
  BuildingIcon,
  GraduationCapIcon,
  MapPinIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrendingUpIcon,
  UsersIcon,
  Building2Icon as BuildingOffice2Icon,
  Rocket,
  IndianRupee,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "@/components/wrappers/Heading";

const programTabs = [
  { id: "PGDM", name: "PGDM Triple Specialisation" },
  { id: "PGDM-BIFS", name: "PGDM BIFS" },
  { id: "PGDM-BA", name: "PGDM BA" },
];

export default function PlacementSection() {
  const [apiStudentsData, setApiStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("PGDM-BA");
  const [selectedDesignation, setSelectedDesignation] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedYear, selectedProgram, selectedDesignation, selectedCompany, sortConfig]);

  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/placements");
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
      Array.from(new Set(apiStudentsData.map((student) => student.year))).sort(
        (a, b) => {
          const yearA = parseInt(a, 10) || 0;
          const yearB = parseInt(b, 10) || 0;
          return yearB - yearA;
        }
      ),
    [apiStudentsData]
  );

  useEffect(() => {
    if (years.length > 0 && selectedYear === "") {
      setSelectedYear(years[0].toString());
    }
  }, [years, selectedYear]);

  const designations = useMemo(
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
            .map((student) => student.designation)
            .filter(Boolean)
        )
      ).sort((a, b) => a.localeCompare(b)),
    [apiStudentsData, selectedProgram]
  );

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

  const stats = useMemo(() => {
    if (!apiStudentsData || apiStudentsData.length === 0) {
      return {
        totalPlacements: 0,
        averageSalary: "7.25LPA",
        companiesHiring: 0,
        placementRate: "0%",
      };
    }
    const totalPlacements = apiStudentsData.length;
    const totalSalary = apiStudentsData.reduce(
      (acc, curr) =>
        acc + Number(String(curr.salary).replace(/[^\d.-]/g, "") || 0),
      0
    );
    const averageSalary = totalPlacements
      ? `${(totalSalary / totalPlacements)
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${
          totalPlacements > 0 && totalSalary > 0 ? "" : "K"
        }`
      : "7.25LPA";
    const companiesHiring = new Set(apiStudentsData.map((s) => s.company)).size;
    const placementRate = "92%";

    return {
      totalPlacements,
      averageSalary,
      companiesHiring,
      placementRate,
    };
  }, [apiStudentsData]);

  const filteredStudents = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filtered = apiStudentsData.filter((student) => {
      const searchFilter =
        normalizedSearchTerm === "" ||
        (student.roll &&
          student.roll.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.name &&
          student.name.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.email &&
          student.email.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.company &&
          student.company.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.program &&
          student.program.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.designation &&
          student.designation.toLowerCase().includes(normalizedSearchTerm)) ||
        (student.year &&
          student.year.toString().includes(normalizedSearchTerm)) ||
        (student.salary &&
          String(student.salary)
            .replace(/[^\d.-]/g, "")
            .includes(normalizedSearchTerm));

      const yearFilter =
        selectedYear === "all" ||
        (student.year && student.year.toString() === selectedYear);
      const programFilter =
        selectedProgram === "all" ||
        (student.program &&
          student.program.toLowerCase() === selectedProgram.toLowerCase());
      const DesignationFilter =
        selectedDesignation === "all" ||
        (student.designation && student.designation === selectedDesignation);
      const companyFilter =
        selectedCompany === "all" ||
        (student.company && student.company === selectedCompany);

      return searchFilter && yearFilter && programFilter && DesignationFilter && companyFilter;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === "salary") {
          aValue = parseInt(String(aValue).replace(/[^\d.-]/g, "") || 0, 10);
          bValue = parseInt(String(bValue).replace(/[^\d.-]/g, "") || 0, 10);
        } else if (sortConfig.key === "year") {
          aValue = Number(aValue) || 0;
          bValue = Number(bValue) || 0;
        } else {
          aValue = (aValue || "").toString().toLowerCase();
          bValue = (bValue || "").toString().toLowerCase();
        }

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
    selectedDesignation,
    selectedCompany,
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
    setSelectedYear(years.length > 0 ? years[0].toString() : "");
    setSelectedDesignation("all");
    setSelectedCompany("all");
    setSearchTerm("");
    // Keep name A-Z sort always active
    setSortConfig({ key: "name", direction: "asc" });
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);
  
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredStudents.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredStudents, currentPage]);

  const SortIcon = ({ columnKey }) => {
    if (sortConfig?.key !== columnKey) return null;
    return sortConfig.direction === "asc" ? (
      <ChevronUpIcon className="w-4 h-4 inline-block ml-1" />
    ) : (
      <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />
    );
  };

  const getStatsForYear = (year) => {
    const statsMap = {
      "2021 - 23": {
        highest: "9.5 LPA",
        average: "5.21 LPA",
        placed: "96.29%",
        companies: "100+",
      },
      "2022 - 24": {
        highest: "10.92 LPA",
        average: "4.87 LPA",
        placed: "89.26%",
        companies: "153+",
      },
      "2023 - 25": {
        highest: "10.7 LPA",
        average: "5.23 LPA",
        placed: "97.54%",
        companies: "172+",
      },
      "2024 - 26": {
        highest: "12 LPA",
        average: "6.55 LPA",
        placed: "98.74%",
        companies: "190+",
      },
      "all": {
        highest: "12.7 LPA",
        average: "7.25 LPA",
        placed: "98.74%",
        companies: "180+",
      },
    };
    return statsMap[year] || statsMap["all"];
  };

  const currentStats = getStatsForYear(selectedYear);

  return (
    <>
      <OrganizationSchema />
      {/* <SEO
        title="Placement Records"
        description="Explore the placement records of Siva Sivani Institute of Management (SSIM). View our students' success stories, top recruiters, and salary statistics."
        keywords="SSIM placements, placement records, job placements, top recruiters, management placements"
        canonicalUrl="https://ssim.ac.in/placement/records"
      /> */}
      <div className="min-h-fit bg-gradient-to-b from-background to-muted/20 pb-16">
        <div className="container max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          <div className="text-center space-y-4 py-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Student Placements
            </h2>
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
                setSelectedDesignation("all");
                setSelectedCompany("all");
                setCurrentPage(1);
              }}
              className="w-full"
            >
              <TabsList className="w-full flex flex-wrap text-navy bg-gradient-to-r from-purple-200 via-purple-50 to-purple-200 justify-center gap-2 p-1 h-auto rounded-lg">
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
            <h2 className="text-lg font-semibold mb-4">Filter Placements</h2>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="grid grid-cols-1 sm:flex w-full sm:w-auto sm:flex-row sm:flex-wrap gap-3 items-center">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full sm:w-[130px] bg-background">
                    <GraduationCapIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
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

                <Select
                  value={selectedDesignation}
                  onValueChange={setSelectedDesignation}
                >
                  <SelectTrigger className="w-full sm:w-[200px] bg-background">
                    <BuildingIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
                    <SelectValue placeholder="Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All designations</SelectItem>
                    {designations.map((designation) => (
                      <SelectItem key={designation} value={designation}>
                        {designation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedCompany}
                  onValueChange={setSelectedCompany}
                >
                  <SelectTrigger className="w-full sm:w-[160px] bg-background">
                    <BuildingIcon className="w-4 h-4 mr-2 text-red-600  text-muted-foreground" />
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
              </div>

              <div className="flex gap-2 w-full md:max-w-md">
                <Input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-background"
                />
              </div>
            </div>

            {(selectedYear !== "all" ||
              selectedDesignation !== "all" ||
              selectedCompany !== "all" ||
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
                {selectedDesignation !== "all" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Designation: {selectedDesignation}
                  </Badge>
                )}
                {selectedCompany !== "all" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Company: {selectedCompany}
                  </Badge>
                )}
                {searchTerm.trim() !== "" && (
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    Search: {searchTerm.trim()}
                  </Badge>
                )}
                {(selectedYear !== "all" ||
                  selectedDesignation !== "all" ||
                  selectedCompany !== "all" ||
                  searchTerm.trim() !== "") && (
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    size="sm"
                    className="h-7 px-3"
                  >
                    <XIcon className="w-4 h-4 mr-1" />
                    Clear all
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
              <CardHeader className="pb-2 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IndianRupee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-red-600">
                    {currentStats.highest}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Highest Salary
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
              <CardHeader className="pb-2 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUpIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-red-600">
                    {currentStats.average}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Average Salary
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
              <CardHeader className="pb-2 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-red-600">
                    {currentStats.placed}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Students Placed
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
              <CardHeader className="pb-2 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BuildingOffice2Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-red-600">
                    {currentStats.companies}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Companies Hiring
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            {/* <Card className="group hover:shadow-lg hover:translate-y-[-10px] transition-all duration-200 hover:border-primary/20">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-mainBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PercentIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-red-600">
                        {stats.placementRate}
                      </CardTitle>
                      <CardDescription className="text-base">
                        Placement Rate
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card> */}
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
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-1">
                      Student Name
                      <SortIcon columnKey="name" />
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
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("company")}
                  >
                    <div className="flex items-center gap-1">
                      Placement Company
                      <SortIcon columnKey="company" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleSort("designation")}
                  >
                    <div className="flex items-center gap-1">
                      Designation/Role
                      <SortIcon columnKey="designation" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStudents.length === 0 ? (
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
                  paginatedStudents.map((student) => (
                    <TableRow
                      key={student.id}
                      className="hover:bg-muted/50 transition-colors cursor-default"
                    >
                      <TableCell className="whitespace-nowrap">{student.roll || "-"}</TableCell>
                      <TableCell className="font-medium">
                        {student.name}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {student.program || "-"}
                      </TableCell>
                      <TableCell>{student.company}</TableCell>
                      <TableCell>{student.designation || "-"}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50/50">
                <div className="text-sm text-muted-foreground">
                  Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, filteredStudents.length)} of {filteredStudents.length} entries
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeftIcon className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  <div className="flex items-center gap-1 text-sm font-medium px-2">
                    Page {currentPage} of {totalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
