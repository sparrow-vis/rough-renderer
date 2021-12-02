import { applyAttributes, createSVGElement, mount } from './utils';

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
  return shape(context, 'rectangle', x1, y1, width, height, options);
}

export function path(context, attributes) {
  const { d, ...options } = attributes;
  return shape(context, 'path', d.flat().join(' '), options);
}

export function circle(context, attributes) {
  const {
    cx, cy, r, ...options
  } = attributes;
  return shape(context, 'circle', cx, cy, r * 2, options);
}

export function text(context, attributes) {
  const { text, ...rest } = attributes;
  const { group } = context;
  const textElement = createSVGElement('text');
  applyAttributes(textElement, rest);
  mount(group, textElement);
  textElement.textContent = text;
  return textElement;
}

export function ring(context, attributes) {
  const {
    cx, cy, r1, r2, ...styles
  } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  const strokeColor = stroke || 'black' || fill;
  const innerStroke = circle(context, {
    stroke: strokeColor,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circle(context, {
    ...styles,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circle(context, {
    stroke: strokeColor,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
}

export function shape(context, name, ...rest) {
  const { group, rough } = context;
  const el = rough[name](...rest);
  mount(group, el);
  return el;
}
