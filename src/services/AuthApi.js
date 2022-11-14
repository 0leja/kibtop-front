import { instance } from "./Instance"

export const AuthApi = {
    async auth() {
        return await instance.get('user/auth')
            .then(res => {
                if(res.status === 200) {
                    console.log('Ответ пришел');
                } else {
                    console.log('Ответ пришел');
                }
            }, () => {
                
                return {userId: 0, userName: 'User'}
                
            })
    }
}