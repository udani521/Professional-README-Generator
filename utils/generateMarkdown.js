
/// function to generate markdown for README
function generateMarkdown(data) {
  const gitHub = data.github ? `Visit my [GitHub](https://github.com/${data.github}) profile\n` : "";


  
  const licenseBadge = data.license
    ? `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})\n\n`
    : '';

  let draftMarkdown = `# ${data.title}  
  ## ${licenseBadge}

## Description
${data.description}


## Table Of Contents
- [Title](#title)   
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributor)
- [Tests](#test)
- [Questions](#questions)


## Installation

${data.includeInstallation ? '```bash\n' + data.installation + '\n```' : 'No installation instructions provided.'}

## Usage

${data.usage ? '```bash\n' + data.usage + '\n```' : 'No usage guidelines provided.'}

## Contributors

${data.contributors ? '```bash\n' + data.contributors + '\n```' : 'No contributors  provided.'}

## Tests

${data.tests ? '```bash\n' + data.tests + '\n```' : 'No tests provided.'}

## License

${licenseBadge}

`;

  // Questions section
  draftMarkdown += `## Questions?\n`;
  draftMarkdown += `For any questions, please contact me with the information below:\n`;

  // GitHub section
  draftMarkdown += `[GitHub](https://github.com/${data.github || 'your-username'})\n`;

  // If GitHub email is not null, add to Developer section
  if (data.email !== null) {
    draftMarkdown += `[E-mail](mailto:${data.email || 'your-email'})\n`;
  }

  // Return markdown
  return draftMarkdown;   
}

// exporting file to index.js
module.exports = generateMarkdown;
