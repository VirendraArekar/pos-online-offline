export const orders = [
    {
       table : 1,
       time : '7:30',
       customer : 'Mike',
       voided : 1,
       order : [
        {
            item : 'Coca-Cola',
            qty : 2,
            status : true
        },
        {
            item : 'Fruit Salad',
            qty : 1,
            status : false
        },
        {
            item : 'Greek Salad',
            qty : 1,
            status : true
        },
        {
            item : 'Greek Sausages',
            qty : 1,
            status : true,
            with : 'paper'
        },
        {
            item : 'Tropicana Pizza',
            qty : 1,
            status : true
        },
       ] 
    },
    {
        table : 2,
        time : '4:50',
        customer : 'Viren',
        order : [
         {
             item : 'Potatos Fry',
             qty : 2,
             status : true,
             with : 'Kechup'
         },
         {
             item : 'Salad with salmon, avakardo and eggs',
             qty : 1,
             status : true
         },
         {
             item : 'Panini Peparoni',
             qty : 1,
             status : true
         }
        ] 
    },
    {
        table : 1,
        time : '1:39',
        customer : 'Jack',
        priority : true,
        order : [
         {
             item : 'Coca-Cola',
             qty : 2,
             status : true
         },
         {
             item : 'Fokacha',
             qty : 2,
             status : true
         },
         {
             item : 'Fruit Salad',
             qty : 1,
             status : true
         },
         {
             item : 'Hunting Pizza',
             qty : 1,
             status : true,
             with : 'Salami'
         },
         {
             item : 'Grilled Sausages',
             qty : 2,
             status : true
         },
         {
            item : 'Milk Shake',
            qty : 1,
            status : true
        },
        ] 
    },
    {
        table : 4,
        time : '00:35',
        customer : 'Oliva',
        order : [
         {
             item : 'Cheeze Pizza',
             qty : '1 X 4',
             status : true
         },
         {
             item : 'Coca-Cola',
             qty : 2,
             status : true
         },
         {
             item : 'Greek Salad',
             qty : 1,
             status : true
         },
        ] 
    },
    {
        table : 2,
        time : '4:50',
        customer : 'Viren',
        order : [
         {
             item : 'Potatos Fry',
             qty : 2,
             status : true,
             with : 'Kechup'
         },
         {
             item : 'Salad with salmon, avakardo and eggs',
             qty : 1,
             status : true
         },
         {
             item : 'Panini Peparoni',
             qty : 1,
             status : true
         }
        ] 
    },
];

export const products = [
    {
        category : 'Bread',
        varient : 4,
        price : 100,
        image : 'bread.png'
    },
    {
        category : 'Eggs',
        varient : 2,
        price : 5,
        image : 'egg.png'
    },
    {
        category : 'Milk',
        varient : 0,
        price : 32,
        image : 'milk.png'
    },
    {
        category : 'Eggs',
        varient : 2,
        price : 5,
        image : 'egg.png'
    },
    {
        category : 'Milk',
        varient : 0,
        price : 32,
        image : 'milk.png'
    },
    {
        category : 'Sauce',
        varient : 0,
        price : 56,
        image : 'sauce.png'
    },
    {
        category : 'Groundnut',
        varient : 2,
        price : 50,
        image : 'sauce.png'
    },
    {
        category : 'Rice',
        varient : 0,
        price : 1200,
        image : 'rice.png'
    },
    {
        category : 'Groundnut',
        varient : 2,
        price : 50,
        image : 'sauce.png'
    },
    {
        category : 'Rice',
        varient : 0,
        price : 1200,
        image : 'rice.png'
    },
    {
        category : 'Curd',
        varient : 0,
        price : 80,
        image : 'sauce.png'
    },
    {
        category : 'Chocalate',
        varient : 0,
        price : 24,
        image : 'sauce.png'
    },
    {
        category : 'Curd',
        varient : 0,
        price : 80,
        image : 'sauce.png'
    },
    {
        category : 'Chocalate',
        varient : 0,
        price : 24,
        image : 'sauce.png'
    },
];

export const productCategories = [
    {
        name : 'Bread',
        stock : 12,
        varient : 4,
        image : 'bread.png',
        price : 0
    },
    {
        name : 'Egg',
        stock : 84,
        varient : 0,
        image : 'egg.png',
        price : 20.00
    },
    {
        name : 'Tomato Sauce',
        stock : 5,
        varient : 2,
        image : 'souce.png',
        price : 32.00
    },
    {
        name : 'Crud',
        stock : 26,
        varient : 0,
        image : 'crud.png',
        price : 80.00
    },
    {
        name : 'Dairy Milk Silk...',
        stock : 40,
        varient : 4,
        image : 'milk.png',
        price : 0
    },
    {
        name : 'Groundnut Oil',
        stock : 30,
        varient : 2,
        image : 'oil.png',
        price : 0
    }
];

export const customerList = [
    {
        name : 'Virendra Arekar',
        email : 'viru.developer@gmail.com',
        mobile : '8483988XXX'
    },
    {
        name : 'Eshika Kute',
        email : 'ishika.kute@gmail.com',
        mobile : '8483988XXX'
    },
    {
        name : 'Krishna Dawane',
        email : 'krishna1989@gmail.com',
        mobile : '8483988XXX'
    },
    {
        name : 'John Doe',
        email : 'johndoe@gmail.com',
        mobile : '8483988XXX'
    },
    {
        name : 'John Carter',
        email : 'john.carter@gmail.com',
        mobile : '8483988XXX'
    },
];

export const bills = [
    {
        name : 'Sample 1',
        time : '9:30 AM',
        duration : '12 hrs ago',
        amount : '430.00'
    },
    {
        name : 'Sample 10',
        time : '10:30 PM',
        duration : '1 day 4 hrs 3 min ago',
        amount : '280.00'
    },
    {
        name : 'Sample Bill 3',
        time : '10:02 PM',
        duration : '1 day 5 hrs 20 min ago',
        amount : '350.00'
    },
    {
        name : 'Sample 4',
        time : '9:46 PM',
        duration : '5 day 4 hrs 3 min ago',
        amount : '800.00'
    },
    {
        name : 'Sample 2',
        time : '9:30 PM',
        duration : '6 day 4 hrs 3 min ago',
        amount : '400.00'
    },
    {
        name : 'Sample 5',
        time : '9:15 PM',
        duration : '7 day 4 hrs 3 min ago',
        amount : '250.00'
    },
]