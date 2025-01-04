## Project scripts for django backend

PYI:=python3
SRC:=src/
ADMIN:=manage.py


### COMMANDS #############################################################################

RUN:=runserver
MIG:=makemigrations
DB:=migrate
SUDO:=createsuperuser
STATIC := collectstatic


### SCRIPTS ##############################################################################

help:
	@echo "Commands:"
	@echo "  run      \t\tRuns the server on port 8000"
	@echo "  migrate  \t\tCreates django ORM migrations tables for the database"
	@echo "  db       \t\tUses the created ORM migration tables to commit to the migration"
	@echo "  superuser\t\tAllows creation of an admin to access the admin site"
	@echo "  static   \t\tCollects static asset files"

run:
	${PYI} ${SRC}${ADMIN} ${RUN} --insecure

migrate:
	${PYI} ${SRC}${ADMIN} ${MIG}

db:
	${PYI} ${SRC}${ADMIN} ${DB}

superuser:
	${PYI} ${SRC}${ADMIN} ${SUDO}

static:
	${PYI} ${SRC}${ADMIN} ${STATIC}
