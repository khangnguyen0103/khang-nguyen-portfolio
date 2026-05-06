# Los Angeles Crime Analysis

**Author:** Tran Tuan Khang Nguyen

This project analyzes Los Angeles crime records from 2020 to 2024 to understand who is most affected, where risk is concentrated, when incidents are more likely to happen, and which crime types shape the overall pattern.

## Project Question

Which age and sex groups appear most affected by crime, and how do location, time, and crime type change the risk pattern?

## Analysis Flow

1. **Question:** define the groups, places, times, and crime categories to compare.
2. **Cleaning:** rename columns, parse dates and times, filter unusable age values, and prepare consistent analysis fields.
3. **Organizing:** group records by victim age, sex, area, time, and crime description.
4. **Modeling:** structure comparisons across demographic and geographic variables.
5. **Visualization:** build charts and tables for trend, victim profile, area risk, time pattern, and crime type.
6. **Insight:** summarize which groups and places show the strongest patterns.

## Included Files

- `index.ipynb`: Jupyter notebook with the full analysis.
- `index.html`: rendered notebook / visualization output.
- `notebook-markdown.md`: readable markdown summary of the notebook.
- `DATA.md`: dataset note.

## Key Findings From The Notebook

- The 25-34 age group shows the highest crime count across ages.
- Female victims are consistently more affected than male victims across many age categories.
- Young adults between 18 and 34 account for a large share of incidents.
- Downtown/Central LA areas and several patrol divisions show stronger concentration of crime.
- Time, area, victim age, victim sex, and crime type should be read together instead of separately.

## Dataset Note

The source CSV, `Crime_Data_from_2020_to_2024.csv`, is about 244 MB. That is too large for a standard GitHub repo upload, so it is documented in `DATA.md` instead of committed directly.
