import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const http = Vue.http;

http.options.root = 'https://desafiojera.herokuapp.com/'


export { http }