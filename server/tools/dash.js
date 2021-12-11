
var shell = require('shelljs');

const program = require('commander');

function setupDb() {

    if (!shell.which("docker")) {
        shell.echo("unable to find docker - ensure docker command is available");
        shell.exit(1);
    }
    shell.exec(
        `docker run -d -p 5433:5432 --name payengine -e POSTGRES_USER=payengineuser -e POSTGRES_PASSWORD=payenginepassword -e POSTGRES_DB=payengine postgres`
    );
    shell.echo(
        `Created dev db container: payengine it will run when you start the backend`
    );
}

function serveBe() {

    runMigrations();

    shell.exec(
        `npm start`
    );

}

function runSeeds() {
    shell.echo(
        `Reseeding`
    );
    shell.exec(
        `knex seed:run`
    )
}

function runMigrations() {
    shell.echo(
        `Running the migrations`
    );
    shell.exec(
        `knex migrate:latest`
    );
}

program
    .command("setup-db")
    .description("Bootstraps the dev database")
    .action(setupDb);

program
    .command("seed")
    .description("Seeds the backend")
    .action(runSeeds);

program
    .command("serve-be")
    .description("Serves the backend")
    .action(serveBe);

program.parse(process.argv);
