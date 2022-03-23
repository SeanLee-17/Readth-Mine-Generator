function licenseBadge(license) {
    if (license) {
        if (license === 'Apache 2.0') {
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (license === 'MIT') {
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else if (license === "MPL 2.0") {
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        } else if (license === "Boost 1.0") {
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        } else {
            return ""
        }
    } else {
        return "";
    }
}

function licenseLinks(license) {
    if (license) {
        if (license === 'Apache 2.0') {
            return "https://www.apache.org/licenses/LICENSE-2.0"
        } else if (license === 'MIT') {
            return "https://www.mit.edu/~amini/LICENSE.md"
        } else if (license === "MPL 2.0") {
            return "https://www.mozilla.org/en-US/MPL/2.0/"
        } else if (license === "Boost 1.0") {
            return "https://www.boost.org/LICENSE_1_0.txt"
        } else {
            return ""
        }
    } else {
        return "";
    }
}

function licenseOnReadMe(license) {
    if (license) {
        return `
        ## License

        ${licenseBadge(license)}
        ${licenseLinks(license)}
        `
    }
}

function readMeMaker(data) {
    return `
    # ${data.title}

    ${licenseOnReadMe(data.license)}

    ## Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)

    - [Usage](#usage)

    - [Contributing](#contributing)

    - [Tests](#tests)

    - [Questions](#questions)

    - [Links](#links)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contributing}

    ## Test

    ${data.tests}

    ## Questions

    Github Username: ${data.github}

    ## Links 
    
    ${data.links}

    `;
}

module.exports = readmemaker;