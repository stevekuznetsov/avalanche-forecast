# Generate TS type definitions from Snowbound's published API
yarn openapi \
    --input https://api.snowobs.com/wx/v1/openapi.json \
    --output ./generated/snowbound \
    --client axios \
    --indent 2
