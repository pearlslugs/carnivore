// module.exports = {
//   resolve: {
//     alias: {
//       "remote-component.config.js": __dirname + "/remote-component.config.js",
//     },
//   },
// };

const withYaml = require("next-plugin-yaml");

module.exports = withYaml({
  
  resolve: {
    alias: {
      "remote-component.config.js": __dirname + "/remote-component.config.js",
    },
  },
});

