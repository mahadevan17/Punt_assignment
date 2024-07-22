

function autosave (){
    let st=document.getElementById('text');
    let text=st.value;
    localStorage.setItem('Stext', text);
}

function reset(){
    let st=document.getElementById('text');
    st.value='';
    localStorage.setItem('Ntext', '');

}

function save(){
    let st=document.getElementById('text');
    let text=st.value;
    localStorage.setItem('Ntext', text);
}

function load() {
    let loadText = localStorage.getItem('Ntext');
    if  (!loadText) {
        let savedText=localStorage.getItem('Stext');
        document.getElementById('text').value = savedText;
        
    }
    else{
        document.getElementById('text').value = loadText;
        localStorage.setItem('Stext', '');
    }
}

window.onload = function() {
    load();
    setInterval(autosave, 2000);
};
document.addEventListener('DOMContentLoaded', function() {
   
    const fontSelector = document.getElementById('fontfamily');
    const fontVariant = document.getElementById('Variant');
    const textArea = document.getElementById('text');

    if (fontSelector==="None"  || fontVariant==="None"){

        textArea.style.fontFamily = "Arial";
    }
    
    fontSelector.addEventListener('change', function() {

        if (fontSelector==="None"){

            textArea.style.fontFamily = "Arial";
        }else{

        
        let selectedFont = fontSelector.value;
        
        
        textArea.style.fontFamily = selectedFont;
        }
    });

    fontVariant.addEventListener('change', function() {
        if (fontSelector==="None"){
            textArea.style.fontWeight = 'normal';
        }else{        
            let selectedVariant = fontVariant.value;
            if  (selectedVariant==="Underline"){
                textArea.style.textDecoration = 'underline';
                textArea.style.fontWeight = 'normal';
            }
            else{
                textArea.style.textDecoration = 'none';
                textArea.style.fontWeight = selectedVariant;
                
            }
    }
    });
});
