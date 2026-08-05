/**
 * Single definition of the Research tabs, shared by the Home page preview
 * section and the /research page, so the two can't drift out of sync.
 *
 * `columns` drives the full table on /research. `endpoint` is null for Sugyaan,
 * which is an external journal with no local records - it renders a link card
 * instead of a table.
 */
export const RESEARCH_TABS = [
  {
    key: "papers",
    label: "Papers Published",
    blurb: "Peer-reviewed research in Scopus, ABDC and UGC-CARE indexed journals.",
    endpoint: "/api/publications",
    columns: [
      { field: "title", label: "Title of the Paper", wide: true },
      { field: "authors", label: "Faculty" },
      { field: "journal", label: "Journal" },
      { field: "classification", label: "Indexing" },
      { field: "year", label: "Year" },
    ],
    searchFields: ["title", "authors", "journal"],
    yearField: "year",
  },
  {
    key: "conferences",
    label: "Conferences Presented",
    blurb: "Papers presented by our faculty at national and international conferences.",
    endpoint: "/api/conferences",
    columns: [
      { field: "title", label: "Title of the Paper", wide: true },
      { field: "faculty", label: "Faculty" },
      { field: "theme", label: "Conference Theme" },
      { field: "organized_by", label: "Organised By" },
      { field: "month_year", label: "Date" },
    ],
    searchFields: ["title", "faculty", "theme", "organized_by"],
    yearField: "academic_year",
  },
  {
    key: "patents",
    label: "Patents Published",
    blurb: "Patents filed and published by SSIM faculty.",
    endpoint: "/api/patents",
    columns: [
      { field: "title", label: "Title", wide: true },
      { field: "faculty", label: "Faculty" },
      { field: "patent_no", label: "Patent Number" },
      { field: "published_date", label: "Published" },
    ],
    searchFields: ["title", "faculty", "patent_no"],
    yearField: null,
  },
  {
    key: "awards",
    label: "Faculty Awards",
    blurb: "Recognition received by our faculty from academic and industry bodies.",
    endpoint: "/api/awards",
    columns: [
      { field: "award", label: "Award", wide: true },
      { field: "faculty", label: "Faculty" },
      { field: "host_organization", label: "Awarded By" },
      { field: "year", label: "Year" },
    ],
    searchFields: ["award", "faculty", "host_organization"],
    yearField: null,
  },
  {
    key: "books",
    label: "Books Published",
    blurb: "Books authored, co-authored and edited by SSIM faculty.",
    endpoint: "/api/books",
    columns: [
      { field: "book_name", label: "Book", wide: true },
      { field: "faculty", label: "Faculty" },
      { field: "publisher", label: "Publisher" },
      { field: "academic_year", label: "Year" },
    ],
    searchFields: ["book_name", "faculty", "publisher"],
    yearField: "academic_year",
  },
  {
    key: "sugyaan",
    label: "Management Journal (Sugyaan)",
    blurb:
      "Sugyaan is SSIM's own peer-reviewed management journal, published bi-annually.",
    endpoint: null,
    external: {
      href: "https://www.sugyaan.org/",
      title: "Sugyaan",
      subtitle: "Management Journal of Siva Sivani Institute of Management",
      issn: "0975-4032",
    },
  },
];

export const RESEARCH_TAB_KEYS = RESEARCH_TABS.map((t) => t.key);
