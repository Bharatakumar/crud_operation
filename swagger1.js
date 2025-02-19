const swaggerJsDoc = require("swagger-jsdoc");


const options = {
    swaggerDefinition: {
        swagger: "2.0",
        //openapi: "3.1.0",
        info: {
            title: 'students list API',
            version: '1.0.0',
            description: 'A simple CRUD API for managing students list',
            contact: {
                name: 'Developer',
                email: 'developers@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:7000',
                description: 'Development Server'
            },
            {
                url: 'https://localhost:7000',
                description: 'Production Server'
            }
        ],
        paths: {
            [`/`]: {
                get: {
                    tags: ['Route Test'],
                    summary: 'Check if the GET method is working',
                    description: 'This API is used to check if the GET method is working or not',
                    responses: {
                        '200': {
                            description: 'This RESTful API is successfully working',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Success',
                                        data: { message: 'Welcome to new learn' }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            ['/getallstudents']: {
                get: {
                    tags: ['User'],
                    summary: 'Get data from DataBase Based On User Name',
                    description: 'This API is used to get user data from user DataBase based on user Name',
                    parameters: [
                        {
                            in: 'path',
                            name: 'name',
                            schema: {
                                type: 'string',
                                required: true
                            },
                           
                            description: 'User Name Parameter'
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            name: {
                                                type: 'string',
                                                required:true
                                            },
                                            student_id: {
                                                type: 'string',
                                               required:true
                                                
                                            },
                                            phone_nbr: {
                                                type: 'string',
                                                required:true
                                            },
                                            school_name: {
                                                type: 'string',
                                                required:true
                                            }
                                           
                                        }
                                    },
                                    example: {
                                        name: 'Smart',
                                        student_id: 'Shetty',
                                        phone_number: '1234567890',
                                        school_name: 'kv'
                                       
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not Found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Please try first name',
                                        error: 'Please try first name'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
        schemes: ['http'], // Define the protocol (HTTP or HTTPS)
    },
    apis: ['./index.js'], // Path to the file where the API is defined
};


const swaggerDocs = swaggerJsDoc(options); // swaggerJsDoc should be called as a function

module.exports = { swaggerDocs }; // This correctly exports the generated Swagger documentation
