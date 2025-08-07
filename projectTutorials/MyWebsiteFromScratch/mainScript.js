function studyingStatus(isStudying){
    // isStudying = true;
const  oswardStatus = " he is studying " + isStudying;
if ( oswardStatus == true){
    return oswardStatus;
}else {
   console.log( " He is not Studying" + isStudying);
}
}
const oswardStatusResurt = studyingStatus(true);
console.log(oswardStatusResurt);