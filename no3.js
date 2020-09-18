var kodeUnix = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];
console.log(kodeUnix.map(hasil => hasil - 50 + kodeUnix.length)
.filter(hasil => hasil < 20)
.reduce((acc,curr) => acc + curr));