CREATE TABLE
    PRODUCT (
        ID_PRODUCT SERIAL,
        NAME_PRODUCT VARCHAR(40) NOT NULL,
        DESCRIPTION_PRODUCT VARCHAR(120) NOT NULL,
        PRICE_PRODUCT NUMERIC NOT NULL,
        CONSTRAINT CK_PRICE CHECK (PRICE_PRODUCT > 0),
        PRIMARY KEY (ID_PRODUCT)
    );

INSERT INTO
    PRODUCT (NAME_PRODUCT, DESCRIPTION_PRODUCT, PRICE_PRODUCT)
VALUES
    (
        'Computadora portátil',
        'Computadora de alto rendimiento para trabajo y juegos',
        1500.00
    ),
    (
        'Teléfono inteligente',
        'Teléfono de última generación con tecnología avanzada',
        800.00
    ),
    (
        'Audífonos',
        'Audífonos con cancelación de ruido de alta calidad',
        200.00
    ),
    (
        'Silla ergonómica',
        'Silla ergonómica ideal para largas horas de trabajo',
        350.00
    ),
    (
        'Monitor',
        'Monitor 4K con pantalla ultra ancha y alta definición',
        600.00
    ),
    (
        'Teclado mecánico',
        'Teclado mecánico con retroiluminación RGB',
        120.00
    ),
    (
        'Ratón inalámbrico',
        'Ratón inalámbrico ergonómico con alta precisión',
        75.00
    );
