function generateMarkdown(data) {
  return `
  # ${data.Title}
  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  
  
  ## Installation
  You need to run the following command to install dependencies: ${data.Installation}

  ## Usage

  This application was made for ${data.Usage}

  ## License

  The protected license for this project is ${data.License}

  ## Tests

  You need to run the following command to run tests: ${data.Test}

  ## Questions 

  If you have any questions feel free to email me at ${data.Email} or visit my GitHub page at ${data.Username}
`;
}

module.exports = generateMarkdown;
