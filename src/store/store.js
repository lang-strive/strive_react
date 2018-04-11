import {createStore} from 'redux';
import Reducer from '../reducer/showHide.js';

let store=createStore(Reducer);

export {store};