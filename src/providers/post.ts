import axios, { AxiosResponse } from "axios";
import { isMatch } from "date-fns";
import React from "react"

/**
 * React hook to fetch posts from GitHub repository.
 * 
 * @param initialDate 
 * @returns {{ post: string, error: string, loading: boolean }}
 */
export default function usePost(initialDate: string | undefined): { post: string; error: string; loading: boolean; } {

    const [date, setDate] = React.useState<string | undefined>(initialDate);
    const [post, setPost] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);

    const GIT_BRANCH = 'blog';

    React.useEffect(function () {
        if (initialDate && isMatch(initialDate, 'yyyy-mm-dd')) {
            setDate(initialDate)
        } else {
            setError('Expected the following format for date YYYY-MM-DD, but received ' + initialDate);
        }
    }, [initialDate]);

    React.useEffect(function () {
        setLoading(true);
        axios.get(`https://raw.githubusercontent.com/ayushmanchhabra/asyncawake.studio/refs/heads/${GIT_BRANCH}/src/content/${date}.md`)
            .then((response: AxiosResponse) => response.data)
            .then((post: string) => {
                setPost(post);
            })
            .catch((error: any) => {
                setError(error as string);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [date]);

    return { post, error, loading };
}
