CREATE TABLE
    PRODUCT (
        ID_PRODUCT SERIAL,
        NAME_PRODUCT VARCHAR(40) NOT NULL,
        DESCRIPTION_PRODUCT VARCHAR(120) NOT NULL,
        PRICE_PRODUCT NUMERIC NOT NULL,
		IMAGE_PRODUCT VARCHAR NOT NULL,
		RATING_PRODUCT NUMERIC(2, 1),
		STOCK_PRODUCT NUMERIC NOT NULL,
        CONSTRAINT PRICE_PRODUCT_CK CHECK (PRICE_PRODUCT > 0),
		CONSTRAINT STOCK_PRODUCT_CK CHECK (STOCK_PRODUCT > 0),
        PRIMARY KEY (ID_PRODUCT)
    );

INSERT INTO
    PRODUCT (NAME_PRODUCT, DESCRIPTION_PRODUCT, PRICE_PRODUCT,IMAGE_PRODUCT, RATING_PRODUCT, STOCK_PRODUCT)
VALUES
    (
        'Computadora portátil',
        'Computadora de alto rendimiento para trabajo y juegos',
        1500.00,
		'https://electromuebles.com.co/wp-content/uploads/2023/09/612C0LA-2_T1679070742.png',
		4.5,
		120
    ),
    (
        'Teléfono inteligente',
        'Teléfono de última generación con tecnología avanzada',
        800.00,
		'https://s.alicdn.com/@sc04/kf/H4aaee4078f734b728c87cc1a3acbcb7ej.jpg_300x300.jpg',
		4.9,
		20
    ),
    (
        'Audífonos',
        'Audífonos con cancelación de ruido de alta calidad',
        200.00,
		'https://aiwalatinoamerica.com/wp-content/uploads/2023/11/AWTWSD4B-01.webp',
		4.6,
		60
    ),
    (
        'Silla ergonómica',
        'Silla ergonómica ideal para largas horas de trabajo',
        350.00,
		'https://actiucdn.net/uploads/images/modules/435/img-611-4.png',
		4.0,
		30
    ),
    (
        'Monitor',
        'Monitor 4K con pantalla ultra ancha y alta definición',
        600.00,
		'https://pskmegastore.com/img/p/1/7/6/0/3/0/9/1760309.jpg',
		4.5,
		45
    ),
    (
        'Teclado mecánico',
        'Teclado mecánico con retroiluminación RGB',
        120.00,
		'https://cougargaming.com/global/img/products/keyboards/attackx3/product-image.png',
		4.8,
		70
    ),
    (
        'Ratón inalámbrico',
        'Ratón inalámbrico ergonómico con alta precisión',
        75.00,
		'https://xtech-frontend.s3.amazonaws.com/media/img/Image%20Color%20XTM-315BL.png',
		3.5,
		35
    );
