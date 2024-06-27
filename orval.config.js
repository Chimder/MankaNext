module.exports = {
  main: {
    // input: "./src/shared/Api/swagger.yaml", // Укажите URL вашего Swagger-документа
    input: "http://localhost:4000/yaml",
    output: {
      target: "./src/shared/Api/generatedv2.ts", // Укажите папку для генерации файлов API
      override: {
        mutator: {
          path: "./src/shared/Api/axios.instance.ts",
          name: "customInstance",
        },
      },
    },
  },
};
