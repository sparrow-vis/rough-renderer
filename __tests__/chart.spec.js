import * as sp from '@sparrow-vis/sparrow';
import { createRenderer } from '../src';
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
      renderer: createRenderer,
      data,
      element: 'interval',
      encode: [
        { channel: 'x', field: 'genre' },
        { channel: 'y', field: 'sold' },
        { channel: 'fill', field: 'genre' },
      ],
    });

    mount(createDiv(), chart);
  });

  test('rose', () => {
    const data = [
      { name: 'questions', value: 17 },
      { name: 'schools', value: 25 },
      { name: 'philosophers', value: 35 },
    ];

    const chart = sp
      .interval()
      .data(data)
      .coordinate(sp.polar())
      .encode(
        sp.x().field('name'),
        sp.y().field('value'),
        sp.fill().field('name'),
      )
      .renderer(createRenderer)
      .plot();

    mount(createDiv(), chart);
  });

  test('radical bar chart', () => {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const chart = sp
      .interval()
      .renderer(createRenderer)
      .data(data)
      .coordinate(sp.transpose(), sp.polar())
      .encode(sp.x().field('genre'), sp.y().field('sold'), sp.fill().field('genre'))
      .plot();

    mount(createDiv(), chart);
  });

  test('donut', () => {
    const data = [
      { name: 'questions', value: 17 },
      { name: 'schools', value: 25 },
      { name: 'philosophers', value: 35 },
    ];

    const chart = sp
      .interval()
      .data(data)
      .statistic(sp.stack())
      .renderer(createRenderer)
      .coordinate(
        sp.polar(),
      )
      .guide(
        sp.axisX().display(false),
        sp.axisY().display(false),
      )
      .encode(
        sp.y().field('value'),
        sp.fill().field('name'),
        sp.label().field('value'),
      )
      .plot();

    mount(createDiv(), chart);
  });

  test('pie', () => {
    const data = [
      { name: 'questions', value: 17 },
      { name: 'schools', value: 25 },
      { name: 'philosophers', value: 35 },
    ];

    const chart = sp
      .interval()
      .data(data)
      .statistic(sp.stack())
      .renderer(createRenderer)
      .coordinate(
        sp.transpose(),
        sp.polar(),
      )
      .guide(
        sp.axisX().display(false),
        sp.axisY().display(false),
      )
      .scale(
        sp.scale().channel('x').padding(0.2),
      )
      .encode(
        sp.y().field('value'),
        sp.fill().field('name'),
        sp.label().transform(sp.percentage(data, (d) => d.value)),
      )
      .style('labelFormatter', (d) => `${d.toFixed(1) * 100}%`)
      .style('labelFill', '#000')
      .plot();

    mount(createDiv(), chart);
  });
});
