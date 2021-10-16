const textarea = ()=>{
    

    const area = document.querySelector('.area__textarea'),
          words = document.querySelector('.counter__words'),
          char = document.querySelector('.counter__char');

     
    function wordsCount(e) {
        let text = area.value.trim();

        // let changedText = text.replace(/\s/g, " ");


        let wordsArr = text.split(/\s+/).filter((item)=>item).length;

        words.textContent = wordsArr;

    }
          
    function charCount(e) {
        
        let text = area.value; //What we writted

        let changedText =  text.replace(/[\s]/g, '') //Delete 'space'

        const charArr = changedText.split(""); //Add to arr


        char.textContent = charArr.length; 

    }


    area.addEventListener('input', function(e) {
        charCount();
        wordsCount();
    })


}
export default textarea;