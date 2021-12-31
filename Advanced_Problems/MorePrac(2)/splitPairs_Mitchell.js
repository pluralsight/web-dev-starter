function getDomain(url) {
    url = url.split('//');
    var domain = url[1];
    for (var i = 0; i < url[1].length; i++) {
        if (domain[i] + domain[i + 1] + domain[i + 2] === 'www') {
            domain = domain.slice(4);
            console.log(domain);
            i += 3;
        } else {
            domain = domain.slice(0, domain.indexOf('.'));
            console.log(domain);
            break;
        }
    }
    return domain;
}