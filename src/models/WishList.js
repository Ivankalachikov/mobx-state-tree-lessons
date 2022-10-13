import { types } from 'mobx-state-tree';

// const data = {
//   name: 'Some amazing book',
//   price: 1500,
//   image: '//via.placeholder.com/350x150'
// }

export const WishListItem = types.model({
  name: types.string,
  price: types.number,
  image: '',
})

export const WishList = types.model({ 
  items: types.optional(types.array(WishListItem), []),
});