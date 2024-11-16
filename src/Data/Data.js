import c1 from '../assests/img/w1.png';
import c2 from '../assests/img/w5.png';
import c3 from '../assests/img/w3.png';
import c4 from '../assests/img/w4.png';
import c5 from '../assests/img/w5.png';
import c6 from '../assest/category/c6.png';
import c7 from '../assest/category/c7.png';

import p1 from '../assests/img/oone.png';
import p2 from '../assests/img/ttwo.png';
import p3 from '../assests/img/tthree.png';
import p4 from '../assests/img/ffour.png';
import p5 from '../assests/img/ffive.png';
import p6 from '../assests/product/shoes/shoes1.png';
import p7 from '../assests/product/shoes/shoes2.png';
import p8 from '../assests/product/shoes/shoes3.png';
import p9 from '../assests/product/shoes/shoes4.png';
import p10 from '../assests/product/shoes/shoes5.png';


import blogImage1 from '../assest/blogdisplay/cone.jpg';
import blogImage2 from '../assest/blogdisplay/ctwo.jpg';
import blogImage3 from '../assest/blogdisplay/cthree.jpg';

import iosImage1 from '../assests/children/children2.png';
import iosImage2 from '../assests/children/children3.png';
import iosImage3 from '../assests/children/children4.png';
import iosImage4 from '../assests/children/children5.png';
import iosDisplayImage from '../assests/children/children1.png';

//

import GirlCategories from '../assests/categories/girlbanner1.jpg';
import BoysCategories from '../assests/categories/boybanner2.jpg';



export const category = [
    { id: 1, name: 'Only Check Trouser', category: '$25.50', image: c1 },
    { id: 2, name: 'Herschel supply', category: '$75.00', image: c2 },
    { id: 3, name: 'Classic Trench Coat', category: '$103', image: c3 },
    { id: 4, name: 'Esprit Ruffle Shirt', category: '$35.31', image: c4 },
    { id: 4, name: 'Esprit Ruffle Shirt', category: '$35.31', image: c5 },
    // { id: 5, name: 'Ps5', category: 'Tech', image: c6 },
    // { id: 6, name: 'Networking', category: 'Tech', image: c7 },
];

export const product = [
    { id: 2, name: 'Camera', category: 'Tech', image: p1 },
    { id: 3, name: 'Speaker', category: 'Tech', image: p2 },
    { id: 1, name: 'Keyboard', category: 'Tech', image: p3 },
    { id: 4, name: 'Alexa', category: 'Tech', image: p4 },
    { id: 5, name: 'Mouse', category: 'Tech', image: p5 },
    { id: 6, name: 'HandFree', category: 'Tech', image: p6 },
    { id: 7, name: 'Headphone', category: 'Tech', image: p7 },
    { id: 8, name: 'Macbook', category: 'Tech', image: p8 },
    { id: 9, name: 'SmartWatch', category: 'Tech', image: p9 },
    { id: 10, name: 'Sunglasses', category: 'Tech', image: p10 },
];

export const product1 = [
    { id: 5, name: 'Mouse', category: 'Tech', image: p1 },
    { id: 6, name: 'HandFree', category: 'Tech', image: p6 },
    { id: 1, name: 'Keyboard', category: 'Tech', image: p2 },
    { id: 9, name: 'SmartWatch', category: 'Tech', image: p9 },
    { id: 3, name: 'Speaker', category: 'Tech', image: p4 },
    { id: 10, name: 'Sunglasses', category: 'Tech', image: p10 },
    { id: 4, name: 'Alexa', category: 'Tech', image: p5 },
    { id: 7, name: 'Headphone', category: 'Tech', image: p7 },
    { id: 2, name: 'Camera', category: 'Tech', image: p3 },
    { id: 8, name: 'Macbook', category: 'Tech', image: p8 },
];

export const blog = [
    { id: 1, date: 'March 09,2024', dec: 'Music magnate headphones', image: blogImage1 },
    { id: 2, date: 'Sept 25,2024', dec: 'MacBook Air labore et dolores', image: blogImage2 },
    { id: 3, date: 'January 21,2024', dec: 'Lorem ipsum available but the majority', image: blogImage3 },
];

export const kids = [    
    {
        id: 1,
        name: 'Oufit  Name',
        dec: ' explore over a million professional .',
        current_price: '$25.99',
        price: '$35.99',
        image: iosDisplayImage,
    },
];

export const mainkid = [
    {
        id: 1,
        name: 'kids outfit-1',
        price: '$75.99',
        image: iosImage1,
    },
    {
        id: 2,
        name: 'kids outfit-2',
        price: '$125.99',
        image: iosImage2,
    },
    {
        id: 3,
        name: 'kids outfit-3',
        price: '$100.99',
        image: iosImage3,
    },
    {
        id: 4,
        name: 'kids outfit-4',
        price: '$60.99',
        image: iosImage4,
    },
];

export const  categories = [
    { id: 1, des: 'Weekend Sells', category: 'Womens Fashion', image: GirlCategories },
    { id: 2, des: 'Weekend Sells', category: 'Men Fashion', image: BoysCategories},
]
