import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // The existing Pages Router site consistently uses native anchors for
      // internal navigation. Migrating navigation behavior is a separate,
      // user-visible change from establishing the quality gate.
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    files: ['postcss.config.js', 'tailwind.config.js'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['src/components/engineering/EngineeringWorkspace.jsx'],
    rules: {
      // This preserved legacy workspace derives calculator display state in
      // effects and is not part of the routed Engineering Division UI.
      'react-hooks/set-state-in-effect': 'off',
      'react/jsx-no-comment-textnodes': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'build/**',
    'coverage/**',
    'node_modules/**',
    'out/**',
    'playwright-report/**',
    'test-results/**',
  ]),
]);
