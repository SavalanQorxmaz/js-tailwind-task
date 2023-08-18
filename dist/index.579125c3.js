const hiddenSection = document.getElementById("hidden-section");
const slider = document.querySelector("#slider");
const search = document.getElementById("search");
const showMore = ()=>{
    hiddenSection.style.display === "none" ? hiddenSection.style.display = "grid" : hiddenSection.style.display = "none";
};
const initialPosition = window.screenX;
const moveLeft = (e)=>{
    if (slider.scrollWidth - slider.scrollLeft > document.documentElement.offsetWidth) slider.scrollLeft -= document.documentElement.offsetWidth;
    else slider.scrollLeft = 0;
};
const moveRight = (e)=>{
    console.log(document.documentElement.offsetWidth);
    console.log(slider.clientLeft);
    console.log(slider.scrollWidth);
    console.log(slider.scrollLeft);
    if (document.documentElement.offsetWidth < slider.scrollWidth - document.documentElement.offsetWidth) slider.scrollLeft += document.documentElement.offsetWidth;
    else slider.scrollLeft = slider.scrollWidth - document.documentElement.offsetWidth;
};
const searchWindowF = ()=>{
    search.style.display = "flex";
};
const searchF = ()=>{
    new Promise((res, rej)=>{
        search.style.display = "none";
        const popup = document.createElement("div");
        popup.style.cssText = `position:fixed; width: 100vw; height: 100vh; left:0; top:0; background-color: rgba(0,0,0,0.1);  z-index: 999; display:flex; justify-content: center; align-items:center; `;
        document.body.appendChild(popup);
        const popupInner = document.createElement("div");
        popupInner.style.cssText = ` width: 200px; height: 200px; background-color: white; position: relative; display:flex; flex-direction:column; align-items:center; justify-content:center; `;
        popup.appendChild(popupInner);
        const popupInnerText = document.createElement("p");
        popupInnerText.style.cssText = ` font-size: 20px;  `;
        popupInnerText.innerText = "Not found";
        popupInner.appendChild(popupInnerText);
        const popupCloseButton = document.createElement("button");
        popupCloseButton.style.cssText = `padding: 3px; background-color: blue; border-radius:5px; position:absolute; bottom:20px;`;
        popupCloseButton.innerText = "Close";
        popupInner.appendChild(popupCloseButton);
        popupCloseButton.onclick = ()=>{
            popup.style.display = "none";
            document.documentElement.scrollTo(0, 0);
            res(true);
        };
    }).then((res)=>{
        if (res) console.log(res);
    });
};

//# sourceMappingURL=index.579125c3.js.map
