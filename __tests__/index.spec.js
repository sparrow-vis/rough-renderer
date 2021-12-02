import { createRenderer } from '../src';
import { mount, createDiv } from './utils';

describe('createRenderer', () => {
  test('createRenderer', () => {
    const renderer = createRenderer(600, 400);
    const node = renderer.node();
    const group = renderer.group();

    expect(node.tagName).toBe('svg');
    expect(node.getAttribute('width')).toBe('600');
    expect(node.getAttribute('height')).toBe('400');
    expect(node.getAttribute('viewBox')).toBe('0 0 600 400');

    expect(group.tagName).toBe('g');
    expect(group.parentNode).toBe(node);

    mount(createDiv(), node);
  });

  test('line', () => {
    const renderer = createRenderer(600, 400);
    renderer.line({
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
    });
    mount(createDiv(), renderer.node());
  });

  test('circle', () => {
    const renderer = createRenderer(600, 400);
    renderer.circle({
      cx: 100,
      cy: 100,
      r: 50,
      fill: 'red',
    });
    mount(createDiv(), renderer.node());
  });

  test('rect', () => {
    const renderer = createRenderer(600, 400);
    renderer.rect({
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
    });
    mount(createDiv(), renderer.node());
  });

  test('ring', () => {
    const renderer = createRenderer(600, 400);
    renderer.ring({
      cx: 100,
      cy: 100,
      r1: 20,
      r2: 50,
      fill: 'red',
    });
    mount(createDiv(), renderer.node());
  });

  test('text', () => {
    const renderer = createRenderer(600, 400);
    renderer.text({
      x: 100,
      y: 100,
      text: 'hello world',
    });
    mount(createDiv(), renderer.node());
  });

  test('path', () => {
    const renderer = createRenderer(600, 400);
    const d = [
      ['M', 10, 10],
      ['L', 100, 100],
      ['L', 100, 10],
      ['Z'],
    ];
    renderer.path({
      d,
      stroke: 'black',
      fill: 'red',
    });
    mount(createDiv(), renderer.node());
  });
});
