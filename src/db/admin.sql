CREATE TABLE
    ADMINISTRATOR (
        ID_ADMIN SERIAL,
        NAME_ADMIN VARCHAR(20) NOT NULL,
        EMAIL_ADMIN VARCHAR(50) UNIQUE NOT NULL,
        PASSWORD_ADMIN VARCHAR(20) NOT NULL,
        PRIMARY KEY (ID_ADMIN)
    );

INSERT INTO
    ADMINISTRATOR (NAME_ADMIN, EMAIL_ADMIN, PASSWORD_ADMIN)
VALUES
    ('kactuswow', 'kactuswow@gmail.com', 'admin'),
    ('Yademir', 'yademir@gmail.com', 'admin'),
    ('wasa', 'wasa@gmail.com', 'admin');
