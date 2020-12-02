sed -i "s/YOUR_FLOTIQ_API_KEY/$YOUR_FLOTIQ_API_KEY/g" ./src/environments/environment.prod.ts
sed -i "s/environment.flotiqApiKey/'$YOUR_FLOTIQ_API_KEY'/g" ./scully.scully-projects-starter.config.ts
