import { types } from 'mobx-state-tree';

export const WishListItem = types
  .model({
  name: types.string,
  price: types.number,
  image: '',
})
.actions((self) => ({
  changeImage(newImage) {
    self.image = newImage;
  },
  changeName(newName) {
    self.name = newName;
  },
  changePrice(newPrice) {
    self.price = newPrice;
  },
}))
// alternative actions describing - this way we can describe private methods
// .actions((self) => { 
//   const changeName = (newName) => {
//     self.name = newName;
//   }
//   return {changeName}
// })

export const WishList = types
.model({ 
  items: types.optional(types.array(WishListItem), []),
})
.actions((self) => ({
  add(item) {
    self.items.push(item);
  }
}))