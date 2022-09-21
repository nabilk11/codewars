// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript - 7kyu


function flyBy(lamps, drone) {
  let lampsArr = [...lamps]
  const minLength = Math.min(lamps.length, drone.length)

  for (let i=0; i<minLength; i++){
    lampsArr[i] = 'o'
  }
  return lampsArr.join('')
}



function flyBy2(lamps, drone) {
  const droneFlightLength = drone.length
  const lampsLength = lamps.length
  const difference = lampsLength-droneFlightLength

  if (lampsLength<droneFlightLength) return 'o'.repeat(lampsLength)
  return 'o'.repeat(droneFlightLength) + 'x'.repeat(difference)
}

function flyBy3(lamps, drone) {
  const droneFlightLength = drone.length
  const lampsLength = lamps.length
  const difference = lampsLength-droneFlightLength

  for (let i in lamps) {
    console.log(lamps[i])
  }
}

// console.log(flyBy('xxxxxxxxx', '==T'))
// console.log(flyBy2('xxxxxxxxx', '==T'))
console.log(flyBy3('xxxxxxxxx', '==T'))