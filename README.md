<br />
<p align="center">
  <a href="https://github.com/jvwasquevite/solid-nodejs-api">
    <img src="https://raw.githubusercontent.com/jvwasquevite/readme/main/logo.png?token=AMCADBC6EWPA6XJUKSPKSHLA7FU6W" alt="Logo">
  </a>

  <h3 align="center">SOLID Node.js API</h3>

  <p align="center">
    Simple REST API developed with SOLID principles
    <br />
    <br />
    <a href="https://github.com/jvwasquevite/solid-nodejs-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/jvwasquevite/solid-nodejs-api/issues">Request Feature</a>
    ·
    <a href="https://github.com/jvwasquevite?tab=repositories">More Projects</a>
  </p>
</p>

## About The Project

This project was developed with [Node.js](https://nodejs.org/en/) + [Nodemailer](https://nodemailer.com/about/) to study SOLID architectural principles.

### Built With

* [Express](https://expressjs.com/pt-br/)
* [TypeScript](https://www.typescriptlang.org/)
* [Nodemailer](https://nodemailer.com/about/)

### Main Features

* [Package by Feature](https://phauer.com/2020/package-by-feature/) folder structure
* SOLID layered architecture using OOP principles
* Sending email feature with [Nodemailer](https://nodemailer.com/about/) + [Mailtrap](https://mailtrap.io/)

### More Information

This project was developed based on <a href="https://www.youtube.com/watch?v=vAV4Vy4jfkc"><strong>this video</strong></a>.

### Directory Structure

```
src
├── entities                # Represents a table on database
├── providers               # External APIs connections + implementations
│   └── implementations
├── repositories            # Implements auxiliar methods for entity/database management
│   └── implementations
├── useCases                # Use case, controller, DTO and test files organized by feature
│   └── CreateUser
│       └── index.ts        # Implements CreateUser use case with controller
└── routes.ts
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/en/) runtime builder
* [Yarn](https://classic.yarnpkg.com/en/) package manager

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/jvwasquevite/solid-nodejs-api.git
   ```
2. Install packages with Yarn:
   ```sh
   yarn install
   ```

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.

## Acknowledgements

* How to create a Node.js API using SOLID principles
* How to create an scalable folder structure organized by feature
* How to structure a project using [Use Case Diagrams](https://en.wikipedia.org/wiki/Use_case_diagram)
* How to use Nodemailer for sending emails from API

## Get in touch with me

Get more information about me at [jvwasquevite.com](https://jvwasquevite.com/) or email me at [joao@jvwasquevite.com](mailto:joao@jvwasquevite.com).
