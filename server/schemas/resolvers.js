const { User, Item } = require('../models/index')

const resolvers = {
    Query: {
        users: async  () => {
            return User.find()
            .select('-__v -password')
            .populate('items');
        },
        user: async (parent, {username}) => {
            return User.findOne({username})
            .select('-__v -password')
            .populate('items');
        },
    }
}