//map,foreach,filter agulu fixed funsion

const numbers = [1, 5, 6, 4, 15];
// const result = numbers.forEach(n => console.log(n*2))
//ans
// 2
// 10
// 12
// 8
// 30
//or nicheta undefind dekhabe cz return kre na
const result = numbers.forEach(n => {
})
console.log(result)






//filter
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers1 = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70);
//or
// const selected = players.filter(p => p > 80);
//or
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1)
console.log(selected)




//filter array return krbe
const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)





//find ...array dibe na just ans er 1st er ta dibe
const players3 = [75, 65, 67, 72, 55, 59];

const selected4 = players.find(player => player > 70)
console.log(selected4)
//ans 75



const players9 = [75, 65, 67, 72, 55, 59];
const selected5 = players9.find(player => player > 80)
console.log(selected5)
//undefined



/**
 * 1. map ..akta array prottek ta upadan er kache jay abong je kaj thake seta prokta upadana er jnno kore.then result ta ke array er moddhe rakhe then sei array ta return kre dey
 * 2. forEach....return dibe na
 * 3. filter ....
 * 4. find....sorto full fill kre tahole 1st er ta dibe
 * 5. reduce
*/