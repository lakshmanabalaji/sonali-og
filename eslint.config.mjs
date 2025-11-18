import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore tooling scripts that use CommonJS
    "scripts/**",
  ]),
  // Some project-specific rule relaxations to allow in-repo legacy pages to pass lint
  {
    rules: {
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-html-link-for-pages': 'warn'
    }
  },
]);

export default eslintConfig;
