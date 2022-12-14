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
        username: {
            type: String,
            require: "true"
        },
        tags: [
            {
                type: String,
                required: 'Please add at least one tag',
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