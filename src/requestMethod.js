import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmNiZWUyYTc2YWI3NWJhNzJkNDk1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzg0MTA1NCwiZXhwIjoxNzI0MTAwMjU0fQ.Cc_bQCBL7VgzXMFCKuhhJvexGek5Id7QMajY4YK0MEE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})