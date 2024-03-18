# Server-side Pagination in Node.js with Sequelize & MySQL

This project demonstrates how to implement server-side pagination in a Node.js application using Sequelize ORM with MySQL database.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- Express
- Sequelize
- MySQL database

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/tuanhungdev1/Pagination-in-Node.js-with-Sequelize-MySQL.git
```

2. Navigate into the project directory:

```bash
cd nodejs-sequelize-pagination-mysql
```

3. Install dependencies:

```bash
npm install
```

4. Set up your MySQL database and update the database configuration in `config/config.json` file.

5. Run database migrations to create necessary tables:

```bash
npx sequelize-cli db:migrate
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:3000`.

3. The server will respond with paginated data from the MySQL database.

4. You can customize pagination parameters such as page number, page size, sorting, etc., by modifying the API endpoint or sending query parameters accordingly.

## Credits

This project is inspired by various tutorials and documentation from the following sources:

- [Sequelize](https://sequelize.org/)
- [Express.js](https://expressjs.com/)

Thank you!
