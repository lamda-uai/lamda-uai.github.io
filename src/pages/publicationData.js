// publicationData.ts

// testing

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
    title: "CNN Sensitivity Analysis for Land Cover Map Models Using Sparse and Heterogeneous Satellite Data",
    date: "2024-11",
    authors: ["Moreno, Sebastian","Lopatin, Javier","Corvalan, Diego","Bravo-Diaz Alejandra"],
    venue: "The 27th Iberoamerican Congress on Pattern Recognition",
    venueShort: "CIARP",
    tags: ["Land cover maps","Deep learning","Transfer learning"],
    awards: [],
    paperUrl: "https://doi.org/10.1007/978-3-031-76607-7_5",
    abstract: "Land cover maps provide detailed information on the land use of territories, which is useful for public policy making. Constant changes in the landscape limit the usefulness of these maps over time, so they need to be constantly updated. In this context, remote sensing images combined with the use of deep neural networks can be used for this purpose. Although several models are trained on different datasets, we do not know their ability to transfer the learned patterns to new data. In this paper, we evaluate several pre-trained semantic segmentation models on deep convolutional neural networks (CNN) using freely available global RGB data from Sentinel-2. Four CNN models with 32 different architectures were evaluated on data from three continents, on seven different classes. The results show that the best model is the PSPNet with seresnet18, obtaining a test macro F1 score of 0.4950 when the model is trained with data augmentation and fine-tuning.",
    projectUrl: "",
    slidesUrl: ""
  },  
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
  },
    {
    title: "ODMeans: An R package for global and local cluster detection for Origin–Destination GPS data",
    date: "2024-05",
    authors: ["Heredia, Cristobal", "Moreno, Sebastian", "Yushimito, Wilfredo"],
    venue: "SoftwareX, vol 26, 101732",
    venueShort: "SoftwareX",
    tags: ["Machine learning","k-means","Odmeans","R"],
    awards: [],
    paperUrl: "https://doi.org/10.1016/j.softx.2024.101842",
    abstract: "The ODMeans R package implements the OD-Means model, a two-layer hierarchical clustering algorithm designed for extracting both global and local travel patterns from Origin–Destination Pairs (OD-Pairs). In contrast to existing models, OD-Means automates cluster determination and offers advantages such as smaller Within-Cluster Distance (WCD) and dual hierarchies. The package includes functions for applying the model and visualizing the results on maps. Using real taxi data from Santiago, Chile, we demonstrate the package’s capabilities, showcasing its flexibility and impact on understanding urban mobility patterns.",
    projectUrl: "",
    slidesUrl: ""
  },  
  {
    title: "Urban Origin-Destination Travel Time Estimation using K-Nearest Neighbor-Based Methods",
    date: "2024-04",
    authors: ["Lagos Felipe","Moreno Sebastian","Yushimito Wilfredo","Brstilo Tomas"],
    venue: "Mathematics, vol 12, 8, 1255",
    venueShort: "Mathematics",
    tags: ["origin–destination","travel time","machine learning","k-nearest neighbor","adaptive algorithm","haversine distance"],
    awards: [], 
    paperUrl: "https://www.mdpi.com/2227-7390/12/8/1255",
    abstract: "Improving the estimation of origin–destination (O-D) travel times poses a formidable challenge due to the intricate nature of transportation dynamics. Current deep learning models often require an overwhelming amount of data, both in terms of data points and variables, thereby limiting their applicability. Furthermore, there is a scarcity of models capable of predicting travel times with basic trip information such as origin, destination, and starting time. This paper introduces novel models rooted in the k-nearest neighbor (KNN) algorithm to tackle O-D travel time estimation with limited data. These models represent innovative adaptations of weighted KNN techniques, integrating the haversine distance of neighboring trips and incorporating correction factors to mitigate prediction biases, thereby enhancing the accuracy of travel time estimations for a given trip. Moreover, our models incorporate an adaptive heuristic to partition the time of day, identifying time blocks characterized by similar travel-time observations. These time blocks facilitate a more nuanced understanding of traffic patterns, enabling more precise predictions. To validate the effectiveness of our proposed models, extensive testing was conducted utilizing a comprehensive taxi trip dataset sourced from Santiago, Chile. The results demonstrate substantial improvements over existing state-of-the-art models (e.g., MAPE between 35 to 37% compared to 49 to 60% in other methods), underscoring the efficacy of our approach. Additionally, our models unveil previously unrecognized patterns in city traffic across various time blocks, shedding light on the underlying dynamics of urban mobility.",
    projectUrl: "",
    slidesUrl: ""
  },
  {
    title: "Hate Speech Recognition in Chilean Tweets",
    date: "2023-10",
    authors: ["Tobar-Arancibia, Alfonso","Moreno, Sebastian","Lopatin, Javier"],
    venue: "The 42nd IEEE International Conference of the Chilean Computer Science Society",
    venueShort: "SCCC",
    tags: ["Hate speech","Stacking","machine learning"],
    awards: [],
    paperUrl: "https://doi.org/10.1109/SCCC59417.2023.10315748",
    abstract: "Hate speech, which targets specific groups based on race, religion, or sexual orientation, is a growing concern, especially on social media. Detecting hate speech is a critical research area, but most models are developed in English, leaving a gap for other languages like Spanish. Spanish presents additional challenges due to its regional variants and slang. In this paper, we introduce HateStack, the winning model of the 2022 Datathon at Universidad Técnica Federico Santa Maria, Chile, designed to detect hate speech in Chilean tweets. HateStack is a two-level ensemble model comprising a feature extraction process, five Level-l models, and a logistic regression as a second-level model. The results demonstrate that HateStack outperforms other ensemble models and RoBERTuito, a transformer-based deep learning model tailored for hate speech detection on tweets. Developing such models in non-English languages is important to detect hate speech effectively.",
    projectUrl: "",
    slidesUrl: ""
  }, 
  {
    title: "Describing and understanding the time course of the property listing task",
    date: "2023-09",
    authors: ["Canessa, Enrique","Chaigneau, Sergio","Moreno, Sebastián"],
    venue: "Cognitive Processing, Volume 25, pages 61–74",
    venueShort: "Cognitive Processing",
    tags: ["Concepts","Property listing task","Conceptual properties norms","Semantic access","Mathematical model"],
    awards: [],
    paperUrl: "https://doi.org/10.1007/s10339-023-01160-2",
    abstract: "To study linguistically coded concepts, researchers often resort to the Property Listing Task (PLT). In a PLT, participants are asked to list properties that describe a concept (e.g., for DOG, subjects may list “is a pet”, “has four legs”, etc.). When PLT data is collected for many concepts, researchers obtain Conceptual Properties Norms (CPNs), which are used to study semantic content and as a source of control variables. Though the PLT and CPNs are widely used across psychology, only recently a model that describes the listing course of a PLT has been developed and validated. That original model describes the listing course using order of production of properties. Here we go a step beyond and validate the model using response times (RT), i.e., the time from cue onset to property listing. Our results show that RT data exhibits the same regularities observed in the previous model, but now we can also analyze the time course, i.e., dynamics of the PLT. As such, the RT validated model may be applied to study several similar memory retrieval tasks, such as the Free Listing Task, Verbal Fluidity Task, and to research related cognitive processes. To illustrate those kinds of analyses, we present a brief example of the difference in PLT’s dynamics between listing properties for abstract versus concrete concepts, which shows that the model may be fruitfully applied to study concepts.",
    projectUrl: "",
    slidesUrl: ""
  }, 
  {
    title: "AC-PLT: An algorithm for computer-assisted coding of semantic property listing data",
    date: "2023-09",
    authors: ["Canessa, Enrique","Chaigneau, Sergio","Moreno, Sebastián"],
    venue: "Behavior Research Methods, Volume 56, pages 3366–3379",
    venueShort: "BRM",
    tags: ["Machine learning framework","Property listing task","Assisted codification","Coding reliability"],
    awards: [],
    paperUrl: "https://doi.org/10.3758/s13428-023-02260-9",
    abstract: "In this paper, we present a novel algorithm that uses machine learning and natural language processing techniques to facilitate the coding of feature listing data. Feature listing is a method in which participants are asked to provide a list of features that are typically true of a given concept or word. This method is commonly used in research studies to gain insights into people's understanding of various concepts. The standard procedure for extracting meaning from feature listings is to manually code the data, which can be time-consuming and prone to errors, leading to reliability concerns. Our algorithm aims at addressing these challenges by automatically assigning human-created codes to feature listing data that achieve a quantitatively good agreement with human coders. Our preliminary results suggest that our algorithm has the potential to improve the efficiency and accuracy of content analysis of feature listing data. Additionally, this tool is an important step toward developing a fully automated coding algorithm, which we are currently preliminarily devising.",
    projectUrl: "",
    slidesUrl: ""
  }, 
  {
    title: "The Potential of Battery Electric Taxis in Santiago de Chile",
    date: "2023-05",
    authors: ["Yushimito Wilfredo","Moreno, Sebastián","Miranda, Daniela"],
    venue: "Sustainability, 15(11), 8689",
    venueShort: "Sustainability",
    tags: ["Battery electric vehicles","taxis","feasibility","charging stations","Chile"],
    awards: [],
    paperUrl: "https://doi.org/10.3390/su15118689",
    abstract: "Given the semi-private nature of the mode, the conversion of taxi vehicles to electric requires a feasibility analysis, as it can impact their operations and revenues. In this research, we assess the feasibility of taxi companies in Santiago de Chile operating with battery electric vehicles (BEVs), considering the current electric mobility infrastructure of the city. We used a large database of GPS pulses provided by a taxi app to obtain a complete picture of typical taxi trips and operations in the city. Then, we performed an assessment of the feasibility of the fleet conversion by considering battery capacity, driving range, proximity to recharging stations, and charging power. The results are promising, as the number of completed trips ranges from 87.35% to 94.34%, depending on the BEV driving range. The analysis shows the importance of installing fast charging points in the locations or BEV driving ranges.",
    projectUrl: "",
    slidesUrl: ""
  }, 

  {
    title: "Analysis of the Characteristics and Speed of Spread of the “FUNA” on Twitter",
    date: "2023-04",
    authors: ["Moreno, Sebastián","Bórquez-Paredes, Danilo","Martinez, Valentina"],
    venue: "Mathematics, 11(7), 1749",
    venueShort: "Mathematics",
    tags: ["funa","social network analysis","network structure analysis","information spreading on social media"],
    awards: [],
    paperUrl: "https://doi.org/10.3390/math11071749",
    abstract: "The funa is a prevalent concept in Chile that aims to expose a person’s bad behavior, punish the aggressor publicly, and warn the community about it. Despite its massive use on the social networks of Chilean society, the real dissemination of funas among communities is unknown. In this paper, we extract, generate, analyze, and compare the Twitter social network’s spread of three tweets related to “funas” against three other trending topics, through the analysis of global network characteristics over time (degree distribution, clustering coefficient, hop plot, and betweenness centrality). As observed, funas have a specific behavior, and they disseminate as quickly as a common tweet or more quickly; however, they spread thanks to several network users, generating a cohesive group.",
    projectUrl: "",
    slidesUrl: ""
  }  
];
