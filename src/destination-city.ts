export function destCity(paths: string[][]): string {
    // Create a set to store all the cities that have outgoing paths
    const outgoingCities = new Set<string>();
    // Create a set to store all the destination cities
    const destinationCities = new Set<string>();

    // Iterate through each path in the input array
    for (const path of paths) {
        // Add the starting city to the set of outgoing cities
        outgoingCities.add(path[0]);
        // Add the destination city to the set of destination cities
        destinationCities.add(path[1]);
    }

    // The destination city is the city in the destination set that is not in the outgoing set
    for (const destinationCity of destinationCities) {
        if (!outgoingCities.has(destinationCity)) {
            return destinationCity;
        }
    }

    // This line should not be reached if the input is valid
    throw new Error("Invalid input: No destination city found");
}
