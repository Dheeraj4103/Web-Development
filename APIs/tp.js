function Sleep(time=300) {
  return new Promise((resolve, reject) => {
    if (time < 300) {
      reject(`${time} is not enough`);
    } else {
      setTimeout(() => {
        resolve(`You slept for ${time}`);
      }, time);
    }
  });
}

async function CallSleep1(list) {
    let arr = [];
    list.forEach(itm => {
        arr.push(Sleep(itm));
    });

    let results = await Promise.all(arr);
    results.forEach(itms => { console.log(itms) });

}

async function CallSleep(list) {
    let arr = [];
    list.forEach( async itm => {
        console.log(await Sleep(itm));
    });
}
CallSleep1([300, 510, 1000]);
