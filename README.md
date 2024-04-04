<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center"></h3>

  <p align="center">
    <br />
    <a href="https://github.com/rintendou/AkhtarsList">View Demo</a>
    ·
    <a href="https://github.com/rintendou/AkhtarsList/issues">Report Bug</a>
    ·
    <a href="https://github.com/rintendou/AkhtarsList/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![AkhtarsList Screenshot][product-screenshot]](https://github.com/rintendou/AkhtarsList)

AkhtarsList is a highly responsive online auction platform that allows users to sell and bid on items in a swift, secure, and convenient environment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![TypeScript][TypeScript]][TypeScript-url]
-   [![MongoDB][MongoDB]][MongoDB-url]
-   [![Express][Express.js]][Express-url]
-   [![React][React.js]][React-url]
-   [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To begin, clone this repo onto your local machine and follow the steps accordingly.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   cd
    Open two terminals and change directories into the following directories

    ```sh
        cd ../AkhtarsList/client
    ```

    ```sh
        cd ../AkhtarsList/server
    ```

-   npm
    Install the requires packages in both directories
    ```sh
        npm i
    ```

### Installation

_This project relies on external services such as MongoDB, JWT, Cloudinary._

1. Clone the repo

    ```sh
    git clone https://github.com/kankenny/AkhtarsList.git
    ```

2. Create two `.env` files in the `client` and `server` directory. Env file examples are placed within the client and server directories for reference.
   * In the `client` `.env`, fill in the values of following variables:  
   ```sh
    VITE_BACKEND_SERVER_PORT={PORT_NUMBER}
    VITE_CLOUDINARY_URL={CLOUDINARY_API_URL}
   ```
   * In the `server` `.env`, fill in the values of the following variables  
   ```sh
    PORT={PORT_NUMBER}
    MONGODB_URL={MONGODB_API_KEY}
    JWT_KEY={JWT_KEY}
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Backlogs

### High Priority

1.) Validation Libraries and ReactHookForm (Zod  & RHF) [currently being implemented by KJB]   
2.) Communication Feature  

### Low Priority
1.) Fix bug where the profile route doesn't initially render the admin link. I.e. it requires a refresh to show the admin link when the authenticated user is an admin

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Danny Chen - dannychen8102@gmail.com
- Kennette James Basco - kenji.maddela01@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/rintendou/AkhtarsList.svg?style=for-the-badge
[contributors-url]: https://github.com/rintendou/AkhtarsList/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rintendou/AkhtarsList.svg?style=for-the-badge
[forks-url]: https://github.com/rintendou/AkhtarsList/network/members
[stars-shield]: https://img.shields.io/github/stars/rintendou/AkhtarsList.svg?style=for-the-badge
[stars-url]: https://github.com/rintendou/AkhtarsList/stargazers
[issues-shield]: https://img.shields.io/github/issues/rintendou/AkhtarsList.svg?style=for-the-badge
[issues-url]: https://github.com/rintendou/AkhtarsList/issues
[license-shield]: https://img.shields.io/github/license/rintendou/AkhtarsList.svg?style=for-the-badge
[license-url]: https://github.com/rintendou/AkhtarsList/LICENSE.txt
[product-screenshot]: images/front-page.jpg
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
