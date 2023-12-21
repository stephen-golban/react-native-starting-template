#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

function initProject(projectName) {
  if (!projectName) {
    console.error("Please specify the project name:");
    console.error("  npx react-native-starting-template <ProjectName>");
    process.exit(1);
  }

  console.log(`Creating a new React Native app in ${projectName}.`);

  // Execute the React Native init command with your template
  const templatePath = path.resolve(__dirname); // Adjust this if your template is in a different directory
  const command = `npx react-native init ${projectName} --template file:${templatePath}`;

  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error("Failed to create a React Native project. Please try again.");
    process.exit(1);
  }
}

// Main script execution
const projectName = process.argv[2];
initProject(projectName);
