function filterUrls(event: KeyboardEvent) {
    //
    let target = <HTMLInputElement>event?.target
    if(!target) return
    if (event.key === "Enter") {
        if (event.ctrlKey) {
            window.location.assign(
                `https://stackoverflow.com/search?q=${target.value}`,
            );
            return;
        } 
        if (event.altKey) {
            window.location.assign(
                `https://www.reddit.com/search/?q=${target.value}`,
            );
            event.preventDefault();
            return;
        }

        if (
            target.value?.startsWith("https://") ||
            target.value.startsWith("http://")
        ) {
            window.location.assign(target.value);
            return;
        }

        window.location.assign(
            `https://www.google.nl/search?q=${target.value}`,
        );
    }

    const buttons = document.querySelectorAll<HTMLElement>("[data-list-button]");
    buttons.forEach((button) => {
        if (
            !button
                .getAttribute("data-list-button")?.includes(target.value)
        ) {
            button.style.display = "none";
            // console.log(button.getAttribute('data-list-button'))
        } else {
            button.style.display = "block";
        }
    });
}
const search = document.getElementById("search");
search?.addEventListener("keyup", (e) => filterUrls(e));