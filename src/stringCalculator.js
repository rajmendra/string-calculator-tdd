const add = (numbers) => {
    if (numbers === undefined) throw new Error('Input is undefined');
  
    if (numbers === '') return 0;
  
    let delimiterPattern = /,|\n/;
    let numsStr = numbers;
  
    // Check for custom delimiter at the beginning: //[delimiter]\n...
    const customMatch = numsStr.match(/^\/\/(.+)\n/);
    if (customMatch) {
      const customDelim = customMatch[1];
      const escaped = customDelim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiterPattern = new RegExp(escaped);
      numsStr = numsStr.slice(customMatch[0].length);
    }
  
    // Split numbers by the delimiter pattern
    const parts = numsStr.split(delimiterPattern);
    const ints = parts.map(n => Number(n));
  
    // Check for negative numbers
    const negatives = ints.filter(n => n < 0);
    if (negatives.length) {
      throw new Error('negative numbers not allowed ' + negatives.join(','));
    }
  
    // Sum and return
    return ints.reduce((sum, n) => sum + n, 0);
  }
  
  module.exports = { add };