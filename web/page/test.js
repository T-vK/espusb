let wsUri = `ws://${location.host}/d/ws/issue`

let ws = new ReconnectingWebSocket(wsUri)
ws.onmessage = (evt) => { 
    console.log('message received')
}
ws.onclose = () => {
    console.log('socket closed')
}