function badge(license) {
  if (license === "None") {
    return "";
  }

  return `![github license](https://img.shields.io/badge/license-${license.split(" ").join("-")}-blue.svg)`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge(data.license)}
  
Content


`;
}

module.exports = generateMarkdown;
