import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/*.d.ts"],
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "error"
      
    }
  }
];