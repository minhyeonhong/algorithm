const test = () => {
    const n = 123;
    let ns = Array.from(n);
    console.log(["1", "2"].reduce((prev, curr) => Number(prev) + Number(curr)), 0);
}

test();