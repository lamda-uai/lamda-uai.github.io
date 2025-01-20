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
    authors: ["Bravo-Diaz, Alejandra", "Moreno, Sebastian", "Lopatin, Javier"],
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
    authors: ["Lagos, Felipe","Moreno, Sebastian","Yushimito, Wilfredo","Brstilo, Tomas"],
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
    authors: ["Yushimito, Wilfredo","Moreno, Sebastián","Miranda, Daniela"],
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
  },
  {
    title: "Using agreement probability to study differences in types of concepts and conceptualizers",
    date: "2022-12",
    authors: ["Canessa, Enrique","Chaigneau, Sergio","Moreno, Sebastián"],
    venue: "Behavior Research Methods, Volume 56, pages 93–112",
    venueShort: "BRM",
    tags: ["Property listing task","Agreement probability","Concrete/abstract concepts","Sighted/blind populations"],
    awards: [],
    paperUrl: "https://doi.org/10.3758/s13428-022-02030-z",
    abstract: "Agreement probability p(a) is a homogeneity measure of lists of properties produced by participants in a Property Listing Task (PLT) for a concept. Agreement probability’s mathematical properties allow a rich analysis of property-based descriptions. To illustrate, we use p(a) to delve into the differences between concrete and abstract concepts in sighted and blind populations. Results show that concrete concepts are more homogeneous within sighted and blind groups than abstract ones (i.e., exhibit a higher p(a) than abstract ones) and that concrete concepts in the blind group are less homogeneous than in the sighted sample. This supports the idea that listed properties for concrete concepts should be more similar across subjects due to the influence of visual/perceptual information on the learning process. In contrast, abstract concepts are learned based mainly on social and linguistic information, which exhibit more variability among people, thus, making the listed properties more dissimilar across subjects. Relative to abstract concepts, the difference in p(a) between sighted and blind is not statistically significant. Though this is a null result, and should be considered with care, it is expected because abstract concepts should be learned by paying attention to the same social and linguistic input in both, blind and sighted, and thus, there is no reason to expect that the respective lists of properties should differ. Finally, we used p(a) to classify concrete and abstract concepts with a good level of certainty. All these analyses suggest that p(a) can be fruitfully used to study data obtained in a PLT.",
    projectUrl: "",
    slidesUrl: ""
  },
  {
    title: "A Stacked Generalization Ensemble Model for Help Desk Ticket Assignment",
    date: "2022-11",
    authors: ["Moreno, Sebastian","Yushimito, Wilfredo","Hughes, Sebastian"],
    venue: "The 41st IEEE International Conference of the Chilean Computer Science Society",
    venueShort: "SCCC",
    tags: ["Machine Learning","Help Desk","Assignment","Ensembles","Classification"],
    awards: [],
    paperUrl: "https://doi.org/10.1109/SCCC57464.2022.10000332",
    abstract: "The assignment of Help Desk Support tickets (HDTAP) to programmers or developers is an important problem for Information Technology and software development companies. When the number of tickets and programmers are significant, the assignment becomes a time-consuming task. To handle this issue, companies develop software to manage the generation, the tracking, and the assignment of tickets to employees. Current advances in machine learning can automate the HDTAP, and make it more efficient. In this paper, we propose the use of an ensemble model based on Stacked Generalization that replicates the expert behavior by reducing the classification errors. The model is tested using data of a Chilean company that develops management software for hospitals. The results show that our proposal obtains the best accuracy and F1 score outperforming, consistently, most state-of-the-art models.",
    projectUrl: "",
    slidesUrl: ""
  }, 
  {
    title: "Hate Speech Recognition in Chilean Tweets",
    date: "2023-10",
    authors: ["Martinez, Rodrigo","Moreno, Sebastian"],
    venue: "The 41st IEEE International Conference of the Chilean Computer Science Society",
    venueShort: "SCCC",
    tags: ["Illegal Fishing","Inspection","Flag System"],
    awards: [],
    paperUrl: "https://doi.org/10.1109/SCCC57464.2022.10000380",
    abstract: "In recent years, the increased demand in the fishing industry has led to indiscriminate exploitation of maritime resources. To address this problem, Chile established boat fishing quotas that are inspected on-site but at random, verifying that their cargo corresponds to the tons of fishes indicated in their reports. However, this is inefficient and fraudulent fishermen have not been identified, increasing the necessity of a focused inspection. This paper proposes a flags system based on statistical data analysis, able to find potential fraudulent fishing boats. The flag system is built based on several hypothesis tests that evaluate significant differences in two aspects: fish frequency and cargo container utilization, where any significant difference is considered a new flag. The results show multiple boats with different behaviors for on-site versus documented reports, implying that the proposed flag system can point out fishing vessels with highly suspicious behavior.",
    projectUrl: "",
    slidesUrl: ""
  },   
  {
    title: "CPNCoverageAnalysis: An R package for parameter estimation in conceptual properties norming studies",
    date: "2022-03",
    authors: ["Canessa, Enrique","Chaigneau, Sergio","Moreno, Sebastián","Lagos, Rodrigo"],
    venue: "Behavior Research Methods, Volume 55, pages 554–569",
    venueShort: "BRM",
    tags: ["Conceptual properties norming studies","Property listing task","Parameter estimation","Sample size determination","Sample coverage"],
    awards: [],
    paperUrl: "https://doi.org/10.3758/s13428-022-01811-w",
    abstract: "In conceptual properties norming studies (CPNs), participants list properties that describe a set of concepts. From CPNs, many different parameters are calculated, such as semantic richness. A generally overlooked issue is that those values are only point estimates of the true unknown population parameters. In the present work, we present an R package that allows us to treat those values as population parameter estimates. Relatedly, a general practice in CPNs is using an equal number of participants who list properties for each concept (i.e., standardizing sample size). As we illustrate through examples, this procedure has negative effects on data’s statistical analyses. Here, we argue that a better method is to standardize coverage (i.e., the proportion of sampled properties to the total number of properties that describe a concept), such that a similar coverage is achieved across concepts. When standardizing coverage rather than sample size, it is more likely that the set of concepts in a CPN all exhibit a similar representativeness. Moreover, by computing coverage the researcher can decide whether the CPN reached a sufficiently high coverage, so that its results might be generalizable to other studies. The R package we make available in the current work allows one to compute coverage and to estimate the necessary number of participants to reach a target coverage. We show this sampling procedure by using the R package on real and simulated CPN data.",
    projectUrl: "",
    slidesUrl: ""
  },
  {
    title: "Characterization of Mobility Patterns With a Hierarchical Clustering of Origin-Destination GPS Taxi Data",
    date: "2021-10",
    authors: ["Heredia, Cristobal","Moreno, Sebastian","Yushimito, Wilfredo"],
    venue: "IEEE Transactions on Intelligent Transportation Systems, Volume: 23, Issue: 8",
    venueShort: "TITS",
    tags: ["Machine learning","taxi","GPS data","hierarchical clustering","urban mobility patterns"],
    awards: [],
    paperUrl: "https://doi.org/10.1109/TITS.2021.3116963",
    abstract: "Clustering taxi data is commonly used to understand spatial patterns of urban mobility. In this paper, we propose a new clustering model called Origin-Destination-means (OD-means). OD-means is a hierarchical adaptive k-means algorithm based on origin-destination pairs. In the first layer of the hierarchy, the clusters are separated automatically based on the variation of the within-cluster distance of each cluster until convergence. The second layer of the hierarchy corresponds to the sub clustering process of small clusters based on the distance between the origin and destination of each cluster. The algorithm is tested on a large data set of taxi GPS data from Santiago, Chile, and compared to other clustering algorithms. In contrast to them, our proposed model is capable of detecting general and local travel patterns in the city due to its hierarchical structure.",
    projectUrl: "",
    slidesUrl: ""
  },   
  {
    title: "Analysis of First-Year University Student Dropout through Machine Learning Models: A Comparison between Universities",
    date: "2021-10",
    authors: ["Opazo, Diego","Sebastian, Moreno","Alvarez-Miranda, Eduardo","Pereira, Jordi"],
    venue: "Mathematics, vol 9, 20, 2599",
    venueShort: "Mathematics",
    tags: ["machine learning","first-year student dropout","universities"],
    awards: [], 
    paperUrl: "https://doi.org/10.3390/math9202599",
    abstract: "Student dropout, defined as the abandonment of a high education program before obtaining the degree without reincorporation, is a problem that affects every higher education institution in the world. This study uses machine learning models over two Chilean universities to predict first-year engineering student dropout over enrolled students, and to analyze the variables that affect the probability of dropout. The results show that instead of combining the datasets into a single dataset, it is better to apply a model per university. Moreover, among the eight machine learning models tested over the datasets, gradient-boosting decision trees reports the best model. Further analyses of the interpretative models show that a higher score in almost any entrance university test decreases the probability of dropout, the most important variable being the mathematical test. One exception is the language test, where a higher score increases the probability of dropout.",
    projectUrl: "",
    slidesUrl: ""
  },  
{
    title: "Language Processing Differences Between Blind and Sighted Individuals and the Abstract Versus Concrete Concept Difference",
    date: "2021-10",
    authors: ["Canessa, Enrique","Chaigneau, Sergio","Moreno, Sebastián"],
    venue: "Cognitive Science, Volume 45, Issue 10, e13044",
    venueShort: "Cognitive Science",
    tags: ["Concrete concepts","Abstract concepts","Blind subjects","Sighted subjects"],
    awards: [],
    paperUrl: "https://doi.org/10.1111/cogs.13044",
    abstract: "In the property listing task (PLT), participants are asked to list properties for a concept (e.g., for the concept dog, “barks,” and “is a pet” may be produced). In conceptual property norming (CPNs) studies, participants are asked to list properties for large sets of concepts. Here, we use a mathematical model of the property listing process to explore two longstanding issues: characterizing the difference between concrete and abstract concepts, and characterizing semantic knowledge in the blind versus sighted population. When we apply our mathematical model to a large CPN reporting properties listed by sighted and blind participants, the model uncovers significant differences between concrete and abstract concepts. Though we also find that blind individuals show many of the same processing differences between abstract and concrete concepts found in sighted individuals, our model shows that those differences are noticeably less pronounced than in sighted individuals. We discuss our results vis-a-vis theories attempting to characterize abstract concepts.",
    projectUrl: "",
    slidesUrl: ""
  },  
  {
    title: "Informational content of cosine and other similarities calculated from high-dimensional Conceptual Property Norm data",
    date: "2020-07",
    authors: ["Canessa, Enrique","Chaigneau, Sergio","Moreno, Sebastián","Lagos, Rodrigo"],
    venue: "Cognitive Processing, Volume 21, pages 601–614",
    venueShort: "Cognitive Processing",
    tags: ["Cosine similarity","Euclidean distance","Chebyshev distance","Clustering","Conceptual properties"],
    awards: [],
    paperUrl: "https://doi.org/10.1007/s10339-020-00985-5",
    abstract: "To study concepts that are coded in language, researchers often collect lists of conceptual properties produced by human subjects. From these data, different measures can be computed. In particular, inter-concept similarity is an important variable used in experimental studies. Among possible similarity measures, the cosine of conceptual property frequency vectors seems to be a de facto standard. However, there is a lack of comparative studies that test the merit of different similarity measures when computed from property frequency data. The current work compares four different similarity measures (cosine, correlation, Euclidean and Chebyshev) and five different types of data structures. To that end, we compared the informational content (i.e., entropy) delivered by each of those 4 × 5 = 20 combinations, and used a clustering procedure as a concrete example of how informational content affects statistical analyses. Our results lead us to conclude that similarity measures computed from lower-dimensional data fare better than those calculated from higher-dimensional data, and suggest that researchers should be more aware of data sparseness and dimensionality, and their consequences for statistical analyses.",
    projectUrl: "",
    slidesUrl: ""
  },
  {
    title: "Evaluation of machine learning methodologies to predict stop delivery times from GPS data",
    date: "2019-12",
    authors: ["Hughes, Sebastián","Moreno, Sebastián","Yushimito, Wilfredo","Huerta-Cánepa, Gonzalo"],
    venue: "Transportation Research Part C: Emerging Technologies, Volume 109, pages 289-304",
    venueShort: "TRC-C",
    tags: ["Machine learning","Stop delivery time","Classification","Regression","Hazard duration","GPS"],
    awards: [],
    paperUrl: "https://doi.org/10.1016/j.trc.2019.10.018",
    abstract: "In last mile distribution, logistics companies typically arrange and plan their routes based on broad estimates of stop delivery times (i.e., the time spent at each stop to deliver goods to final receivers). If these estimates are not accurate, the level of service is degraded, as the promised time window may not be satisfied. The purpose of this work is to assess the feasibility of machine learning techniques to predict stop delivery times. This is done by testing a wide range of machine learning techniques (including different types of ensembles) to (1) predict the stop delivery time and (2) to determine whether the total stop delivery time will exceed a predefined time threshold (classification approach). For the assessment, all models are trained using information generated from GPS data collected in Medellín, Colombia and compared to hazard duration models. The results are threefold. First, the assessment shows that regression-based machine learning approaches are not better than conventional hazard duration models concerning absolute errors of the prediction of the stop delivery times. Second, when the problem is addressed by a classification scheme in which the prediction is aimed to guide whether a stop time will exceed a predefined time, a basic K-nearest-neighbor model outperforms hazard duration models and other machine learning techniques both in accuracy and score (harmonic mean between precision and recall). Third, the prediction of the exact duration can be improved by combining the classifiers and prediction models or hazard duration models in a two level scheme (first classification then prediction). However, the improvement depends largely on the correct classification (first level).",
    projectUrl: "",
    slidesUrl: ""
  }
];
