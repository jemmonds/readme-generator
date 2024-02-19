// function to generate markdown for README
const licenseBadges = {
  "MIT License": "MIT",
  "GNU": "GNU",
  "BSD-2-Clause": "BSD_2",
  "Boost Software": "Boost_Software"
};

function generateMarkdown(data) {
  return `# ${data.title}
![License Badge](https://img.shields.io/badge/License-${licenseBadges[data.license]}-blue)
## Description
    ${data.description}
## Installation
 ${data.installation}
## Usage
 ${data.usage}
##License
 ${data.license}
## Github Profile 
 Git Hub (https://github.com/${data.git})
 ## Questions
 If you have any questions please contact ${data.questions}`
}

module.exports = generateMarkdown;