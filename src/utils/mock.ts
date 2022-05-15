export function createMock<T extends object = object>(data: T | (() => T), timeout = 0) {
    function http(...args: any[]) {
        if (typeof data === 'function') {
            // @ts-ignore
            data = data();
        }

        return new Promise((resolve, reject) => {
            // @ts-ignore
            setTimeout(() => resolve(data[args[0]]), timeout);
        });
    }
    return {
        get: http,
        post: http
    };
}
