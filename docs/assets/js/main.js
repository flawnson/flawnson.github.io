// To add last edited time to footer of website
window.addEventListener("load",function lastMod() {
    let lastMod = "Last Edited: " + document.lastModified;
    if (document.getElementById("modTime")) {
        document.getElementById("modTime").innerHTML = lastMod;
    }
},false);

window.addEventListener("load", function commit() {
    GitHubCalendar(".calendar", "flawnson", {responsive: true});
}, false);
