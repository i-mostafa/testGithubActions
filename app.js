const appendToObj = (parent, newObj) => {
  if (!newObj || typeof newObj !== "object") return;

  Object.keys(newObj).forEach((key) => {
    if (!parent[key]) parent[key] = newObj[key];
    else {
      if (typeof parent[key] !== "object") parent[key] = {};
      appendToObj(parent[key], newObj[key]);
    }
  });
};
const test = {};
appendToObj(test, { plans: { include: { developedBy: true } } });
appendToObj(test, { plans: { include: { sleep: true } } });
appendToObj(test, {
  plans: { include: { sleep: { include: { sleep: true } } } },
});
console.log(JSON.stringify(test));
