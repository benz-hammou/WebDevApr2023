const Output = document.getElementById('customer_request')
const Coffeemachine = request => {
    let fullMessage = `Your request is ${request.value}`
    console.log(request);
    return Output.innerText = fullMessage
}