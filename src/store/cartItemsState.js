import {atom} from 'recoil';

export const count = atom({
    key:'cartItems',
    default:0
});

export const cartItemsListAtom = atom({
    key: 'cartItemsListAtom',
    default: [], // array of added items
})