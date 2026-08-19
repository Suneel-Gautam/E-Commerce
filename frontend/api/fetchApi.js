export const url = "http://localhost:3000/api/v1"


export const response = await fetch(`${url}/product`)
export const data = await response.json()
