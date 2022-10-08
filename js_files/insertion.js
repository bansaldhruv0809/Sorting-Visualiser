async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = '#198754';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = '#dc3545';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = '#dc3545';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#198754';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = '#198754';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    //disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    //enableNewArrayBtn();
});


