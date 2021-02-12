    let list = display.querySelector('ul');
    let listElems = display.querySelectorAll('li');
	const onigiri = document.querySelectorAll('.images');
    const array1 = Array.from(onigiri);
    let start = 0; 
    
    array1.forEach((element) => {
        console.log(element);
    })

    display.querySelector('.left').onclick = function leftArrow() {
      start += 130 * 3;
      start = Math.min(start, 0)
      list.style.marginLeft = start + 'px';
    };

    display.querySelector('.right').onclick = function rightArrow() {
      start -= 130 * 3;
      start = Math.max(start, -130 * (listElems.length - 3));
      list.style.marginLeft = start + 'px';
    };