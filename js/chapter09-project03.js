window.onload = function(){
document.getElementById("hide").style.display = "none";

document.getElementById("highlight").addEventListener("click", function(){

    var ele = document.querySelectorAll("h1, main, div, p, tr, td, caption, th, a, legend, label, fieldset, button");
    console.log(ele);
    highlightRecursive(ele);    
    
    document.getElementById("highlight").style.display = "none";

    document.getElementById("hide").style.display = "block";    
});

document.getElementById("hide").addEventListener("click", function(){

    while(document.getElementsByClassName("hoverNode").length > 0){
    
        var spanNodes = document.getElementsByClassName("hoverNode");
        
        for (var i = 0; i < spanNodes.length; i++) {
        
            spanNodes[i].remove();
        
        }
        
    }
    document.getElementById("highlight").style.display = "block";
    
    document.getElementById("hide").style.display = "none";
    
    });

}

function highlightRecursive(ele){
    console.log("nodeType=" + ele.nodeType + " tagName=" + ele.tagName);
    for (var i = 0; i < ele.length; i++) {
        // ignore space and text ... we are only interested in element eles
        if (ele[i].nodeType = 1){
            var spanEle = document.createElement('SPAN');

            spanEle.className = "hoverNode";

            spanEle.innerHTML = ele[i].tagName;

            ele[i].appendChild(spanEle);
            spanEle.addEventListener("click", function(e){

                var parentElement = e.currentTarget.parentElement;

                var parentId = parentElement.getAttribute("id");

                var tagName = parentElement.tagName;

                var className = parentElement.className;

                var innerhtml = parentElement.innerHTML;

                var alertMsg = parentId + " " + tagName + " " + className + " " + innerhtml;

                alert(alertMsg);
            });
        }
    }
}
