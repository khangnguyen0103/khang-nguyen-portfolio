# RaceDiff Patient Journey Analysis

**Author:** Tran Tuan Khang Nguyen

RaceDiff is a DataFest patient journey analysis project focused on understanding what factors influence how a patient moves through the healthcare system, from admission to discharge. The project explores demographic, geographic, behavioral, clinical, and provider-related patterns to identify opportunities for improving the patient journey.

## Project Files

- `RaceDiff.ipynb` - Main analysis notebook.
- `notebook-markdown.md` - Markdown outline extracted from the notebook for quick GitHub review.
- `DataFestFinalPres.pdf` - Final presentation artifact.

## Big Picture

The goal of this analysis is to understand **what factors influence how a patient moves through the healthcare system**, from admission to discharge, and to identify opportunities to improve the patient journey.

The notebook is organized around five analytical pillars:

- **Demographics** - Who is the patient?
- **Geography** - Where do they live?
- **Behavioral/Social** - Smoking status and marital status.
- **Clinical Context** - Visit type and admission type.
- **Providers** - Who is treating them?

## Notebook Workflow

1. **Data Structure**
   Review the available encounter, patient, diagnosis, department, and social data.

2. **Data Preparation**
   Convert dates, merge source tables, handle duplicates, create diagnosis and vital-status flags, define geography fields, and construct a journey score.

3. **Exploratory Analysis**
   Explore race, demographic heatmaps, smoking patterns, and visit-gap behavior.

4. **Geographic Analysis**
   Prepare local geography fields, build map-like views, and summarize county-level journey gaps.

5. **Regression Models**
   Use linear regression to predict length of stay, logistic regression to predict ED visits, and a model for journey score.

6. **Conclusions**
   Summarize the most important patient journey patterns and opportunities for improvement.

## Methods

- Data cleaning and table merging
- Duplicate handling
- Feature engineering
- Demographic analysis
- Geographic analysis
- Linear regression
- Logistic regression
- Journey score modeling

## Tools

- Python
- Jupyter Notebook
- Pandas
- Regression modeling
- Data visualization

## Portfolio Link

This project is documented in the portfolio as **DataFest Patient Journey**.

Suggested GitHub repository URL:

```text
https://github.com/khangnguyen0103/racediff-patient-journey
```
