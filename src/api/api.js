import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {'API-KEY': "6bf0fb70-1b68-4b86-93ed-ecd554d0d205"},
})

export const userApi = {
    getUsers (activePage = 1, pageSize = 10){
        return instance.get(`users?page=${activePage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setUserProfile(userId){
        console.warn('Obsolete method. Please use profileApi')
        return profileApi.setUserProfile(userId)
    }
}
export const profileApi = {
    setUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}
export const followApi = {
    postFollow (userId) {
        return instance.post(`follow/${userId}`)
    },
    deleteFollow (userId)  {
        return instance.delete(`follow/${userId}`)
    }
}
export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    security() {
        return instance.get(`security/get-captcha-url`)
    }
}




