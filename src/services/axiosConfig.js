import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 40000,
    headers: {
        "Content-type": "application/json",
    }
});

// 요청 인터셉터
apiClient.interceptors.request.use(
    (config) => {
        // 필요 시 토큰 추가
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터
apiClient.interceptors.response.use(
    (response) => response.data, // 데이터만 반환
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default apiClient;