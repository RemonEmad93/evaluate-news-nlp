import { checkForName } from '..'

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('article-url').value
    if (checkForName(formText)) {
        fetch('http://localhost:8081/sentiment', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({
                data: formText,
            })
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('text').innerHTML = res.text
                document.getElementById('agreement').innerHTML = res.agreement
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('confidence').innerHTML = res.confidence
                document.getElementById('irony').innerHTML = res.irony
                document.getElementById('score_tag').innerHTML = res.score_tag
            })
    } else {
        alert('Invalid URL')
    }
}

export { handleSubmit }