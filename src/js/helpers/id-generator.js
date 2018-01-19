export let idGenerator = () => {
    return Math.floor(new Date().valueOf() * Math.random());
};