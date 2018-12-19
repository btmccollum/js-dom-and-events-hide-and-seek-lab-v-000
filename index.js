function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
    const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = parseInt( list[i].innerHTML , 10 ) + n;
    }
}

function deepestChild() {
    let node = document.getElementById('grand-node');
    let childNode = node.children[0];
   
    while ( childNode !== undefined ) {
        node = childNode
        childNode = node.children[0]
    }
    return node;
}

