## Docker Assignment - Agile Software Practice.

__Name:__ Haiqing Ji

__Demo:__ https://youtu.be/jN0eJQvO5b4

### Database Seeding.

To automate the initialization (seeding) of the application database, I introduced a service called seed in the docker-compose.dev.yml file. This service is started in the development environment and is used to insert initial data into MongoDB. The specific implementation steps are as follows:

Create the seed.js script: This script uses the mongodb Node.js client library to connect to MongoDB, reads the initial data from the seeding.json file, and then inserts this data into the movies collection of the database.

Configure the seed service in Docker Compose: In docker-compose.dev.yml, I defined a seed service to execute the seed.js script. When starting the development environment, the seed service depends on the startup of the mongodb service and runs seed.js after MongoDB is ready to complete the database initialization.

Differentiate between development and production environments: To ensure that seeding is only performed in the development environment, I disabled the seed service in the docker-compose.prod.yml file, and the production environment will not start the service, thereby avoiding the risk of repeated database initialization.

### M.ulti-Stack.
To support independent configurations for development and production environments, I created two separate Docker Compose files: docker-compose.dev.yml and docker-compose.prod.yml. These two files provide different configurations for development and production environments respectively:

1.Development environment (docker-compose.dev.yml):
Enable the mongo-express service to facilitate database management through the web interface during development.
Enable the seed service to automatically insert initial data into MongoDB for development and testing.
Turn on write operations and allow more detailed log output.

2.Production environment (docker-compose.prod.yml):
Disable the mongo-express and seed services to improve the security and performance of the production environment.
Disable database initialization to avoid repeated data insertion.
Turn off unnecessary debugging and logging functions to ensure the stability of the production environment.
By using two separate Compose files, I can easily switch between development and production environments and meet the needs of different environments.
