
function createAccordionItem(libelleNiv, id, classes) {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    const header = document.createElement('h2');
    header.className = 'accordion-header';

    const button = document.createElement('button');
    button.className = 'accordion-button collapsed bg-info text-white';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#flush-collapse-${id}`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `flush-collapse-${id}`);
    button.textContent = libelleNiv;

    header.appendChild(button);

    const contentDiv = document.createElement('div');
    contentDiv.id = `flush-collapse-${id}`;
    contentDiv.className = 'accordion-collapse collapse';
    contentDiv.setAttribute('data-bs-parent', '#accordionFlushExample');

    // classes
    classes.forEach(element => {
        // console.log(element.libelle);
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'accordion-body';
        bodyDiv.textContent = `${element.libelleClass}`
        contentDiv.appendChild(bodyDiv);
    });
    accordionItem.appendChild(header);
    accordionItem.appendChild(contentDiv);

    return accordionItem;
}

const apiUrl = "http://127.0.0.1:8004/breukh-api/niveaux?join=classes"
fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log('breukh');
        const accordionContainer = document.getElementById('accordionFlushExample');
        data.forEach(element => {
            console.log(accordionContainer);
            // console.log(element);
            const accordionItem = createAccordionItem(element.libelleNiv, element.id, element.classes);
            accordionContainer.appendChild(accordionItem);
        });
        // console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
