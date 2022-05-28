function selectedTab (index) {
    let tabs = [document.getElementById("AboutMeTab"), document.getElementById("MyProjectTab"), document.getElementById("ContactsTab")];
    let texts = [document.getElementById("AboutMeText"), document.getElementById("MyProjectText"), document.getElementById("ContactsText")];
    let tabLines = [document.getElementById("AboutMeTabLine"), document.getElementById("MyProjectTabLine"), document.getElementById("ContactsTabLine")]
    let style = getComputedStyle(document.body); 

    console.log(tabs);
    console.log(texts);
    for (let i = 0; i < tabs.length; i++) {
        if (i != index) {
            tabs[i].style.backgroundColor = style.getPropertyValue("--tab_color");
            texts[i].style.display = "none";
            tabLines[i].style.display = "none";
        }
        else {
            tabs[i].style.backgroundColor = style.getPropertyValue("--tab_selected_color");
            texts[i].style.display = "block";
            tabLines[i].style.display = "block";
        }
    }
}