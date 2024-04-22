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
2. Run `npm database:seed` to seed sample data
3. Alternatively, you can import the given sql dump in db/bak.sql

### Migrations
- Run migrations with: `npx sequelize-cli db:migrate` or `npm run migrate:up `.
- Rollback migrations with: `npx sequelize-cli db:migrate:undo`. or `npm run migrate:undo`.

### Testing
- Run tests with: `npm test`.

### Running the Server
- Start the server in development mode with: `npm run run-dev`.

### Sample Requests (For reference see api-doc.json)
- Get all shortened urls: `http://localhost:5000/api/v1/shorten`: curl: `curl --location 'http://localhost:5000/api/v1/shorten'`
- Get a shortened url and redirect: `http://localhost:5000/api/v1/shorten/:shortUrl`
- Create a new shortened url: `http://localhost:5000/api/v1/shorten`: curl: `curl --location 'http://localhost:5000/api/v1/shorten' \
--header 'Content-Type: application/json' \
--data '{
    "fullUrl": "https://github.com/grahamkatana"
}'`

## License
This project is licensed under the MIT License - see the LICENSE file for details.


### Other
1. To add a new model, run: `npx sequelize-cli model:generate --name modelName --attributes attr_name:data_type`.
