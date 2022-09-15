const getCount = (s) =>
  [...s].reduce((a, c) => a + ("aeiou".includes(c) ? 1 : 0), 0);



  function getCount(str) {
    const chars = str.split('')
    const filtered = chars.filter((c)=>isVowel(c))
    
     return filtered.length
  }
  
  function isVowel(c) {
  //   const vowels = ['a','e','i','o','u']
    const vowels = 'aeiou'
    return vowels.includes(c)
  }
  
  
  
  
  // function getCount(str) {
    
  //   let sum = 0
  //   let len = str.length
  //   for (let i=0; i<len; i++){
  //     const c = str[i]
  //     if (isVowel(c)) {
  //       sum++
  //     }
  //   }
  //   return sum;
  // }
  
  
  // function isVowel(c) {
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
  //   return vowels.includes(c)
  // }