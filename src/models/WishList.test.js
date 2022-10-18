import { getSnapshot, onPatch, onSnapshot } from 'mobx-state-tree';
import { WishList, WishListItem } from './WishList';

test('Can create an instance of a model', () => {
  const item = WishListItem.create({
    name: 'Some amazing book',
    price: 1500,
  })
  expect(item.price).toBe(1500);
  expect(item.image).toBe('');
  item.changeName('Book');
  expect(item.name).toBe('Book');
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

test('can add new items - snapshots', () => {
  const states = [];

  const list = WishList.create();
  onSnapshot(list, (snapshot) => {
    states.push(snapshot);
  })

  list.add({ name: 'Socks', price: 100 });

  expect(list.items.length).toBe(1);
  expect(list.items[0].name).toBe('Socks');
  
  list.items[0].changeName('Flowers');
  expect(list.items[0].name).toBe('Flowers');
  expect(getSnapshot(list)).toMatchSnapshot();
  expect(states).toMatchSnapshot();
})

test('can add new items - patches', () => {
  const patches = [];

  const list = WishList.create();
  onPatch(list, (patch) => {
    patches.push(patch);
  })

  list.add({ name: 'Socks', price: 100 });
  list.items[0].changeName('Flowers');

  expect(patches).toMatchSnapshot();
})