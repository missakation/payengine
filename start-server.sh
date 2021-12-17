sleep 10; # waiting for the database container to start. 
knex migrate:latest; 
knex seed:run;
npm run start;
