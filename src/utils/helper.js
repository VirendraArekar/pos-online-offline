import { TIMEZONE } from "./constant";
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
}

export const getObjKeyVal = (obj, key) => {
    if (!isEmptyObject(obj)) {
        for (let i in obj) {
            if (i === key) {
                return obj[key]
            }
            else {
                if (obj[i].constructor === Object) {
                    return getObjKeyVal(obj[i], key)
                }
            }
        }
    }
}

export const getZoneTime = (dateStr) => {
    return new Date((typeof date === "string" ? new Date(dateStr) : dateStr).toLocaleString("en-US", { timeZone: TIMEZONE }));
}

export const patternToArr = (str, pattern) => {
    return str.split(pattern);
}

export const getDate = (dateStr, format) => {
    //   pattern ['raw', 'raw-reverse','raw-date-time','raw-name']
    let dateObj = getZoneTime(dateStr);
    switch (format) {
        case 'raw':
            return dateObj.toLocaleDateString("en-US");
        case 'raw-reverse':
            let rawDate = dateObj.toLocaleDateString("en-US");
            let rawArr = patternToArr(rawDate, '/');
            return `${rawArr[1] / rawArr[0] / rawArr[2]}`;
        case 'raw-date-time':
            return '';
        case 'raw-name':
            return dateObj.toLocaleDateString("en-US", dateOptions);
        default:
            return '';
    }
}

export const postDate = (dateStr) => {
    let dateObj = getZoneTime(dateStr);
    let baseDate = dateObj.toLocaleDateString("en-US");
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    return `${baseDate} ${hours.length === 1 ? `0${hours}` : hours}:${minutes.length === 1 ? `0${minutes}` : minutes} ${ampm}`;
}

export const setLocalData = async (key, val, isObj = false) => {
    return await localStorage.setItem(key, isObj ? JSON.stringify(val) : val);
}

export const getLocalData = async (key, isObj = false) => {
    return await JSON.parse(localStorage.getItem(key));
}

export const createGetQuery = (queryObj) => {
    let finalQuery = '';
    if (!isEmptyObject(queryObj)) {
        for (let key in queryObj) {
            return finalQuery === '' ? `${key}=${queryObj[key]}` : `&${key}=${queryObj[key]}`;
        }
    }
    return finalQuery;
}