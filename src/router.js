import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Shop from './components/Shop';
import Product from './components/Product';
import Description from './components/product/description';
import Reviewes from './components/product/reviewes';
import Comments from './components/product/comments';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';


export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/product/:id',
        component: Product,
        children: [
            {
                path: '',
                component: Description,

            },
            {
                path: 'reviewes',
                component: Reviewes,
            },
            {
                path: 'comments',
                component: Comments,

            },
        ]
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/contact-us',
        component: ContactUs
    },
    {
        path: '*',
        component: PageNotFound
    }
];

