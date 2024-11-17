const useLocalStorage = (key, value = null, operation = 'get') => {
  try {
      switch (operation) {
          case 'set':
              localStorage.setItem(key, JSON.stringify(value));
              return true; // Return true to indicate success
          case 'get':
              const item = localStorage.getItem(key);
              return item ? JSON.parse(item) : null; // Parse and return the item, or null if not found
          case 'remove':
              localStorage.removeItem(key);
              return true; // Return true to indicate success
          default:
              throw new Error(`Invalid operation: ${operation}`);
      }
  } catch (error) {
      console.error(`LocalStorage Error: ${error.message}`);
      return null; // Return null on failure
  }
};
