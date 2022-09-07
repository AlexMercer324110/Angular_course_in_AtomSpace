let n1, n2

do {
  n1 = prompt('Enter the first number', '')
} while (!n1)

do {
  n2 = prompt('Enter the second number', '')
} while(!n1)

const sum = +n1 + +n2

if (sum < 20) alert('😞')
if (sum > 20) alert('😀')