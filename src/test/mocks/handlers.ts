import {PlaceholderAPI} from '../../constants';
import {rest} from 'msw';

export const user = {
  name: 'Daniel Keefer',
  username: 'WebWizard',
  email: 'xxkeefer.code@gmail.com',
  address: {
    street: '1 example street',
    suite: '3',
    city: 'Somewhere',
    zipcode: '1234',
    geo: {
      lat: '-27.470125',
      lng: '153.021072',
    },
  },
  phone: '0412345678',
  website: 'https://keefer.au/',
  company: {
    name: 'Code Conjurers',
    catchPhrase: 'We turn Problems into Magic',
    bs: ':poop:',
  },
  id: 11,
};

export const handlers = [
  rest.post(`${PlaceholderAPI}/users`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),
];
