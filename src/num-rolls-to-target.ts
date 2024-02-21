export function numRollsToTarget(n: number, k: number, target: number): number {
    const MOD = 10 ** 9 + 7;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));
    // Base case: With one die, there is only one way to get each sum from 1 to k.
    for (let j = 1; j <= k && j <= target; j++) {
        dp[1][j] = 1;
    }

    for (let index = 2; index <= n; index++) {
        for (let j = 1; index <= target; j++) {
            for (let face = 1; face <= k; face++) {
                if (j - face >= 0) {
                    dp[index][j] = (dp[index][j] + dp[index - 1][j - face] % MOD)
                }

            }

        }

    }
    return dp[n][target];
}
console.log(numRollsToTarget(2, 6, 7));