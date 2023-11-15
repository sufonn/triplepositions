export const fetchData = async (url) => {
    const res = await fetch(`${url}`);
    const data = await res.json();

    return data
}

export const dataImage = () => {
    let img = document.querySelectorAll("[data-img-url");
    for(let i=0; i<img.length; i++) {
        const element = img[i];
        element.style.backgroundImage = `url(${element.getAttribute(
            "data-img-url"
        )})`
    }
}