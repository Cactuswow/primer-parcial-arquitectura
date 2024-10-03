import { checkSchema } from "express-validator";

export const getProductValidator = checkSchema(
    {
        idProduct: {
            isInt: { errorMessage: "Debe ser un numero" },
        },
    }, ["params"]
)

export const postCarroValidator = checkSchema(
    {
        name: {
            isString: { errorMessage: "El nombre debe ser una cadena de texto" },
            // isLength: { if:(length>40), errorMessage: "Caracteres maximos: 40"}
        },
        description: {
            isString: { errorMessage: "La descripcion debe ser una cadena de texto" },
        },
        price: {
            isFLoat: { errorMessage: "El precio debe ser numero decimal" },

        }
    }, ["body"]
)