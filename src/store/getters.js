export const getters = {
    getlocales:function(state){
        return state.locales = JSON.parse(localStorage.getItem('locales'))
    }
}