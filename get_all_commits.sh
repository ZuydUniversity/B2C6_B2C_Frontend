#!/bin/bash

# Fetch all branches and tags
git fetch --all
git fetch --all --tags

# Create or clear the output file
output_file="main_and_merged_commits_frontend.txt"
> $output_file

# Ensure we are on the main branch
git checkout main

# Get a list of branches merged into main
merged_branches=$(git branch --merged main | grep -v "main")

# Iterate through each branch and get the log
for branch in main $merged_branches; do
    echo "Processing branch: $branch" >&2
    git log $branch --pretty=format:"%an, %ad, %H, %s, $branch" --date=iso >> $output_file
done

echo "All commits from main and merged branches have been written to $output_file"
