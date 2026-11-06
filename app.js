const all = resources.flatMap(group => group.items.map(item => ({...item, category: group.title})));
const categories = document.querySelector('#categories');
const search = document.querySelector('#search');
let selected = '全部资源';
const names = ['全部资源', ...resources.map(group => group.title)];
for (const name of names) {
  const button = document.createElement('button');
  button.type = 'button';
  button.append(document.createTextNode(name));
  const count = document.createElement('span');
  count.textContent = name === '全部资源' ? all.length : all.filter(item => item.category === name).length;
  button.append(count);
  button.addEventListener('click', () => { selected = name; render(); });
  categories.append(button);
}
document.querySelector('#total').textContent = `${resources.length} 个分类 / ${all.length} 项资源`;
function render() {
  const query = search.value.trim().toLowerCase();
  const visible = all.filter(item => (selected === '全部资源' || item.category === selected) && `${item.name} ${item.category} ${item.url}`.toLowerCase().includes(query));
  [...categories.children].forEach((button, index) => {
    const active = names[index] === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#current').textContent = selected;
  document.querySelector('#count').textContent = `${visible.length} 项资源`;
  const results = document.querySelector('#results');
  results.replaceChildren();
  visible.forEach(item => {
    const card = document.createElement('a');
    card.className = 'card'; card.href = item.url;
    card.target = '_blank'; card.rel = 'noopener noreferrer';
    const top = document.createElement('div'); top.className = 'card-top';
    const icon = document.createElement('span'); icon.className = 'resource-icon'; icon.setAttribute('aria-hidden', 'true'); icon.textContent = item.name.slice(0, 2);
    const title = document.createElement('h4'); title.textContent = item.name;
    const arrow = document.createElement('span'); arrow.className = 'arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
    top.append(icon, title, arrow);
    const bottom = document.createElement('div'); bottom.className = 'card-bottom';
    const domain = document.createElement('span'); domain.textContent = new URL(item.url).hostname;
    const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = item.category;
    bottom.append(domain, tag); card.append(top, bottom); results.append(card);
  });
  document.querySelector('#empty').hidden = visible.length !== 0;
}
search.addEventListener('input', render);
document.querySelector('#reset').addEventListener('click', () => { search.value = ''; selected = '全部资源'; render(); search.focus(); });
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) { event.preventDefault(); search.focus(); }
});
render();
