export const mediaDocuments = [
  {
    id: "pdf-1",
    kind: "images",
    images: [
      "/button01/Untitled%20design.png",
    ],
  },
  { id: "pdf-2", kind: "video", src: "/video/video002.mp4" },
  {
    id: "pdf-3",
    kind: "images",
    images: [
      "/button03/20.png",
      "/button03/21.png",
      "/button03/22.png",
      "/button03/23.png",
      "/button03/24.png",
      "/button03/25.png",
      "/button03/26.png",
    ],
  },
  {
    id: "pdf-4",
    kind: "images",
    images: [
      "/button04/10.png",
      "/button04/11.png",
      "/button04/12.png",
      "/button04/13.png",
      "/button04/14.png",
      "/button04/15.png",
      "/button04/16.png",
    ],
  },
] as const;

export type PdfId = (typeof mediaDocuments)[number]["id"];
export type PdfDirection = "previous" | "next";

export type PdfPageState = {
  page: number;
  totalPages: number | null;
  updatedAt: number;
};

export type PdfControlState = Record<PdfId, PdfPageState>;

export type PdfRemoteState = {
  activePdfId: PdfId | null;
  videoPlaying: boolean;
  documents: PdfControlState;
};

export function isPdfId(value: unknown): value is PdfId {
  return mediaDocuments.some((document) => document.id === value);
}

export function isPdfDirection(value: unknown): value is PdfDirection {
  return value === "previous" || value === "next";
}
