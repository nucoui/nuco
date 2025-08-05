---
applyTo: '**'
---
# Technical Knowledge

Please understand the following knowledge. These are assumed to be known when prompts are entered.

### Directory Structure
- This project is structured as a monorepo.
  - `<root>`: Project root directory
  - `<root>/config`: Project configuration files. Contains ESLint configuration.
  - `<root>/packages/**`: Source code for libraries and common modules. Source code for libraries and common modules used in applications.
    - `<root>/packages/core`: Core package of the project. Users will use this package.
    - `<root>/packages/reactivity`: Package to make variables used in JSX syntax reactive. Uses alien-signals, customized to provide our own implementation.
    - `<root>/packages/runtime`: Package providing functionality to convert JSX syntax to custom element classes. Also includes implementation to make code transpiled by tsc's react-jsx reactive using packages/reactivity.
    - `<root>/packages/util`: Package providing utility functions for the project. This package is used by other packages.
  - `<root>/playgrounds/**`: Sample code for the project. Stores sample code that works using @chatora/core.
- This project uses ESLint for linting and formatting.
- This project is written in TypeScript.
- This project is tested with Vitest.
- Commands use pnpm.
- All commands can be executed from the workspace root. When you open the terminal, move to the workspace root.
  - When executing commands, always check which directory you are in before executing the command. Commands are assumed to be executed from the workspace root.
  - Ways to access commands for each project are as follows:
    - `pnpm cfg`: Executes commands for `<root>/config`.
    - `pnpm p:core`: Executes commands for `<root>/packages/core`.
    - `pnpm p:rtv`: Executes commands for `<root>/packages/reactivity`.
    - `pnpm p:rt`: Executes commands for `<root>/packages/runtime`.
    - `pnpm p:ut`: Executes commands for `<root>/packages/util`.
    - `pnpm p:react`: Executes commands for `<root>/packages/react`.
    - `pnpm p:vue`: Executes commands for `<root>/packages/vue`.
    - `pnpm p:svelte`: Executes commands for `<root>/packages/svelte`.
    - `pnpm pg:<project-name>`: Executes commands for `<root>/playgrounds/<project-name>`.

### Commands
When executing commands, be sure to go to the project root of this project before executing them.
```bash
cd <User>/<any path>/<chatora or tora> && commands ...
```