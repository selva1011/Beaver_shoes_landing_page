import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Models' },
    { value: '250+', label: 'Shops' },
    { value: '500k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Beaver Training-101",
        price: "₹999.00",
    },
    {
        imgURL: shoe5,
        name: "Beaver Sport-011",
        price: "₹1999.00",
    },
    {
        imgURL: shoe6,
        name: "Beaver Training-05",
        price: "₹1299.00",
    },
    {
        imgURL: shoe7,
        name: "Beaver Thunder - 02",
        price: "₹1499.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Unleash comfort with Beaver Shoes, now with a stride-saving bonus – FREE delivery on every pair! Walk in style, delivered to your doorstep, hassle-free."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options. Ensures a Fort Knox of Secure Payments. Walk Secure, Shop Smart – Your Steps, Our Priority!"
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Your success, our commitment. Where Our Team Provides Extensive Support – Because Your Journey Deserves Unwavering Assistance. Support every step of the way!"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Mohammed',
        rating: 4.9,
        feedback: "This shoe company sets the bar high with its impeccable craftsmanship. Each pair seamlessly blends comfort and fashion, making a bold statement with every step. A true testament to quality footwear that stands out in the crowd"
    },
    {
        imgURL: customer2,
        customerName: 'Vishal',
        rating: 4.8,
        feedback: "Exceptional performance and style define this sports shoe brand. From intense workouts to casual strolls, the comfort is unmatched. A must-have for anyone serious about fitness and fashion"
    },
    {
        imgURL: customer3,
        customerName: 'Prakash',
        rating: 4.7,
        feedback: "Beaver Sports Shoes deliver top-notch comfort and performance. Stylish design meets durability, making every stride a winning move. A game-changer in the world of sports footwear."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Beaver Training", link: "/" },
            { name: "Beaver Sports", link: "/" },
            { name: "Beaver Thunder 1", link: "/" },
            { name: "Beaver Force 2", link: "/" },
            { name: "Beaver Racer", link: "/" },
            { name: "Beaver Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@Beaver.com", link: "mailto:customer@Beaver.com" },
            { name: "+91 80154 42789", link: "tel:+91 80154 42789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];