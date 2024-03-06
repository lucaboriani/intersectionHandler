import { defineConfig } from "cypress";
/* import codeCoverageTask from "@cypress/code-coverage/task"; */
export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const Task = await import('@cypress/code-coverage/task.js')
      const codeCoverageTask = Task.default
      codeCoverageTask(on, config)
      // const UseBabel = await import('@cypress/code-coverage/use-babelrc.js')
      
      // on("file:preprocessor", UseBabel.default);
      return config
    },
    supportFile: 'cypress/support/e2e.js',
  },
});
