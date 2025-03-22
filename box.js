  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.style.height = "100px";
    box.style.fontSize = "30px";
    box.style.backgroundColor = "#888";
    box.style.border = "15px solid rgb(54, 52, 52)";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.color = "white";
    box.style.fontWeight = "bold";

    if (i < 3) {
      box.style.width = "200px";
      box.style.display = "inline-flex";
    } else {
      box.style.width = "630px";
      box.style.display = "block";
      box.style.marginTop = "10px";
    }
  }
