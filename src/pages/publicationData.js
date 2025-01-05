// publicationData.ts

interface PublicationData {
  title: string;
  date: string;
  authors: string[];
  venue: string;
  venueShort: string;
  tags: string[];
  awards: string[];
  paperUrl: string;
  abstract: string;
  bibtex: string;
  projectUrl: string;
  slidesUrl: string;
}

export const publicationData: PublicationData[] = [
  {
    title: "An Example Research Paper Title About Something Interesting",
    date: "2024-01-15",
    authors: ["Smith, John", "Doe, Jane", "Johnson, Bob"],
    venue: "International Conference on Example Research 2024",
    venueShort: "ICER 2024",
    tags: ["Machine Learning", "Artificial Intelligence"],
    awards: ["Best Paper Award"],
    paperUrl: "https://example.com/paper.pdf",
    abstract: "This is an example abstract that describes the research paper's content and findings. It should be detailed enough to give readers a good understanding of the work.",
  
    projectUrl: "https://example.com/project",
    slidesUrl: "https://example.com/slides.pdf"
  },
  {
    title: "Another Research Paper with Different Topics",
    date: "2023-11-30",
    authors: ["Anderson, Alice", "Brown, Charlie"],
    venue: "Journal of Important Research",
    venueShort: "JIR",
    tags: ["Data Science", "Neural Networks"],
    awards: [],
    paperUrl: "https://example.com/paper2.pdf",
    abstract: "This is another example abstract for a different paper, showing how multiple entries can be stored in the data file.",
    projectUrl: "https://example.com/project2",
    slidesUrl: "https://example.com/slides2.pdf"
  }
];