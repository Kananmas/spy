export const secondsToTimeString = (hours) => {
    hours = hours / 3600;
    let seconds = 60;
    let minutes = 60;
    let started = false;

    return () => {
        if (started) {
            seconds--;
        }

        if (!started) {
            seconds--;
            hours--;
            minutes--;
            started = true;
        }

        if (seconds === 0) {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
        }

        if (minutes === 0) {
            if (hours > 0) {
                hours--;
            }
        }

        return `${hours} : ${minutes} : ${seconds}`;
    };
};
