# URL Shortener

## Description
Shorten a given Url

## Getting Started
Follow the steps below to get started with the project.

### Prerequisites
- Node.js and npm should be installed on your machine.

### Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Rename the .example.env to .env
4. Replace the credentials as per your needs

### Database Setup
1. Create a new database by running: `npx sequelize-cli db:create`.
2. To add a new model, run: `npx sequelize-cli model:generate --name modelName --attributes attr_name:data_type`.

### Migrations
- Run migrations with: `npx sequelize-cli db:migrate`.
- Rollback migrations with: `npx sequelize-cli db:migrate:undo`.

### Testing
- Run tests with: `npm test`.

### Running the Server
- Start the server in development mode with: `npm run run-dev`.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
