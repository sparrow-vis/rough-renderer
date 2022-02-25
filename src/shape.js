import { mount } from './utils';

export function line(context, attributes) {
  const {
    x1, y1, x2, y2, ...options
  } = attributes;
  return shape(context, 'line', x1, y1, x2, y2, options);
}

export function rect(context, attributes) {
  const {
    width, height, x, y, ...options
  } = attributes;
  const x1 = width > 0 ? x : x + width;
  const y1 = height > 0 ? y : y + height;
  return shape(context, 'rectangle', x1, y1, Math.abs(width), Math.abs(height), options);
}

export function path(context, attributes) {
  const { d, ...options } = attributes;
  const path = Array.isArray(d) ? d.flat().join(' ') : d;
  return shape(context, 'path', path, options);
}

export function circle(context, attributes) {
  const {
    cx, cy, r, fill, ...options
  } = attributes;
  const roughFill = fill === 'transparent' ? undefined : fill;
  return shape(context, 'circle', cx, cy, r * 2, { ...options, fill: roughFill });
}

function shape(context, name, ...rest) {
  const { group, rough } = context;
  const el = rough[name](...rest);
  mount(group, el);
  return el;
}
