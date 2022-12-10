# Run

```bash
yarn run start --host 0.0.0.0
```

# build

```bash
yarn build
```

# Algolia update

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```