import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query: '',
        activeTab: 'photos',
        results: [],
        Loading: false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTab(state,action){
            state.activeTab = action.payload
        },
        setResults(state,action){
            state.results = action.payload
            state.Loading = false
        },
        setLoading(state){
            state.Loading = true
            state.error = null
        },
        setError(state,action){
            state.error = action.payload
            state.Loading = false
        },
        clearResults(state){
         state.results = []
        }
    }
})
export const { setQuery,setActiveTab,setResults,setLoading,setError,clearResults } = searchSlice.actions
export default searchSlice.reducer