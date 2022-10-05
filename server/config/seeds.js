const db = require('./connection');
const { Item, User } = require('../models');

db.once('open', async () => {

    await User.deleteMany();
    await User.create(
        {
            username: 'Chopchop',
            email: 'chopchopsnipsnip@landscaperpro.com',
            password: 'Password12345',
            items: []
        },
        {
            username: 'dutchblitz',
            email: 'dutchtheclutch@example.com',
            password: 'Password12345',
            items: []
        },
        {
            username: 'beachlady',
            email: 'beachlady@testmail.com',
            password: 'Password12345',
            items: []
        },
        {
            username: 'maniacman',
            email: 'bigguy@littlesuit.com',
            password: 'Password12345',
            items: []
        },
        {
            username: 'wilbursfriend',
            email: 'stickysituations@test.com',
            password: 'Password12345',
            items: []
        },
        {
            username: 'tanyerbum',
            email: 'ohchristmastree@email.com',
            password: 'Password12345',
            items: []
        }
    );

    console.log('users seeded');

    await Item.deleteMany();
    const items = await Item.create(
        {
            itemName: 'football cleats',
            description: "These are almost brand new.  I bought them when I started playing in a rec football league but I quickly realized I'm too old for this...",
            username: 'Chopchop',
            tags: ['football']
        },
        {
            itemName: 'basketball',
            description: "This is a nice official NBA ball signed by all the Seattle Supersonics before they were betrayed by the city council and the team was moved to the armpit of America",
            username: 'Chopchop',
            tags: ['basketball']
        },
        {
            itemName: 'goalie gloves',
            description: "Slightly used goalie gloves up for grabs here.  They were my sons, but he has decided to do track and field this year instead of soccer.",
            username: 'dutchblitz',
            tags: ['soccer']
        },
        {
            itemName: 'hockey stick',
            description: "This was my hockey stick from when I played in college.  It is still in good shape and is a great starter for anyone just getting into the sport.",
            username: 'dutchblitz',
            tags: ['hockey']
        },
        {
            itemName: 'bear spray',
            description: "I'm a long-time hiker that is stepping away from the trail for awhile. I have an unused bottle of bear spray available for anyone who wants to get out into nature.",
            username: 'beachlady',
            tags: ['hiking']
        },
        {
            itemName: 'backpacking pack',
            description: "This is a lady's backpack.  It has lots of pockets and straps and can fit almost anything you want to bring.  The frame is adjustable but is a best fit for a woman between 5'6 and 5'10",
            username: 'beachlady',
            tags: ['hiking', 'backpacking']
        },
        {
            itemName: 'squat rack',
            description: "Bought this during the pandemic to stay in shape.  Now that gyms are opened back up, I found that I rather workout around others so getting rid of this.  It's in great shape.",
            username: 'maniacman',
            tags: ['weightlifting']
        },
        {
            itemName: 'climbing harness',
            description: "Black Diamond climbing harness.  Pretty adjustable to fit various sizes.  I'll throw in the caribiner's that I bought with it. It's all in excellent condition.  I decided to upgrade as I'm getting more serious about climbing and don't need this one anymore",
            username: 'wilbursfriend',
            tags: ['rock climbing']
        },
        {
            itemName: 'waterskiis',
            description: "I've decided to devote my extra time to rock climbing and don't see myself getting out on the water as much so I've decided to sell my waterskiis.  These were given to me and so I'm passing them on to the next person.",
            username: 'wilbursfriend',
            tags: ['waterskiing', 'watersports']
        },
        {
            itemName: 'downhill snowskis',
            description: "We're moving to the desert and won't be able to put these to much use.  Great pair of skis for getting out on the mountain in the snow.",
            username: 'tanyerbum',
            tags: ['snowsports', 'downhill skiing']
        },
        {
            itemName: 'snowshoes',
            description: "We're moving to the desert and won't be able to put these to much use.  My sister got these for me a few years back and I've had some great adventures with them.",
            username: 'tanyerbum',
            tags: ['snowsports', 'snowshoeing']
        },
        {
            itemName: 'crosscountry skis',
            description: "We're moving to the desert and won't be able to put these to much use.  I've put quite a few miles on these, but they'll be great for quite a few more.",
            username: 'tanyerbum',
            tags: ['snowsports', 'crosscountry skiing']
        }
    )

    console.log('Item seeded')

    process.exit();
});
