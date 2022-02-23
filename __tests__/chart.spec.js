import * as sp from '@sparrow-vis/sparrow';
import { createPlugin } from '../src';
import { createDiv, mount } from './utils';

describe('plot', () => {
  test('bar', () => {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const chart = sp.plot({
      renderer: createPlugin(),
      data,
      type: 'interval',
      encodings: {
        x: 'genre',
        y: 'sold',
        fill: 'genre',
      },
    });

    mount(createDiv(), chart);
  });
});
