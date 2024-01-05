// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseBadge = [];


function renderLicenseBadge(license) {
  if (license !== "none") {
    /*
    switch (license) {
      case 'Apache License 2.0':
        licenseBadge = [[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)];
        break;
    }
    */
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
${licenseBadge}\n
## Description\n
${data.description}\n
## Table of Contents\n
## Installation\n
${data.installation}\n
## Usage\n
${data.usage}\n
## License\n
${renderLicenseBadge(data.license)}\n
## Contributing\n
${data.contribution}\n
## Tests\n
${data.tests}\n
## Questions\n
My GitHub username is ${data.gitHub}, and my profile can be accessed here: https://github.com/${data.gitHub}\n
For additional questions, I can be emailed at: ${data.email}
`;
}

module.exports = generateMarkdown;
