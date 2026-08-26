export const url = "http://localhost:3000/api/v1"

try {
    const response = await fetch(`${url}/product`)
    const data = await response.json()
} catch (error) {

}

