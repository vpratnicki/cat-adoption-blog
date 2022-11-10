const { Cat } = require('../models');



const catData = [
    {
        name: 'Phil',
        age: 'Young',
        description: 'This young boy needs a forever, indoor only home with NO CATS. He loves humans but not fellow felines-possibly the reason he was put out of his home to survive alone. This guy has been making it on his own for some time now but he deserves more and he clearly wants it. He is a previous TNR.',  
        personality: 'Kind',
        status: 'Available',
        image_url: 'https://i.imgur.com/TSyL6ng.jpg',
        user_id: '6'
    },
    {
        name: 'Sweetpea',
        age: 'Young',
        description: "Whomever adopts this sweet, petite little girl is going to be the luckiest person! She loves car rides, she is totally used to vet offices, she uses the litter box, even with hurt legs, she eats good, she loves to cuddle and will zonk out like nobodys business right on top of you for hours",  
        personality: 'Snuggly',
        status: 'Available soon',
        image_url: 'https://i.imgur.com/zad4zwu.jpg',
        user_id: '6'
    },
    {
        name: 'Sabrina',
        age: 'Young',
        description: 'Sabrina lives in a neighborhood where, sadly, many cats live outdoors and fend for themselves. She is a sweet, young, beautiful girl.',  
        personality: 'Sweet',
        status: 'Available soon',
        image_url: 'https://i.imgur.com/hk73WuK.jpg',
        user_id: '6'
    },
    {
        name: 'Giorgio',
        age: '12 weeks old',
        description: 'It is tough on the streets-hard to trust anyone. He need time but is figuring it out. He likes to be pet and is even learning to play with toys.',  
        personality: 'Shy, playful',
        status: 'Available',
        image_url: 'https://i.imgur.com/7ivsArZ.jpg',
        user_id: '6'
    },
    {
        name: 'Diana',
        age: '6 months',
        description: 'She is stunning. The ear tufts and floof tails on this kid is amazing! Diana is searching for her forever home. She has known nothing but outdoor living all her lives. It would be so wonderful if she does not have to return to that life.',  
        personality: 'Playful',
        status: 'available for adoption',
        image_url: 'https://i.imgur.com/1Kssj1T.jpg',
        user_id: '6'
    },
    {
        name: 'Prince Harry',
        age: '6 months',
        description: 'Welcome to The Cat Shack, Prince Harry. You sure look like royalty! Harry is searching for his forever, indoor only home.',  
        personality: 'Snuggly',
        status: 'available for adoption',
        image_url: 'https://i.imgur.com/JtEx7Pt.jpg',
        user_id: '6'
    },
    {
        name: 'Junebug',
        age: '1 year',
        description: 'She is a very petite and sweet girl who uses the litter box, is learning more and loving toys. She loves her cat tree and watching the birds out the window.',  
        personality: 'loving, sweet',
        status: 'Adoption pending',
        image_url: 'https://i.imgur.com/d6cFm23.jpg',
        user_id: '6'
    }
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;