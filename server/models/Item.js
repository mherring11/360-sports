const { model, Schema } = require('mongoose');

const itemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true,
            unique: false,
        },
        description: {
            type: String,
            required: 'Item must include a description',
            minlength: 10,
            maxlength: 280
        },
        tags: [
            {
                type: String,
                required: 'Please add atleast one tag',
                maxlength: 30
            }
        ]
    },
    {
        toJSON: {
          getters: true
        }
      }
);

const Item = model( 'Item', itemSchema );
module.exports = Item;