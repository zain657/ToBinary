var inbut1=document.getElementById('inbut1');
var inbut2=document.getElementById('inbut2');
var form=document.getElementById('form');
var subBtn=document.getElementById('subBtn');
var switchBtn=document.getElementById('switchBtn');
var label1=document.getElementById('label1');
var label2=document.getElementById('label2');
var copy1=document.getElementById('copy1');
var copy2=document.getElementById('copy2');







function clear(){
    inbut1.value='';
    inbut2.value='';
}



inbut1.addEventListener('keyup',function(){
    if(inbut1.value==''){
        copy1.classList.add('d-none');
    }
    else{
        copy1.classList.remove('d-none');
    }
})

function copy(input){
    input.select();
    document.execCommand('copy');
}

copy1.addEventListener('click', function(){
    copy(inbut1);
})

copy2.addEventListener('click', function(){
    copy(inbut2);
})



function binaryToText(binaryString1) {
    var binaryString = binaryString1.replace(/\s/g, '');
    if (!/^[01]+$/.test(binaryString)) {
        return "Erorr1";
    }
    // if (binaryString.length % 8 !== 0) {
    //     return "Erorr2";
    // }

    let text = '';
    for (let i = 0; i < binaryString.length; i += 8) {
        let byte = binaryString.substr(i, 8);
        let charCode = parseInt(byte, 2);
        text += String.fromCharCode(charCode);
    }
    return text;
}

function textToBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
        let unicodeValue = str.charCodeAt(i);
        let binaryRepresentation = unicodeValue.toString(2).padStart(8, '0');
        binary += binaryRepresentation + ' ';
    }
    return binary.trim();
}



function WhenBinaryToText(inbut){
    var text=binaryToText(inbut.value);
    inbut2.value=text;
}

function whenTextToBinary(inbut){
    var binary=textToBinary(inbut.value);
    inbut2.value=binary;
}

switchBtn.addEventListener('click',function(){
    if(label1.innerText=='Binary'){
        label1.innerText='Text';
        label2.innerText='Binary';
        clear();
    }
    else{
        label2.innerText='Text';
        label1.innerText='Binary';
        clear();
    }
})

subBtn.addEventListener('click',function(){
    if(label1.innerText=='Binary'){
        WhenBinaryToText(inbut1);
        copy2.classList.remove('d-none');
    }
    if(label1.innerText=='Text'){
        whenTextToBinary(inbut1);
        copy2.classList.remove('d-none');
    }
})