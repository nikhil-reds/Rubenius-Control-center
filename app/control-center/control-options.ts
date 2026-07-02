import type { PdfId } from "@/lib/pdf-control";

export type ControlOption = {
  id: string;
  pdfId: PdfId;
  label: string;
  shortName: string;
  tagline: string;
  controlKind: "pages" | "video";
};

export const controlOptions: ControlOption[] = [
  {
    id: "community-reinvented-toilet",
    pdfId: "pdf-1",
    label: "BHRT",
    shortName: "BHRT",
    tagline: "Community-led sanitation. Lasting impact.",
    controlKind: "pages",
  },
  {
    id: "mobile-treatment-unit",
    pdfId: "pdf-2",
    label: "BHRT",
    shortName: "BHRT",
    tagline: "Portable treatment. Lasting impact.",
    controlKind: "video",
  },
  {
    id: "onsite-treatment-plant",
    pdfId: "pdf-3",
    label: "BHRT",
    shortName: "BHRT",
    tagline: "Onsite treatment. Lasting impact.",
    controlKind: "pages",
  },
  {
    id: "bhrt",
    pdfId: "pdf-4",
    label: "BHRT",
    shortName: "BHRT",
    tagline: "Independent treatment. Lasting impact.",
    controlKind: "pages",
  },
];
