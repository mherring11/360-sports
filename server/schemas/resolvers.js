const { User, Item } = require('../models/index')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('items');
        },
        user: async (parent, {username}) => {
            return User.findOne({username})
            .select('-__v -password')
            .populate('items');
        },
        items: async () => {
            return Item.find()
        },
        itembyTag: async (parent, {tags}) => {
           return Item.find({tags});
        },
    },
    Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);

        return user;
    },
    addItem: async (parent, args) => {
        const item = await Item.create(args);

        /*await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { items: item._id } },
          { new: true }
        );*/

        return item;
    },

    removeItem: async (parent, { _id }) => {
        const item = await Item.findByIdAndDelete(_id)

        return item
    }
    }
}

module.exports = resolvers;