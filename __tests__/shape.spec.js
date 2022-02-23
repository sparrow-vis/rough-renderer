import {
  line, rect, circle, path,
} from '../src/shape';
import { intensifyContext } from '../src/context';
import { mount, createDiv, createContext } from './utils';

describe('shapes', () => {
  test('line', () => {
    const context = intensifyContext(createContext(600, 400));

    const { node } = context;
    const shape = line(context, {
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
    });
    mount(node, shape);
    mount(createDiv(), node);
  });

  test('circle', () => {
    const context = intensifyContext(createContext(600, 400));

    const { node } = context;
    const shape = circle(context, {
      cx: 100,
      cy: 100,
      r: 50,
      fill: 'red',
    });
    mount(node, shape);
    mount(createDiv(), node);
  });

  test('transparent circle', () => {
    const context = intensifyContext(createContext(600, 400));

    const { node } = context;
    const shape = circle(context, {
      cx: 100,
      cy: 100,
      r: 50,
      fill: 'transparent',
    });
    mount(node, shape);
    mount(createDiv(), node);
  });

  test('rect', () => {
    const context = intensifyContext(createContext(600, 400));

    const { node } = context;
    const shape = rect(context, {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
    });
    mount(node, shape);
    mount(createDiv(), node);
  });

  test('path', () => {
    const context = intensifyContext(createContext(600, 400));
    intensifyContext(context);

    const { node } = context;
    const d = [
      ['M', 10, 10],
      ['L', 100, 100],
      ['L', 100, 10],
      ['Z'],
    ];

    const shape = path(context, {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
      d,
    });
    mount(node, shape);
    mount(createDiv(), node);
  });
});
