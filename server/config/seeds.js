const db = require('./connection');
const { Tags, User } = require('../models');

db.once('open', async () => {

    await User.deleteMany();
    await User.create(
        {
            username: 'Chopchop',
            firstName: 'Edward',
            lastName: 'Scissorhands',
            email: 'chopchopsnipsnip@landscaperpro.com',
            password: 'Password12345',
            activities: [football, ultimate, basketball, running]
        },
        {
            username: 'dutchblitz',
            firstName: 'Dutch',
            lastName: 'Franklin',
            email: 'dutchtheclutch@example.com',
            password: 'Password12345',
            activities: [soccer, hockey]
        },
        {
            username: 'beachlady',
            firstName: 'Sandy',
            lastName: 'Shoreline',
            email: 'beachlady@testmail.com',
            password: 'Password12345',
            activities: [volleyball, hiking]
        },
        {
            username: 'maniacman',
            firstName: 'Tommy',
            lastName: 'Boy',
            email: 'bigguy@littlesuit.com',
            password: 'Password12345',
            activities: [sumo, football, powerlifting]
        },
        {
            username: 'wilbursfriend',
            firstName: 'Charlotte',
            lastName: 'Sweb',
            email: 'stickysituations@test.com',
            password: 'Password12345',
            activities: [climbing, waterskiing]
        },
        {
            username: 'tanyerbum',
            firstName: 'Torrie',
            lastName: 'Tannenbaum',
            email: 'ohchristmastree@email.com',
            password: 'Password12345',
            activities: [snowskiing, snowshoeing]
        }
    );

    console.log('users seeded');

    process.exit();
});
