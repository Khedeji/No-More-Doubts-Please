const {body, validationResult} = require("express-validator")

const validate = [
    body('name').optional().isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('email').optional().isEmail().withMessage('Please enter a valid email'),
    body('password').optional().isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
          return next()
        }
        return res.status(400).json({ errors: errors.array() })
      }
]
  
module.exports = validate 