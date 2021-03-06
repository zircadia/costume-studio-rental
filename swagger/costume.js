/**
 * Schemas and routes for costume - includes cart and rentals
 * 
 * Define a schema for costume inventory
 * @swagger
 * components:
 *  schemas:
 *      Costume:
 *          type: object
 *          required:
 *              -costumeId
 *              -costumeName
 *              -category
 *              -rentalFee
 *              -size
 *              -image
 *              -description
 *          properties:
 *              costumeId:
 *                  type: String
 *                  description: The auto-generated id of the costume
 *              costumeName:
 *                  type: String
 *                  description: The costume name
 *              category:
 *                  type: String
 *                  description: The costume category
 *              rentalFee:
 *                  type: Number
 *                  description: The fee for costume rental
 *              size:
 *                  type: String
 *                  description: The costume size
 *              imageUrl:
 *                  type: String
 *                  description: The image URL
 *              description:
 *                  type: String
 *                  description: The costume description
 *              userId:
 *                  type: Schema.Types.ObjectId
 *                  ref: 'User'
 *                  required: true
 * 
 *          example:
 *              costumeId: <auto-generated>
 *              costumeName: Gandalf the Grey
 *              category: Fantasy
 *              rentalFee: 50.00
 *              size: Adult Medium
 *              imageUrl: https://images.unsplash.com/photo-1515599985634-73dc308d766f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
 *              description: Summon your inner wizard with this realistic version of Gandalf's Costume.         
 *              userId: <auto-generated>
 *                  
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 * 
 * security:
 *  - bearerAuth: []                 
 */

/**
 * @swagger
 * definitions:
 *      Costume:
 *          type: object
 *          required:
 *              -costumeName
 *              -category
 *              -rentalFee
 *              -size
 *              -imageUrl
 *              -description
 *          properties:
 *              costumeName:
 *                  type: string
 *              category:
 *                  type: string
 *              rentalFee:
 *                  type: number
 *              size:
 *                  type: string
 *              imageUrl:
 *                  type: string
 *              description:
 *                  type: string 
 *      Cart:
 *          type: object
 *          required:
 *              -costumeId
 *              -userId
 *          properties:
 *              costumeId:
 *                  type: string
 *              userId:
 *                  type: string 
 * 
 *      cancelRental:
 *          type: object
 *          required:
 *              -costumeId
 *          properties:
 *              costumeId:
 *                  type: string
 */

/**
 * @swagger
 * tags:
 *  name: Rentals
 *  description: The rental managing api
 * 
 */

/**
 * GET routes
 * @swagger
 * 
 * /costumes:
 *      get:
 *          summary: Gets a list of all the costumes
 *          tags: [Rentals]
 *          responses:
 *              200:
 *                  description: List of costumes displayed
 *                  content:
 *                      application/json:
 *                          schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Costume'
 * 
 * /costumes/{costumeId}:
 *      get:
 *          summary: Gets the details of the costume with the id
 *          tags: [Rentals]
 *          parameters:
 *            - in: path
 *              name: costumeId
 *              schema:
 *                  type: string
 *              required: true
 *              description: This is the costume id
 *          responses:
 *              200:
 *                  description: Costume information by costumeId
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Costume'
 *              404:
 *                  description: The costume was not found
 * 
 * /cart:
 *      get:
 *          security:
 *              - bearerAuth: [] 
 *          summary: Get the user's cart information for added costumes currently in the cart
 *          tags: [Rentals]
 *          responses:
 *              200:
 *                  description: Information about cart contents displayed
 *                  content:
 *                      application/json:
 *                          schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Costume'
 *
 * /rentals:
 *      get:
 *          security:
 *              - bearerAuth: [] 
 *          summary: Gets all rentals for a single user
 *          tags: [Rentals]
 *          responses:
 *              200:
 *                  description: Display list of rentals
 *                  content:
 *                      application/json:
 *                          schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Rentals'
 * 
 * /rentals/{rentalId}:
 *      get:
 *          security:
 *              - bearerAuth: [] 
 *          summary: Gets the details of the rental with the rental id
 *          tags: [Rentals]
 *          parameters:
 *            - in: path
 *              name: rentalId
 *              schema:
 *                  type: string
 *              required: true
 *              description: This is the rental id
 *          responses:
 *              200:
 *                  description: Get rental information for a single past rental
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Rentals'
 *              404:
 *                  description: The rental was not found
 * 
 * /checkout:
 *      get:
 *          security:
 *              - bearerAuth: [] 
 *          summary: Gets checkout process
 *          tags: [Rentals]
 *          responses:
 *              200:
 *                  description: Starts checkout process for user
 *                  content:
 *                      application/json:
 *                          schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Rentals'
 * 
 */

/**
 * POST routes
 * @swagger
 * 
 * /cart:
 *      post:
 *          security:
 *              - bearerAuth: [] 
 *          summary: Add costume to cart for potential rental
 *          tags: [Rentals]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/Cart'
 *          responses:
 *              200:
 *                  description: The costume was successfully added to the cart
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Costume'
 *              500:
 *                  description: There was a server error
 * 
 */

/**
 * DELETE routes
 * @swagger
 * 
 * /cancel-rental:
 *      delete:
 *          security:
 *              - bearerAuth: [] 
 *          summary: Remove costume from cart
 *          tags: [Rentals]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/cancelRental'
 *          responses:
 *              200:
 *                  description: The costume was successfully deleted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Costume'
 *              500:
 *                  description: There was a server error
 */