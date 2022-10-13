import { WishList, WishListItem } from './WishList';

test('Can create an instance of a model', () => {
  const item = WishListItem.create({
    name: 'Some amazing book',
    price: 1500,
  })
  expect(item.price).toBe(1500);
  expect(item.image).toBe('');
})

test('Can create a wishlist', () => {
  const list = WishList.create({
    items: [{
      name: 'Some amazing book',
      price: 1500,
    }]
  });
  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(1500);
})