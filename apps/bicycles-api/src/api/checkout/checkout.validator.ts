const Joi = require('@hapi/joi');

const schema = Joi.object({
  userData: Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  }),
  order: Joi.object({
    product: Joi.string().required(),
    components: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        option: Joi.number().required()
    }))
  })
});

export class CheckoutValidator {
    validate(body: any): string {       
        const { error } = schema.validate(body)

        if (error) {
            console.log(`[CheckoutValidator] - Invalid request body: ${error.details[0].message}`)
            return 'Invalid request body'
        }

        return ''
    }
}