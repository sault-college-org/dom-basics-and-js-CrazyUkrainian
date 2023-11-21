const Apetaizers = () => {
    const apetaizersContent = document.createElement('div');
    apetaizersContent.setAttribute('class', 'container');

    const apetaizersHeader = document.createElement('h1');
    apetaizersHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    apetaizersHeader.innerHTML = 'APETAIZERS';

    const apetaizersList = document.createElement('ul');
    apetaizersList.setAttribute('class', 'apetaizersList');

    const apetaizerItems = () => {
        const list = document.createElement('li');
        list.setAttribute('class', 'nav-item list-unstyled mx-2');

        const apt1 = document.createElement('h1');
        apt1.setAttribute('id', 'apt1');
        apt1.setAttribute('class', 'text-center');
        apt1.innerHTML = 'JALAPENO POPPERS';
        list.appendChild(apt1);
        const aptParagraph1 = document.createElement('p');
        aptParagraph1.setAttribute('class', 'my-3 pb-3');
        aptParagraph1.innerHTML = 'THEY ALWAYS START FROZEN BUT END UP GOOOD!';
        list.appendChild(aptParagraph1);

        const apt2 = document.createElement('h1');
        apt2.setAttribute('id', 'apt2');
        apt2.setAttribute('class', 'text-center');
        apt2.innerHTML = 'MOZZA STICKS';
        list.appendChild(apt2);
        const aptParagraph2 = document.createElement('p');
        aptParagraph2.setAttribute('class', 'my-3 pb-3');
        aptParagraph2.innerHTML = 'Just amazing with the honey-garlic dipping sauce';
        list.appendChild(aptParagraph2);

        const apt3 = document.createElement('h1');
        apt3.setAttribute('id', 'apt3');
        apt3.setAttribute('class', 'text-center');
        apt3.innerHTML = 'FRENCH FRIES';
        list.appendChild(apt3);
        const aptParagraph3 = document.createElement('p');
        aptParagraph3.setAttribute('class', 'my-3 pb-3');
        aptParagraph3.innerHTML = 'Classic which you always have to like';
        list.appendChild(aptParagraph3);

        return list;
    }

    apetaizersContent.appendChild(apetaizersHeader);
    apetaizersContent.appendChild(apetaizerItems());

    return apetaizersContent;

}
export default Apetaizers;