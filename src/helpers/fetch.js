export async function fetchUrl(url) {
    let response = await fetch(url);

    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}
  
export async function loadTime(url, setCurrentDate) {
    const dateTime = await fetchUrl(url);

    setCurrentDate(new Date(dateTime.datetime));

    return dateTime;
}