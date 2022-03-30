const combinations = (elements) => {
  if (elements.length == 0) return [ [] ];

  const firstEl = elements[0];
  const rest = elements.slice(1);
  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];
  
  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  });

  return [ ...combsWithoutFirst, ...combsWithFirst ];
};

// Time: O(2^n)
// Space: O(n^2)

// console.log(combinations(['a', 'b', 'c']));
// console.log(combinations(['a', 'b', 'c', 'd', 'e', 'f']));