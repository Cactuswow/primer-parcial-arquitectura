CREATE TABLE
    ADMINISTRATOR (
        ID_ADMIN SERIAL,
        NAME_ADMIN VARCHAR(20) NOT NULL,
        EMAIL_ADMIN VARCHAR(50) UNIQUE NOT NULL,
        PASSWORD_ADMIN VARCHAR(20) NOT NULL,
		IMAGE_ADMIN VARCHAR NOT NULL,
        PRIMARY KEY (ID_ADMIN)
    );

INSERT INTO
    ADMINISTRATOR (NAME_ADMIN, EMAIL_ADMIN, PASSWORD_ADMIN, IMAGE_ADMIN)
VALUES
    ('kactuswow', 'kactuswow@gmail.com', 'admin','https://media.istockphoto.com/id/123979928/es/foto/cactus.jpg?s=612x612&w=0&k=20&c=swAi69QXpVSDCi7PX_OzQRdU-3yYMypqhNCoOOvbR8Y='),
    ('Yademir', 'yademir@gmail.com', 'admin','https://static.tumblr.com/44e684098f0ac7c33a6640c20556b923/jxahzkb/fZ5mod2rw/tumblr_static_dog-logo.jpg'),
    ('wasa', 'wasa@gmail.com', 'admin','https://i.pinimg.com/236x/53/c5/8b/53c58be968dd9c29d59a7d430537bad1.jpg');
