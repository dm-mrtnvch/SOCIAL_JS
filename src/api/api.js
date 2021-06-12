import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c98c9e82-e0dc-426a-8e82-48270217e499'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`);
    },
    unFollow(userID) {
        return instance.delete(`follow/${userID}`);
    },
    getProfile(userID) {
        console.warn('obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userID);
    }
};

export const profileAPI = {
    getProfile(userID) {
        return instance.get('profile/' + userID);
    },
    getStatus(userID) {
        return instance.get('profile/status/' + userID);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('/auth/login');
    }
};

