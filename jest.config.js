const config = {
    verbose: true,
  
    // Especifica quais arquivos de teste devem ser executados pelo Jest
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  
    // Ignora determinadas pastas ou arquivos durante a execução dos testes
    testPathIgnorePatterns: ["/node_modules/", "__fixtures__"],
  
    // Especifica quais extensões de arquivo devem ser consideradas como módulos pelo Jest
    moduleFileExtensions: ["ts", "js"],
  };
  
  export default config;
  