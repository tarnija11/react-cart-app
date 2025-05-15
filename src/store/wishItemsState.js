import {atom} from 'recoil';

export const wishListAtom = atom({
  key: "wishListItems",
  default: 0
});

export const wishItemsListAtom = atom({
    key: 'wishItemsListAtom',
    default: [], // array of wishlist items
})