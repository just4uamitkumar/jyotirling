const useThrottle = (func:unknown, delay:number) => {
    let timeout:unknown = null;
    return (...args) => {
      if (timeout) {
        return;
      }
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    };
  };
  
  export default useThrottle;