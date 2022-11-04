const { Cat } = require('../models');



const catData = [
    {
        name: 'Waffles',
        image_url: 'image',
        age: '3 months',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'kind',
        status: 'available for adoption',
        user_id: '1'
    },
    {
        name: 'Furry ball',
        age: '5 years',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'snuggly',
        status: 'available for adoption',
        user_id: '2'
    },
    {
        name: 'bookkeeper',
        age: '10 years',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'loving, playful',
        status: 'adoption pending',
        user_id: '3'
    },
    {
        name: 'Cupcake',
        age: 'Young',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'shy',
        status: 'available for adoption',
        user_id: '1'
    },
    {
        name: 'Gunfire',
        age: '2 months',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'kind',
        status: 'available for adoption',
        user_id: '4'
    },
    {
        name: 'Fluffy',
        age: '5 years',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'snuggly',
        status: 'available for adoption',
        user_id: '2'
    },
    {
        name: 'Granade',
        age: '10 years',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat sit nesciunt fuga eius, assumenda dolores, sint dolorem minima adipisci tempore sapiente, vero repellat. Aperiam vel provident veniam praesentium.',  
        personality: 'loving, playful',
        status: 'adoption pending',
        user_id: '2'
    }

    
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;