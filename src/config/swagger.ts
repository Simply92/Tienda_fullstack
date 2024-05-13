import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpect = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
    .topbar-wrapper .link {
        content: url(https://st2.depositphotos.com/42546960/45538/v/450/depositphotos_455382696-stock-illustration-letter-logo-design-vector-template.jpg);
        height: 150px;
        width: auto;
    }`,
    customSiteTitle: 'Documentacion REST API Express / TypeScript'
}

export {
    swaggerSpect,
    swaggerUiOptions
}