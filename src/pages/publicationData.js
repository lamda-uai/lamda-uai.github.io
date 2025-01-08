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
    title: "WordListsAnalytics: an R package for multiple data analysis of Property Listing Tasks",
    date: "09-2024",
    authors: ["C. Heredia, S. Moreno, E. Canessa, and S. Chaigneau"],
    venue: "SoftwareX",
    venueShort: [],
    tags: ["Property Listing Task","Semantic fluency task","Coverage","Sample size","Parameter estimation","Cluster and shift count"],
    awards: [],
    paperUrl: "https://doi.org/10.1016/j.softx.2024.101842",
    abstract: "WordListsAnalytics allows sounder analyses of data collected in Property listing tasks, Semantic fluency tasks (SFT), and other related methods by calculating sample sizes to attain a specified coverage and estimating population parameters that characterize those tasks. Relatedly, WordListsAnalytics calculates agreement probability between pairs of concepts, which gauges how similar are the listed properties and counts the number of clusters and shifts in SFT data.",
  
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
