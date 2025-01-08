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
    date: "2024-09",
    authors: ["Heredia, Cristobal", "Moreno, Sebastian", "Canessa, Enrique", "Chaigneau Sergio"],
    venue: "SoftwareX, vol 27, 101842",
    venueShort: "SoftwareX",
    tags: ["Property Listing Task","Semantic fluency task","Coverage","Sample size","Parameter estimation","Cluster and shift count"],
    awards: [],
    paperUrl: "https://doi.org/10.1016/j.softx.2024.101842",
    abstract: "WordListsAnalytics allows sounder analyses of data collected in Property listing tasks, Semantic fluency tasks (SFT), and other related methods by calculating sample sizes to attain a specified coverage and estimating population parameters that characterize those tasks. Relatedly, WordListsAnalytics calculates agreement probability between pairs of concepts, which gauges how similar are the listed properties and counts the number of clusters and shifts in SFT data.",
    projectUrl: "",
    slidesUrl: ""
  },
  {
    title: "Evaluating the ability of convolutional neural networks for transfer learning in Pinus radiata cover predictions",
    date: "2024-09",
    authors: ["Bravo-Diaz Alejandra", "Moreno Sebastian", "Lopatin Javier"],
    venue: "Ecological Informatics, vol 82, 102684",
    venueShort: "Ecological Informatics",
    tags: ["Invasive species","Unpiloted aerial vehicles (UAV)","Spatial variability","Regression","Transfer domain"],
    awards: [],
    paperUrl: "https://doi.org/10.1016/j.ecoinf.2024.102684",
    abstract: "The species Pinus radiata is highly invasive in native forests in Chile, drastically affecting the functioning and structure of ecosystems. Hence, it is imperative to develop robust approaches to detect P. radiata invasions at different scales. Models based on convolutional neural networks (CNN) have proven to be a promising alternative to detect plant invasions in high-resolution remote sensing data, such as those obtained by drones. However, studies have been limited in their spatial variability and their assessments of transferability or transfer learning to new sectors, hindering the ability to use these models in a real-world setting. We train models based on CNN architectures using unpiloted aerial vehicle data and evaluate their ability to transfer learning outside the training domain using regression approaches. We compared models trained with low spatial variability (mono-site) with those with high spatial variability (multi-site). We further sought to maximize the transference of learning outside the training domain by searching among different architectures and models, maximizing the evaluation in an independent data set. The results showed that transfer learning is better when multi-site models with higher spatial variability are used for training, obtaining a coefficient of determination (R2) between 60% and 87%. On the contrary, mono-site models present a wide variability of performance attributed to the dissimilarity of information between sites, limiting the possibilities of using these models for extrapolations or model generalizations. We also obtained a significant difference between within-domain generalization using test data versus transfer learning outside the training domain, showing that testing data alone cannot depict such discrepancy without further data. Finally, the best models for transfer learning on new data domains often do not agree with those selected by the standard training/validation/testing scheme. Our findings pave the way for deeper discussions and further investigations into the limitations of CNN models when applied to high-resolution imagery.",
    projectUrl: "",
    slidesUrl: ""
  }
];
