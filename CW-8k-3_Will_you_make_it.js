const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump <= mpg * fuelLeft ? true : false)
}

console.log(zeroFuel(100, 50, 1))