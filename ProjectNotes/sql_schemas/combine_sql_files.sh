#!/bin/bash

# Output file
OUTPUT_FILE="postgres_analytics_data_combined.sql"

# Remove the output file if it exists
if [ -f "$OUTPUT_FILE" ]; then
    rm "$OUTPUT_FILE"
fi

# Combine all the SQL files in order
cat postgres_analytics_data_part1.sql > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
cat postgres_analytics_data_part2.sql >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
cat postgres_analytics_data_part3.sql >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
cat postgres_analytics_data_part4.sql >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
cat postgres_analytics_data_part5.sql >> "$OUTPUT_FILE"

echo "Combined all SQL files into $OUTPUT_FILE"
