export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function getAttributes(node, attributes) {
  return attributes.reduce((total, cur) => (total[cur] = node.getAttribute(cur), total), {});
}

export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

export function createContext(width, height) {
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const g = createSVGElement('g');
  mount(svg, g);

  return {
    node: svg,
    group: g,
  };
}
