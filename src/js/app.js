// import 'regenerator-runtime/runtime'
import Header from '../components/Header';
import User from '../components/User';

import '../sass/app.scss';

// console.log("It work");

const app = async () => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('user').innerHTML = await User();
};

// Init app
app();