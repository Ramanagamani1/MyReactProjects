function Stats({ items }) {
  if (items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numItemsPacked = items.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );
  const percent = Math.round((numItemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈"
          : `👜You have ${numItems} items on your list, and you already packed
         ${numItemsPacked} (${percent}%)`}
      </em>
    </footer>
  );
}

export default Stats;
