// {
//     function printNums(n) {
//         if (n !== 1) {
//             printNums(n - 1);
//         }
//         console.log(n);
//     }

//     printNums(5);
// }



// ******************** EASY LEVEL QUESTIONS ***********************


// Factorial of a number
{
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    console.log(factorial(5));
}


// Fibonacci series (Nth term)
{
    function fibonacciSeries(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    }
    console.log(`fibanacci(6): ${fibonacciSeries(6)}`);
}


// Sum of first N natural numbers
{
    function sum(n) {
        if (n === 0) return 0;
        return n + sum(n - 1);
    }
    console.log(sum(50));
}


// Reverse a string using recursion
{
    function reverseString(str) {
        if (str.length === 0) return str;
        if (str.length === 1) return str;
        return reverseString(str.slice(1)) + str[0];
    }
    console.log(reverseString('hello'));
}


// Check if a string is a palindrome (recursively)
{
    function isPalindrome(str) {
        if (str.length <= 1) return true;
        if (str[0] !== str[str.length - 1]) {
            return false;
        } else {
            return isPalindrome(str.slice(1, -1));
        }
    }
    console.log(isPalindrome('madam'));
    console.log(isPalindrome('hello'));
}


// ************************** MEDIUM LEVEL QUESTIONS *********************

// Power of a number (xⁿ)
{
    function power(x, n) {
        if (n === 0) return 1;
        return x * power(x, n - 1);
    }
    console.log(power(4, 4));
}


// Find GCD (Greatest Common Divisor) using Euclid’s algorithm
{
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    console.log(gcd(18, 48));
}


// Print all subsets of a string
{
    function getSubsets(str) {
        const result = [];

        function helper(current, remaining) {
            if (remaining.length === 0) {
                result.push(current); // base case
                return;
            }

            // Include the first character
            helper(current + remaining[0], remaining.slice(1));

            // Exclude the first character
            helper(current, remaining.slice(1));
        }

        helper("", str);
        return result;
    }

    console.log(getSubsets("abc"));
}

// **************** HIGH LEVEL QUESTIONS *******************


// Permutations of a string or array
{
    function getPermutations(str) {
        const result = [];

        function permute(current, remaining) {
            // Base case: if no characters are left to add
            if (remaining.length === 0) {
                result.push(current);
                return;
            }

            // Loop through all characters in 'remaining'
            for (let i = 0; i < remaining.length; i++) {
                const char = remaining[i];
                const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                permute(current + char, newRemaining);
            }
        }

        permute("", str);
        return result;
    }

    console.log(getPermutations("abc"));
}


// Solving a Maze (Backtracking)
// Grid of 0s and 1s where 1 means you can move
// Find a path from top-left to bottom-right using recursion
{
    function solveMaze(maze) {
        const n = maze.length;
        const path = [];

        function isSafe(x, y) {
            return x >= 0 && y >= 0 && x < n && y < n && maze[x][y] === 1;
        }

        function backtrack(x, y) {
            // Base case: reached the goal
            if (x === n - 1 && y === n - 1) {
                path.push([x, y]);
                return true;
            }

            if (isSafe(x, y)) {
                path.push([x, y]);

                // Move right
                if (backtrack(x, y + 1)) return true;

                // Move down
                if (backtrack(x + 1, y)) return true;

                // Backtrack if no move works
                path.pop();
            }

            return false;
        }

        if (backtrack(0, 0)) {
            console.log("Path found:", path);
        } else {
            console.log("No path found.");
        }
    }
    solveMaze([
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [0, 1, 0, 0],
        [1, 1, 1, 1]
    ]);

}