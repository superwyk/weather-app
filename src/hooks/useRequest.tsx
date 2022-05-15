import { useState, useEffect, useRef, useCallback } from 'react';

function useRequest<T = any>(loader: (...args: any[]) => Promise<T>, immediately: boolean = true, deps: any[] = []) {
    const canRunRef = useRef(immediately);
    const [data, setData] = useState<{
        loading: boolean;
        res: T | null;
        error: any;
    }>({
        loading: false,
        res: null,
        error: null
    });

    const run = useCallback(
        async (...args: any[]) => {
            setData((preState) => ({
                ...preState,
                loading: true,
                error: null
            }));

            try {
                const data = await loader(...args);
                setData({
                    res: data,
                    loading: false,
                    error: null
                });
            } catch (error) {
                setData({
                    res: null,
                    loading: false,
                    error
                });
            }
            // eslint-disable-next-line
        },
        [loader]
    );

    useEffect(() => {
        if (!canRunRef.current) {
            canRunRef.current = true;

            return;
        }

        run();
        // eslint-disable-next-line
    }, deps);

    const { loading, res, error } = data;
    return { loading, error, response: res, run };
}

export default useRequest;
