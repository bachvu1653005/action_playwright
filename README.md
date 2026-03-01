# Playwright Automation Suite

This repository contains Playwright tests written in TypeScript targeting https://the-internet.herokuapp.com/.

## Features Covered

- Basic Authentication
- Drag and Drop

## Technologies & Configuration

- ✅ TypeScript
- ✅ Playwright Test Runner
- ✅ Reporters: HTML, JUnit, JSON
- ✅ Local runs only (no CI integration required)
- ✅ Tests located under `src/tests`
- ✅ `playwright.config.ts` defines base URL and shared options

## Running Tests

Install dependencies:
```bash
npm install
npx playwright install
```

Execute tests:
```bash
npm run test
```

Reports are generated under `playwright-report` and `results/` for JUnit/JSON.

## Playwright MCP

You can use Playwright's [MCP](https://playwright.dev/docs/multi-page) features by running the `npx playwright codegen` command to generate scripts or verify locators interactively.

Example:
```bash
npx playwright codegen https://the-internet.herokuapp.com/drag_and_drop
```

### Securing Credentials
The basic-auth test reads credentials from the environment variables
`BASIC_AUTH_USER` and `BASIC_AUTH_PASS`. If they are not provided it defaults
to `admin`/`admin`.

For local execution, you can export them on your shell:
```bash
export BASIC_AUTH_USER=admin
export BASIC_AUTH_PASS=admin
npm run test
```

When running in GitHub Actions define the variables via repository secrets (e.g.
`BASIC_AUTH_USER` and `BASIC_AUTH_PASS`).
This will open a browser and record actions to assist with creating tests.

---

Files of interest:
- `playwright.config.ts` : configuration
- `src/tests/basic-auth.spec.ts` : basic auth test
- `src/tests/drag-and-drop.spec.ts` : drag & drop test

