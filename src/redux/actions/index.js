import data from './actiondata';
export const FETCH_DATA='FETCH_DATA';



export function fetchData(){
    //console.log("Action sent", request);
    //const request=axios.get(IMAGES);
    return {
         type: FETCH_DATA,
         payload: data
    };
}