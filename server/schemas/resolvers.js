const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Item } = require('../models/index')


const resolvers = {
    Query: {
        me: async () => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                  .select('-__v -password')
                  .populate('items');
        
                return userData;
              }
        
              throw new AuthenticationError('Not logged in');
        },
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
        itemsByTag: async (parent, {tags}) => {
           return Item.find({tags});
        },
        itemByUser : async () => {
            return Item.find({});
        }
    },
    Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    },
    addItem: async (parent, args) => {
        const item = await Item.create(args);

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { items: item._id } },
          { new: true }
        );

        return item;
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },
    removeItem: async (parent, { _id }) => {
        const item = await Item.findByIdAndDelete(_id)

        return item
    }
    }
}

module.exports = resolvers;