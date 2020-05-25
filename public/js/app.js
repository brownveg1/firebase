console.log('Client side javascript file is loaded!')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

    const orderid = req.body.queryResult.parameters[orderno]

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/webhook?order=' + orderid).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                    messageTwo.textContent = data.order
            }
        })
    })

