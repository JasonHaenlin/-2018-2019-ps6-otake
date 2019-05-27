-- To be inject in postgresql database with admin privileges
DROP DATABASE IF EXISTS ps6_dev;
DROP DATABASE IF EXISTS ps6_prod;

DROP OWNED BY otake_dev CASCADE;
DROP OWNED BY otake_prod CASCADE;
DROP OWNED BY otake_user CASCADE;

DROP user IF EXISTS otake_dev;
DROP user IF EXISTS otake_prod;
DROP user IF EXISTS otake_user;

CREATE user otake_dev WITH
LOGIN
NOSUPERUSER
NOCREATEDB
NOCREATEROLE
INHERIT
NOREPLICATION
CONNECTION LIMIT 5
PASSWORD 'my_pwd';

CREATE user otake_prod WITH
LOGIN
NOSUPERUSER
NOCREATEDB
NOCREATEROLE
INHERIT
NOREPLICATION
CONNECTION LIMIT 10
PASSWORD 'my_pwd';

CREATE user otake_user WITH
LOGIN
NOSUPERUSER
NOCREATEDB
NOCREATEROLE
INHERIT
NOREPLICATION
CONNECTION LIMIT 10
PASSWORD 'my_pwd';

CREATE DATABASE ps6_dev WITH OWNER otake_dev;
CREATE DATABASE ps6_prod WITH OWNER otake_prod;

REVOKE CONNECT ON DATABASE ps6_dev FROM public;
REVOKE CONNECT ON DATABASE ps6_prod FROM public;

GRANT ALL PRIVILEGES ON DATABASE ps6_dev TO otake_dev;
GRANT ALL PRIVILEGES ON DATABASE ps6_prod TO otake_prod;

GRANT CONNECT ON DATABASE ps6_prod TO otake_user;

-- manage privileges on database ps6-dev
\c ps6_dev

REVOKE all privileges
    ON SCHEMA public FROM public;

REVOKE ALL
    ON ALL TABLES IN SCHEMA public
    FROM public;

GRANT ALL ON SCHEMA public TO otake_dev;

-- manage privileges on database ps6-prod
\c ps6_prod

REVOKE all privileges
    ON SCHEMA public FROM public;

REVOKE ALL
    ON ALL TABLES IN SCHEMA public
    FROM public;

REVOKE CREATE ON SCHEMA public FROM otake_user;

GRANT ALL ON SCHEMA public TO otake_prod;

GRANT USAGE ON SCHEMA public TO otake_user;

SET SESSION authorization otake_prod;
-- otake_user will be able to update and see the database
ALTER DEFAULT PRIVILEGES
GRANT ALL ON TABLES TO otake_prod;

GRANT USAGE ON SCHEMA public TO otake_user;

ALTER DEFAULT PRIVILEGES
GRANT SELECT, INSERT, UPDATE, DELETE
    ON TABLES TO otake_user;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT INSERT, SELECT, UPDATE, DELETE
    ON TABLES TO otake_user;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO otake_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT USAGE, SELECT ON SEQUENCES TO otake_user;
