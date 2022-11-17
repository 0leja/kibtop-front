import { instance } from "./Instance"

export const AuthApi = {
    async auth() {
        return await instance.post('auth/token/refresh/',
            {
                "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2ODc0ODA4MCwianRpIjoiM2ExZTEwMTJjOGQxNGE4ZGIyNDZhMDQ3NDAwYTVjM2UiLCJ1c2VyX2lkIjoyfQ.6XkB4IHimQhBymyfYr8Sj6_R1K7tJei-5K-5CUw7WZQ"
            }).then(res => {
                console.log(res);
            }, () => {
                
                return {userId: 0, userName: 'User'}
                
            })
    }
}