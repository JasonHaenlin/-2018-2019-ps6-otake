// Parse enum by key and value
const enumSelector = (definition) => {
  return Object.keys(definition)
    .map(key => ({ value: definition[key], title: key }));
};

export {
  enumSelector
};
