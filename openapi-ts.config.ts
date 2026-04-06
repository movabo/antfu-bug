import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml',
  output: { path: 'src/api' },
  plugins: [
    { name: '@hey-api/typescript' },
    { name: '@hey-api/sdk', responseStyle: 'data' },
  ],
})
