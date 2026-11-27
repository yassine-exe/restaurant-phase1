export function searchMenu(items, query) {
  const keyword = query.trim().toLowerCase();

  return items.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  );
}
