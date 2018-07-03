export const env = {
    cacheKeyPrefix: '2018-near-discount-',
    setCache(name, value) {
        name = this.cacheKeyPrefix + name;
        window.localStorage.setItem(name, value);
    },
    getCache(name) {
        if (!name || typeof name !== 'string') {
            return null;
        }
        name = this.cacheKeyPrefix + name;
        return window.localStorage.getItem(name);
    },
}