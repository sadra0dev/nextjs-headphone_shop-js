import { useSWR, axios } from "@project/libs"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/api",
})
export function useApi(request, { fallbackData, ...config } = {}) {
    return useSWR(
        request,
        () => api(request || {}).then((response) => response.data),
        {
            ...config,
            fallbackData: fallbackData && {
                status: 200,
                statusText: "InitialData",
                headers: {},
                data: fallbackData,
            },
        }
    )
}

// This file is not used in this project
