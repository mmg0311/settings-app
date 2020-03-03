const doesTabExists = (tabs, path) =>
   tabs.find(tab => tab.path === path) || false

export default doesTabExists
