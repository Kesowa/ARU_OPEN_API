### Steps for generating OpenAPI Spec Sheet :

- Install swagger-cli :
  `npm install -g swagger-cli`

- Go into the openAPI folder :
  `cd server/openAPI`

- Use swagger-cli to generate the spec sheet :
  `swagger-cli bundle openAPI.yaml --outfile result.yaml --type yaml`

- Install redoc-cli
  `npm i -g redoc-cli`

- Generate static html
  `redoc-cli build result.yaml`

After this, the finally generated documentation will be the `redoc-static.html` file