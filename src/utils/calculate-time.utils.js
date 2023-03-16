export const calculateTime = (time) => {
    let number = time.slice(0, time.indexOf("h"));

    return Number(number) * 3600;
};
