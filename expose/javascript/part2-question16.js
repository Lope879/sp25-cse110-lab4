for (let cars in statistics) {
    if (cars[0] == 'r' || statistics[cars] % 2 != 0) {
        console.log(statistics[cars]);
    }
}