function toggleTextVisibiliy(){
    var text = document.getElementById("contentText");

    if (text.style.visibility === "visible") {
        text.style.visibility = "hidden";
        text.style.maxHeight = 0;
      } else {
        text.style.visibility = "visible"
        text.style.maxHeight = "fit-content";
      }
}