import rc from 'roughjs';

export function intensifyContext(context) {
  const { node } = context;
  const rough = rc.svg(node);
  return { ...context, rough };
}
