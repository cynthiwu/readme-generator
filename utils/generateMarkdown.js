
//Function to create the img src link//

const badgeShorts = 
  {
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "MIT",
      "Boost Software 1.0",
      "The Unlicense",
      "None",
    ],
    src: [
      "AGPL%20v3-blue",
      "GPLv3-blue",
      "LGPL%20v3-blue",
      "MPL%202.0-brightgreen",
      "Apache%202.0-blue",
      "MIT-yellow",
      "Boost%201.0-lightblue",
      "Unlicense-blue",
    ]
  };

function badge(license) {
  
  let i = badgeShorts.choices.indexOf(license);
  if (license === "None") {
    return "";
  }

  return `![github license](https://img.shields.io/badge/license-${badgeShorts.src[i]}.svg)`
};

// Function to generate markdown content for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${badge(data.license)}
   
  Explore the [project page](${data.repository})

  View it live on [github-pages](${data.live})

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Demo](#demo)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#contact)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ### Demo

  Watch the demonstration to see how this project works

  ![Project Demo](${data.gif})

  ## Built With

  This project was built using:

  ${data.builtwith}


  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Follow

  **GitHub**: [https://github.com/${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
