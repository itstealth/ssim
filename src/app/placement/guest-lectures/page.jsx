"use client";
import { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  BuildingIcon,
  GraduationCapIcon,
  CalendarIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  SearchIcon,
  UsersIcon,
  BookOpenIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function parseDateToTime(dateStr) {
  if (!dateStr) return 0;
  const str = String(dateStr).trim();
  const parts = str.split("/");
  if (parts.length === 3) {
    const month = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) return d.getTime();
  }
  const d = new Date(str);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

function formatDateDisplay(dateStr) {
  if (!dateStr || String(dateStr).trim() === "") return "—";
  const str = String(dateStr).trim();
  const parts = str.split("/");
  if (parts.length === 3) {
    const month = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }
  }
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
  return str;
}

export default function GuestLectures() {
  const [apiGuestsData, setApiGuestsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDesignation, setSelectedDesignation] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    const fetchGuestLectureData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/guest-lectures");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiGuestsData(Array.isArray(data) ? data : []);
        setError(null);
      } catch (e) {
        console.error("Failed to fetch guest lecture data:", e);
        setError(e.message);
        setApiGuestsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGuestLectureData();
  }, []);

  const years = useMemo(
    () =>
      Array.from(
        new Set(apiGuestsData.map((guest) => guest.year).filter(Boolean))
      ).sort((a, b) => {
        const yearA = parseInt(a, 10) || 0;
        const yearB = parseInt(b, 10) || 0;
        return yearB - yearA;
      }),
    [apiGuestsData]
  );

  const designations = useMemo(
    () =>
      Array.from(
        new Set(
          apiGuestsData
            .map((guest) => guest.designation)
            .filter((d) => d && d !== "________" && d.trim() !== "")
        )
      ).sort(),
    [apiGuestsData]
  );

  const companies = useMemo(
    () =>
      Array.from(
        new Set(
          apiGuestsData
            .map((guest) => guest.company)
            .filter((c) => c && c !== "________" && c !== "_____" && c.trim() !== "")
        )
      ).sort(),
    [apiGuestsData]
  );

  const filteredGuests = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filtered = apiGuestsData.filter((guest) => {
      const searchFilter =
        normalizedSearchTerm === "" ||
        (guest.date &&
          guest.date.toLowerCase().includes(normalizedSearchTerm)) ||
        (guest.name &&
          guest.name.toLowerCase().includes(normalizedSearchTerm)) ||
        (guest.company &&
          guest.company.toLowerCase().includes(normalizedSearchTerm)) ||
        (guest.designation &&
          guest.designation.toLowerCase().includes(normalizedSearchTerm)) ||
        (guest.topic &&
          guest.topic.toLowerCase().includes(normalizedSearchTerm)) ||
        (guest.year &&
          guest.year.toString().toLowerCase().includes(normalizedSearchTerm));

      const yearFilter =
        selectedYear === "all" ||
        (guest.year && guest.year.toString() === selectedYear);
      const designationFilter =
        selectedDesignation === "all" ||
        (guest.designation && guest.designation === selectedDesignation);
      const companyFilter =
        selectedCompany === "all" ||
        (guest.company && guest.company === selectedCompany);

      return searchFilter && yearFilter && designationFilter && companyFilter;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === "date") {
          aValue = parseDateToTime(aValue);
          bValue = parseDateToTime(bValue);
        } else if (sortConfig.key === "year") {
          aValue = Number(String(aValue).replace(/[^\d]/g, "")) || 0;
          bValue = Number(String(bValue).replace(/[^\d]/g, "")) || 0;
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
    selectedDesignation,
    selectedCompany,
    sortConfig,
    apiGuestsData,
  ]);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedDesignation("all");
    setSelectedCompany("all");
    setSearchTerm("");
    setSortConfig(null);
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
    <div className="min-h-fit bg-gradient-to-b from-background to-muted/20 pb-16 font-sans">
      <div className="container max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Guest Lectures
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry experts and leaders share their knowledge through our Guest Lecture series, providing valuable insights and networking opportunities for our students.
          </p>
        </div>

        {/* Filter Section */}
        <div className="rounded-xl border bg-card p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-foreground">
              <SearchIcon className="w-4 h-4 text-primary" />
              Filter Guest Lectures
            </h2>
            <span className="text-xs text-muted-foreground">
              Showing {filteredGuests.length} of {apiGuestsData.length} records
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="grid grid-cols-1 sm:flex w-full sm:w-auto sm:flex-row sm:flex-wrap gap-3 items-center">
              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full sm:w-[150px] bg-background">
                  <GraduationCapIcon className="w-4 h-4 mr-2 text-primary" />
                  <SelectValue placeholder="Academic Year" />
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

              {/* Designation Filter */}
              <Select
                value={selectedDesignation}
                onValueChange={setSelectedDesignation}
              >
                <SelectTrigger className="w-full sm:w-[200px] bg-background">
                  <UsersIcon className="w-4 h-4 mr-2 text-primary" />
                  <SelectValue placeholder="Designation" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="all">All Designations</SelectItem>
                  {designations.map((designation) => (
                    <SelectItem key={designation} value={designation}>
                      {designation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Company Filter */}
              <Select
                value={selectedCompany}
                onValueChange={setSelectedCompany}
              >
                <SelectTrigger className="w-full sm:w-[180px] bg-background">
                  <BuildingIcon className="w-4 h-4 mr-2 text-primary" />
                  <SelectValue placeholder="Organization" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="all">All Organizations</SelectItem>
                  {companies.map((company) => (
                    <SelectItem key={company} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Input */}
            <div className="flex gap-2 w-full md:max-w-md">
              <div className="relative w-full">
                <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, topic, company, date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 bg-background"
                />
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedYear !== "all" ||
            selectedDesignation !== "all" ||
            selectedCompany !== "all" ||
            searchTerm.trim() !== "") && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
              <span className="text-xs font-medium text-muted-foreground">
                Active filters:
              </span>
              {selectedYear !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80 text-xs">
                  Year: {selectedYear}
                </Badge>
              )}
              {selectedDesignation !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80 text-xs">
                  Designation: {selectedDesignation}
                </Badge>
              )}
              {selectedCompany !== "all" && (
                <Badge variant="secondary" className="hover:bg-secondary/80 text-xs">
                  Organization: {selectedCompany}
                </Badge>
              )}
              {searchTerm.trim() !== "" && (
                <Badge variant="secondary" className="hover:bg-secondary/80 text-xs">
                  Search: {searchTerm.trim()}
                </Badge>
              )}
              <Button
                variant="ghost"
                onClick={clearFilters}
                size="sm"
                className="h-7 px-3 text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <XIcon className="w-3.5 h-3.5 mr-1" />
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Table Section */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
          <div className="overflow-x-auto max-h-[calc(100vh-220px)] overflow-y-auto">
            <Table className="text-sm relative">
              <TableHeader className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200">
                <TableRow>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap w-[130px]"
                    onClick={() => handleSort("date")}
                  >
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                      <CalendarIcon className="w-3.5 h-3.5 text-slate-500" />
                      Date
                      <SortIcon columnKey="date" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors whitespace-nowrap min-w-[200px]"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                      <UsersIcon className="w-3.5 h-3.5 text-slate-500" />
                      Guest Name
                      <SortIcon columnKey="name" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors min-w-[220px]"
                    onClick={() => handleSort("designation")}
                  >
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                      Designation
                      <SortIcon columnKey="designation" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors min-w-[220px]"
                    onClick={() => handleSort("company")}
                  >
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                      <BuildingIcon className="w-3.5 h-3.5 text-slate-500" />
                      Organization
                      <SortIcon columnKey="company" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-primary transition-colors min-w-[280px]"
                    onClick={() => handleSort("topic")}
                  >
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                      <BookOpenIcon className="w-3.5 h-3.5 text-slate-500" />
                      Topic / Session Details
                      <SortIcon columnKey="topic" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-36 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                        Loading guest lectures...
                      </div>
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-36 text-center text-destructive">
                      Failed to load guest lectures: {error}
                    </TableCell>
                  </TableRow>
                ) : filteredGuests.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-36">
                      <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-muted-foreground font-medium">
                          No matching records found
                        </p>
                        <Button
                          variant="link"
                          onClick={clearFilters}
                          className="mt-2 text-primary"
                        >
                          Clear all filters
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredGuests.map((guest, idx) => (
                    <TableRow
                      key={guest.id || idx}
                      className="hover:bg-slate-50/80 transition-colors border-b border-slate-100"
                    >
                      <TableCell className="font-medium whitespace-nowrap text-slate-700">
                        {guest.date ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary">
                            {formatDateDisplay(guest.date)}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">—</span>
                        )}
                      </TableCell>
                      <TableCell className="font-semibold text-slate-900">
                        {guest.name}
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {guest.designation &&
                        guest.designation !== "________" &&
                        guest.designation.trim() !== ""
                          ? guest.designation
                          : <span className="text-slate-400">—</span>}
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {guest.company &&
                        guest.company !== "________" &&
                        guest.company !== "_____" &&
                        guest.company.trim() !== ""
                          ? guest.company
                          : <span className="text-slate-400">—</span>}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {guest.topic && guest.topic.trim() !== ""
                          ? guest.topic
                          : <span className="text-slate-400">—</span>}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
