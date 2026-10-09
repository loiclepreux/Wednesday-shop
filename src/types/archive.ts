export interface ArchiveRecord {
    id: string;
    caseNumber: string;
    title: string;
    date: string;
    location: string;
    status: "Recovered" | "Sealed";
    excerpt: string;
    story: string[];
    productId?: number;
}
