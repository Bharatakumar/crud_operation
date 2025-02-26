/*const swaggerJsDoc = require("swagger-jsdoc");


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
                                        phone_nbr: '1234567890',
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
*/
const { application, response } = require("express");

const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
        // swagger: "2.0",
        openapi: "3.1.0",
        info: {
            title: 'Students List API',
            version: '1.0.0',
            description: 'A simple CRUD API for managing students list',
            contact: {
                name: 'Developer',
                email: 'developers@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:4000',
                description: 'Development Server'
            },
            {
                url: 'https://localhost:4000',
                description: 'Production Server'
            }
        ],
        // basePath: '/', // Set the base path
        schemes: ['http'], // Define the protocol (HTTP or HTTPS)


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
                    summary: 'Get all students from the database',
                    description: 'This API is used to retrieve all student records from the database.',
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                name: { type: 'string' },
                                                student_id: { type: 'string' },
                                                phone_nbr: { type: 'string' },
                                                school_name: { type: 'string' }
                                            }
                                        }
                                    },
                                    example: [
                                        {
                                            name: 'Smart',
                                            student_id: 'Shetty',
                                            phone_nbr: '1234567890',
                                            school_name: 'kv'
                                        }
                                    ]
                                }
                            }
                        },
                        '404': {
                            description: 'No students found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'No student records found',
                                        error: 'Database empty'
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
            ['/addNewStudent']: {
                post: {
                    tags: ['User'],
                    summary: 'Add a new student',
                    description: 'This API is used to add a new student record to the database.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: { type: 'string', required: true },
                                        student_id: { type: 'string', required: true },
                                        phone_nbr: { type: 'string', required: true },
                                        school_name: { type: 'string', required: true }
                                    }
                                },
                                example: {
                                    name: 'John Doe',
                                    student_id: 'JD123',
                                    phone_nbr: '9876543210',
                                    school_name: 'XYZ High School'
                                }
                            }
                        }
                    },
                    responses: {
                        '201': {
                            description: 'Student added successfully',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Student added successfully',
                                        data: {
                                            name: 'John Doe',
                                            student_id: 'JD123',
                                            phone_nbr: '9876543210',
                                            school_name: 'XYZ High School'
                                        }
                                    }
                                }
                            }
                        },
                        '400': {
                            description: 'Invalid request body',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Bad request',
                                        error: 'Missing required fields'
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
            ['/updatestudent/{id}']: {
                put: {
                    summary: "update student name",
                    description: "This API is used to update the name of a student in the database.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: {
                                type: "string"
                            }


                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        "name": {
                                            type: "string",
                                            example: "vinay"
                                        },
                                        "student_id": {
                                            type: "string"
                                        },

                                        "school_name": {
                                            type: "string"

                                        },
                                        "phone_nbr": {
                                            type: "string"
                                        }



                                    }
                                }
                            }
                        }

                    },
                    responses: {
                        "200": {
                            description: "student updated successfully",
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Student added successfully',
                                        data: {
                                            name: 'John Doe',
                                            student_id: 'JD123',
                                            phone_nbr: '9876543210',
                                            school_name: 'XYZ High School'
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            description: "student not found"
                        },
                        "500": {
                            description: "Error updating item"
                        }
                    }
                }

            },
            ['/delete/{name}']: {
                delete: {
                    summary: "delete student",
                    description: "this api is used to delete student from database",
                    parameters: [

                        {
                            name: "name",
                            in: "path",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "student deleted successfully",
                            content: {
                                "application/json": {
                                    example: {
                                        message: "student deleted successfully"
                                    }

                                }

                            }
                        },
                        "404": {
                            description: "student not found"
                        },
                        "500": {
                            description: "Error deleting item"
                        }
                    }
                }
            }

        },
        components: {
            schemas: {
                students: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            description: "name of the student"
                        },
                        student_id: {
                            type: "string",
                            description: "student id"
                        },
                        school_name: {
                            type: "string",
                            description: "school name"
                        },
                        phone_nbr: {
                            type: "string",
                            description: "phone number"
                        }
                    },
                    required: ["name", "student_id", "school_name", "phone_nbr"]
                },
                student_list: {
                    type: "object",
                    properties: {
                        data: {
                            description: "array of student documents",
                            type: "array",
                            items: {
                                "$ref": "#/components/schemas/students"
                            }
                        }
                    },
                    required: ["data"]
                },
                oneLineResponse: {
                    type: "string"
                }
            }, 
			securitySchemas:{
				auth:{
					type:"oaut2",
					flows:{
						authorizationCode:{
							authorizationUrl:"http://localhost:3000/login",
							tokenUrl:"http://localhost:3000/login/token",
							scopes:{
								"read:Grocery":"read Grocery List",
								"write:Grocery":"Modify/Update Grocery Information"
							}
						}
					}
				}
			}
        },
        tags: ["check", "CRUD"]

    },
    apis: ['./index.js'], // Path to the file where the API is defined
};
// apis: ['./index.js'], // Path to the file where the API is defined


const swaggerDocs = swaggerJsDoc(options);
module.exports = { swaggerDocs };
