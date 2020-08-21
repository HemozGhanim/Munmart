import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import product from './modules/product';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productsArr: []
    },
    mutations: {
        storeProducts(state, products) {
            state.productsArr = products;
        }
    },
    actions: {
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
                    console.log(products);
                    commit('storeProducts', ...products);
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    getters: {
        products(state) {
            return state.productsArr;
        }
    }
});