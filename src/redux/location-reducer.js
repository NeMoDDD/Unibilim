import {locationApi} from "../Api/location-api";

const SET_REGIONS = "SET_REGIONS"
const SET_DISTRICT_CITIES = "SET_DISTRICT_CITIES"
const SET_CITIES = "SET_CITIES"

let initialState = {
    regions: [],
    districtCities: [],
    cities: []
}

const LocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGIONS:
            return {
                ...state,
                regions: action.regions
            }
        case SET_DISTRICT_CITIES:
            return {
                ...state,
                districtCities: action.districtCities
            }
        case SET_CITIES:
            return {
                ...state,
                cities: action.cities
            }
        default: {
            return {...state}
        }
    }
}
export const setRegions = (regions) => ({type: SET_REGIONS, regions})
export const setDistrictCities = (districtCities) => ({type: SET_DISTRICT_CITIES, districtCities})
export const setCities = (cities) => ({type: SET_REGIONS, cities})

export const getRegion = () => {
    return async (dispatch) => {
        let data = await locationApi.getRegion()
        dispatch(setRegions(data.data))
    }
}
export default LocationReducer;