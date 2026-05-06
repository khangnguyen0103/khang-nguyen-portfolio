export type Project = {
  n: string;
  slug: string;
  title: string;
  tag: string;
  description: string;
  accent: string;
  stack: string[];
  workflow: string[];
  highlights: string[];
  githubUrl: string;
  comingSoon?: boolean;
  viewTakeaway?: string;
  notebookUrl?: string;
  presentationUrl?: string;
  visualizationUrl?: string;
  dataNote?: string;
};

export const projects: Project[] = [
  {
    n: "01",
    slug: "ai-model-selection",
    title: "AI Model Selection System",
    tag: "Coming Soon · Machine Learning",
    description:
      "Coming soon. This project is planned as a machine learning system that learns from dataset metadata and recommends which model family may fit best.",
    accent: "from-[hsl(var(--warm)/0.4)] to-[hsl(var(--accent)/0.3)]",
    stack: ["Python", "Pandas", "Scikit-learn", "Model Evaluation"],
    workflow: ["Dataset Profile", "Metadata", "Model Matching", "Ranking", "Recommendation"],
    highlights: [
      "Planned to compare model families for classification, regression, and clustering.",
      "Will use dataset characteristics to guide algorithm selection.",
      "Designed to shorten the first stage of machine learning experimentation once built.",
    ],
    comingSoon: true,
    githubUrl: "https://github.com/khangnguyen0103",
    viewTakeaway:
      "Coming soon: this idea is still in planning, so the portfolio keeps it transparent instead of presenting it as completed work.",
  },
  {
    n: "02",
    slug: "datafest-patient-journey",
    title: "DataFest Patient Journey / RaceDiff",
    tag: "Healthcare · Analytics",
    description:
      "Awarded Best Data Visualization for healthcare-style analysis studying patient movement from admission to discharge, using demographics, geography, behavioral context, clinical context, and provider patterns.",
    accent: "from-[hsl(var(--accent)/0.4)] to-[hsl(var(--warm-soft)/0.4)]",
    stack: ["Python", "Jupyter", "Pandas", "Regression", "Healthcare Analytics"],
    workflow: ["Data Structure", "Preparation", "Exploration", "Geography", "Regression"],
    highlights: [
      "Won Best Data Visualization for communicating the patient journey clearly and visually.",
      "Notebook markdown covers big picture, data structure, preparation, EDA, geography, regression models, and conclusions.",
      "Analysis centers on demographics, geography, behavioral/social context, clinical context, and providers.",
      "Includes a final DataFest presentation and a GitHub-ready README.",
    ],
    githubUrl: "https://github.com/khangnguyen0103/DataFest-project.git",
    viewTakeaway:
      "Best Data Visualization winner: a patient journey story built from healthcare patterns, geography, modeling, and presentation-ready insight.",
    notebookUrl: `${import.meta.env.BASE_URL}RaceDiff.ipynb`,
    presentationUrl: `${import.meta.env.BASE_URL}DataFestFinalPres.pdf`,
  },
  {
    n: "03",
    slug: "business-dashboard",
    title: "Business Dashboard + ML Insight",
    tag: "Coming Soon · Dashboards",
    description:
      "Coming soon. This project is planned as a dashboard that turns raw CSV/database data into visual insight, variable importance, and strategy recommendations.",
    accent: "from-[hsl(var(--warm-soft)/0.45)] to-[hsl(var(--warm)/0.4)]",
    stack: ["Python", "Excel", "Power BI", "Tableau", "Business Analytics"],
    workflow: ["Business Question", "Data Model", "Dashboard", "ML Insight", "Strategy"],
    highlights: [
      "Planned to connect visual dashboards with model-driven interpretation.",
      "Will highlight important variables for business decisions.",
      "Designed for fast scanning, comparison, and action once built.",
    ],
    comingSoon: true,
    githubUrl: "https://github.com/khangnguyen0103",
    viewTakeaway:
      "Coming soon: this dashboard concept is planned, but the finished analysis and visuals are not published yet.",
  },
  {
    n: "04",
    slug: "la-crime-analysis",
    title: "LAPD Crime Analysis",
    tag: "Analysis · Public Safety",
    description:
      "An analysis of LAPD crime records from 2020 to 2024, focused on who is most affected, where risk concentrates, when incidents peak, and which crime types drive the pattern.",
    accent: "from-[hsl(var(--accent)/0.35)] to-[hsl(var(--warm)/0.45)]",
    stack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    workflow: ["Question", "Cleaning", "Organizing", "Modeling", "Visualization", "Insight"],
    highlights: [
      "Studies victim age, sex, area, time, and crime type patterns.",
      "Uses cleaned LAPD-style records to organize trend, risk, and demographic views.",
      "Documents a full analysis flow from data cleaning to findings.",
    ],
    githubUrl: "https://github.com/khangnguyen0103/LAPD-crime.git",
    viewTakeaway:
      "From LAPD records to public-safety insight: victim demographics, risky areas, timing patterns, and crime categories in one analysis flow.",
    notebookUrl: `${import.meta.env.BASE_URL}crime-la-analysis.ipynb`,
    visualizationUrl: `${import.meta.env.BASE_URL}crime-la-analysis.html`,
    dataNote:
      "The original LA crime CSV is 244 MB, so it is documented for the repo instead of bundled into GitHub Pages.",
  },
  {
    n: "05",
    slug: "military-spending-visualization",
    title: "Military Spending Visualization",
    tag: "Visualization · Global Data",
    description:
      "An interactive visualization project exploring military spending as a share of GDP across countries, using choropleth and trend views to compare global patterns.",
    accent: "from-[hsl(var(--warm)/0.35)] to-[hsl(var(--accent)/0.35)]",
    stack: ["R", "HTML", "Plotly", "Choropleth Map", "Data Visualization"],
    workflow: ["Modeling", "Organizing", "Mapping", "Trend View", "Visualization"],
    highlights: [
      "Includes the rendered HTML visualization from the lab project.",
      "Uses map and line graph views to compare military spending patterns.",
      "Designed as a visual story for global spending differences over time.",
    ],
    githubUrl: "https://github.com/khangnguyen0103/Military-Spending-Visualization.git",
    viewTakeaway:
      "Interactive choropleth and trend views make global military spending patterns easier to compare across countries and years.",
    visualizationUrl: `${import.meta.env.BASE_URL}military-spending-visualization.html`,
  },
];
