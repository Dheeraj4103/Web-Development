const counter = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counting = counter();

counting();
counting();
counting();
counting();
counting();