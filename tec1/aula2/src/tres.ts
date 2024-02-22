class Aleatorio {
    get(): number {
        return Math.floor(Math.random() * 100 + 1);
}
}

const caller = new Aleatorio();
for(let i: number = 0; i < 5; i++){
    console.log(caller.get());
};
