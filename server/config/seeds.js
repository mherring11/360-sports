const db = require('./connection');
const { Tags, User } = require('../models');

// properties can be altered to fit our final model setup Also need to add whatever other Models we end up with
db.once('open', async () => {

    await User.deleteMany();
    await User.create(
        {
            "username": 'Chopchop',
            "email": 'chopchopsnipsnip@landscaperpro.com',
            "password": 'Password12345',
            //items: ['football cleats', 'basketball']
        },
        {
            "username": 'dutchblitz',
            "email": 'dutchtheclutch@example.com',
            "password": 'Password12345',
           //items: ['goalie gloves', 'hockey stick']
        },
        {
            "username": 'beachlady',
            "email": 'beachlady@testmail.com',
            "password": 'Password12345',
           //items: ['bear spray', 'backpacking pack']
        },
        {
            "username": 'maniacman',
            "email": 'bigguy@littlesuit.com',
            "password": 'Password12345',
           // items: ['sumo outfit', "football gloves", 'squat rack']
        },
        {
            "username": 'wilbursfriend',
            "email": 'stickysituations@test.com',
            "password": 'Password12345',
           // items: ['climbing harness', 'waterskis']
        },
        {
            "username": 'tanyerbum',
            "email": 'ohchristmastree@email.com',
            "password": 'Password12345',
            //items: ['snowskis', 'snowshoes']
        }
    );

    console.log('users seeded');

    process.exit();
});
