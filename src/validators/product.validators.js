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

    }, []
)