// import globals from "globals";
// import pluginJs from "@eslint/js";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

import {defineConfig} from "eslint/config";


export default defineConfig([
    {
        files:["src/**/*.js","**/*.cjs"],
        ignores:["node_modules","**/*.config.js","!**/eslint.config.js"],
        rules:{
            semi:"error",
            "prefer-const":"error"
        },
        linterOptions:{
            noInlineConfig: true,
            reportUnusedDisableDirectives: "error"
        }
    }
]);
