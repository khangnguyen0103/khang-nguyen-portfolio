# Notebook Markdown: Los Angeles Crime Analysis

## Purpose

The notebook studies crime records from 2020 to 2024 and asks:

- Which victim age and sex groups appear most affected?
- How often are crimes committed across the period?
- Which areas look riskier for different age and sex groups?
- What times may be more dangerous?
- Which crime types drive the observed pattern?

## Data Cleaning

The notebook loads `Crime_Data_from_2020_to_2024.csv`, renames important columns into cleaner Python-friendly names, and separates date and time fields so the analysis can compare trends over time.

Important fields include:

- `date_reported`
- `date_occurred`
- `time_occurred`
- `area`
- `area_name`
- `crime_description`
- `vict_age`
- `vict_sex`

## General View

The analysis connects these dimensions:

- Victim age and victim sex for demographic impact.
- Victim age and area for location-based risk.
- Victim sex and area for group-specific concentration.
- Time and area for temporal risk.
- Crime type and area for pattern explanation.

## Full Analysis Flow

1. Overall crime trend.
2. Who is most affected.
3. Where risk is concentrated.
4. When crime peaks.
5. Which crime types drive the pattern.

## Highlighted Findings

- The 25-34 age group experiences the highest crime count across all ages.
- Female victims are consistently more affected than male victims across most age categories.
- Young adults, especially ages 18-34, account for a large portion of incidents.
- Downtown/Central LA areas show higher crime concentration than many surrounding areas.
- Location-based intervention may be useful because crime is geographically concentrated.

## Portfolio Framing

This project belongs in the portfolio as an analysis project because it shows the full path from messy public data to organized questions, visual evidence, and practical interpretation.
