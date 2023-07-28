const hashroute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    hashhandleLocation();
};

const hashroutes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "about": "/pages/about.html",
    "lorem": "/pages/lorem.html",
};

const hashhandleLocation = async () => {
    const path = window.location.hash.replace("#", "");
    console.log(path)
    const route = hashroutes[path] || hashroutes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.addEventListener("hashchange", hashhandleLocation);

hashhandleLocation();
