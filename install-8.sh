#!/bin/bash

# Array of filenames
files=(
    "health-wellbeing.html"
    "family-relationships.html"
    "work-career.html"
    "leisure-entertainment.html"
    "finance-management.html"
    "personal-development.html"
    "environment-community.html"
    "spirituality-meaning.html"
)

# Create each file in the current directory
for file in "${files[@]}"; do
    touch "$file"
    echo "Created file: $file"
done

