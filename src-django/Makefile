## Project scripts for django backend

PYI:=python3
SRC:=src/
ADMIN:=manage.py


### COMMANDS #############################################################################

RUN:=runserver
MIG:=makemigrations
DB:=migrate
SUDO:=createsuperuser


### SCRIPTS ##############################################################################

run:
	${PYI} ${SRC}${ADMIN} ${RUN} --insecure

migrate:
	${PYI} ${SRC}${ADMIN} ${MIG}

db:
	${PYI} ${SRC}${ADMIN} ${DB}

superuser:
	${PYI} ${SRC}${ADMIN} ${SUDO}
