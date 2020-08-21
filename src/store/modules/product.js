import axios from 'axios';
const state = {
    productsArr: null
};

const mutations = {
    storeProducts(state, products) {
        state.productsArr = products;
    }
};

const actions = {
    fetchData({commit}) {
        axios.get('https://ecommarcemun.firebaseio.com/products.json')
            .then((res) => {
                const data = res.data;
                const products = [];
                for (let key in data) {
                    const product = data[key];
                    product.id = key;
                    products.push(product);
                }
                commit('storeProducts', ...products);

            })
            .catch((error) => {
                console.log(error);
            });
    }
};
const getters = {
    products(state) {
        return state.productsArr;
        
    }
};


export default {
    state,
    mutations,
    actions,
    getters
};