import { getErrorMessage } from "./errorHandler";

export async function fetchUrl(url: string) {
    let response = await fetch(url);

    if (response.status === 200) {
        return response.json();
    } else {
        getErrorMessage(`Request status error: ${response.status}`)
    }
}
  
export async function loadTime(url: string, setCurrentDate: Function) {
    const dateTime = await fetchUrl(url);

    setCurrentDate(new Date(dateTime.datetime));

    return dateTime;
}