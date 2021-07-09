function changeTextBox(target){
    var currentBox = document.querySelector(".collapsable.open")
    if(currentBox){
        currentBox.classList.remove("open");
        currentBox.classList.add("closed");
        if (target!=currentBox.id){
            var targetBox=document.getElementById(target);
            if(targetBox){
                targetBox.classList.remove("closed")
                targetBox.classList.add("open");
            }
        }
    }else{
        var targetBox=document.getElementById(target);
        if(targetBox){
            targetBox.classList.remove("closed")
            targetBox.classList.add("open");
        }
    }
}