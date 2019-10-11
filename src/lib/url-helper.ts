export function lastUrlSegment(url: string) {
    const newUrl = url.replace(/\/$/, "");
    return newUrl.substr(newUrl.lastIndexOf("/") + 1);
}