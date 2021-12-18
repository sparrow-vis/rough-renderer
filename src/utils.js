export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
