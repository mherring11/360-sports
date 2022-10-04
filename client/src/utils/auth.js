import decode from 'jwt-decode';

class AuthOptions {
    userLogin(idToken) {
        localStorage.setItem('id_token');
        // set page to homepage
        window.location.assign('/');
    }

    userLogout() {
        localStorage.removeItem('id_token');

        window.location.assign('/');
    }

    retrieveToken() {
        return localStorage.getItem('id_token');
    }

    currentProfile() {
        return decode(this.retrieveToken());
    }

    confirmTokenValid(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        }   catch (err) {
                return false;
            }
    }
    
    loggedInStatus() {
        const getToken = this.retrieveToken();
        return !!getToken && !this.confirmTokenValid(getToken);
    }
}

export default new AuthOptions();