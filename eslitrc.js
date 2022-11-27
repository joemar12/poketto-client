module.exports = {
  ignorePatterns: ["*.generated.*"],
  rules: {
    // Prevent default react imports like import React from 'react'
    // but still allows other named react imports.
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message: "React default is automatically imported by webpack.",
          },
        ],
      },
    ],

    // other eslint rules
  },
};
