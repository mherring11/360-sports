const { model, Schema } = require('mongoose');

const tagSchema = new Schema (
    {
        title: {
            type: String,
            require: true,
            
        }
    }
)