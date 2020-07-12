
export const submitUserAction = (data) => {
    let url = "n"
    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(json => {console.log(json)})
}