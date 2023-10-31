function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber >= 42)
      return streetNumber - 42;
  
    return 42 - streetNumber;
  }


function distanceFromHqInFeet(streetNumber) {
    var blocks = distanceFromHqInBlocks(streetNumber);
  
    if (blocks >= 1)
      return blocks * 264;
  }


function distanceTravelledInFeet(start, destination) {
    if (start <= destination)
      return (destination - start) * 264;
    else
      return (start - destination) * 264;
  }


  function calculatesFarePrice(start, destination) {
    const totalFeetTravelled = Math.abs(destination - start) * 264; // assuming 1 block is 264 feet
  
    if (totalFeetTravelled <= 400) {
      return 0;
    } else if (totalFeetTravelled <= 2000) {
      const fare = (totalFeetTravelled - 400) * 0.02;
      return fare; // removed the toFixed(2) method
    } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }