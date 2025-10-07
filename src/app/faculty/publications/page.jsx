// import { Badge } from "@/components/ui/badge";
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  FileText,
  Users,
  Calendar,
  Award,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import WordPullUp from "@/components/ui/word-pull-up";

export default function FacultyPublication() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/publications"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPapers(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching publications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  // Filter papers based on search query
  const filteredPapers = useMemo(() => {
    if (!searchQuery) return papers;

    return papers.filter((paper) =>
      Object.values(paper).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [papers, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPapers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPapers = filteredPapers.slice(startIndex, endIndex);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination handlers
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
  const goToNextPage = () =>
    setCurrentPage(Math.min(totalPages, currentPage + 1));

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 sm:py-20 px-4 max-w-7xl">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
              <p className="text-slate-600">Loading publications...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16 sm:py-20 px-4 max-w-7xl">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-red-500 mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <p className="text-red-600 font-medium mb-2">
                Error loading publications
              </p>
              <p className="text-slate-600 text-sm">{error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 sm:py-20 px-4 max-w-7xl">
      <WordPullUp
        words="Faculty Publications"
        className="text-4xl md:text-5xl font-bold tracking-tight text-mainBlue text-center mb-10 md:mb-16"
      />

      <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-white">
        <CardHeader className="pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Academic Publications
              </CardTitle>
              <CardDescription className="text-slate-600 mt-1">
                Research papers and publications database
              </CardDescription>
            </div>
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {filteredPapers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <FileText className="h-12 w-12 text-slate-400 mb-4" />
              <p className="text-slate-600 font-medium mb-2">
                {searchQuery
                  ? "No publications match your search"
                  : "No publications found"}
              </p>
              <p className="text-slate-500 text-sm">
                {searchQuery
                  ? "Try adjusting your search terms"
                  : "Publications will appear here when available"}
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50 hover:bg-slate-50 border-slate-200">
                      <TableHead className="font-semibold text-slate-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Title of Paper
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-slate-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Author(s)
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-slate-700 py-4 px-6">
                        Journal
                      </TableHead>
                      <TableHead className="font-semibold text-slate-700 py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Year
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-slate-700 py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          UGC/SCOPUS
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentPapers.map((paper, index) => (
                      <TableRow
                        key={paper.id}
                        className={`
                          hover:bg-blue-50/50 transition-colors duration-200 border-slate-100
                          ${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"}
                        `}
                      >
                        <TableCell className="py-4 px-6 max-w-md">
                          <div className="font-medium text-slate-800 leading-relaxed">
                            {paper.title}
                          </div>
                        </TableCell>
                        <TableCell className="py-4 px-6 max-w-xs">
                          <div className="text-slate-600 text-sm leading-relaxed">
                            {paper.authors}
                          </div>
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <div className="text-slate-700 font-medium text-sm">
                            {paper.journal}
                          </div>
                        </TableCell>
                        <TableCell className="py-4 px-6 text-center">
                          <div className="text-slate-600 font-medium">
                            {paper.year}
                          </div>
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <div className="text-slate-600 font-medium">
                            {paper.classification === "Nill"
                              ? "Not Available"
                              : paper.classification}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Results info */}
                    <div className="text-sm text-slate-600">
                      Showing {startIndex + 1} to{" "}
                      {Math.min(endIndex, filteredPapers.length)} of{" "}
                      {filteredPapers.length} publications
                      {searchQuery && (
                        <span className="text-blue-600 ml-1">
                          (filtered from {papers.length} total)
                        </span>
                      )}
                    </div>

                    {/* Pagination controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToFirstPage}
                        disabled={currentPage === 1}
                        className="hidden sm:flex"
                      >
                        <ChevronsLeft className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline ml-1">Previous</span>
                      </Button>

                      {/* Page numbers */}
                      <div className="flex items-center gap-1">
                        {getPageNumbers().map((pageNumber) => (
                          <Button
                            key={pageNumber}
                            variant={
                              currentPage === pageNumber ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setCurrentPage(pageNumber)}
                            className={`w-8 h-8 p-0 ${
                              currentPage === pageNumber
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "hover:bg-slate-100"
                            }`}
                          >
                            {pageNumber}
                          </Button>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                      >
                        <span className="hidden sm:inline mr-1">Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToLastPage}
                        disabled={currentPage === totalPages}
                        className="hidden sm:flex"
                      >
                        <ChevronsRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
