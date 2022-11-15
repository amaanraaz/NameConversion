function camelCase(st){
    return st.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
            {
                return index == 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
}

function pascalCase(st){
    return st.replace(/(\w)(\w*)/g,function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
}

function snakeCase(st){
    return st && st.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                        .map(s => s.toLowerCase())
                        .join('_');
}

function screamingSnakeCase(st){
    return st;
}

function kebabCase(st){
    st.replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

function screamingKebabCase(st){
    return st;
}


function converter(){
    let st = document.getElementById("text").value;

    document.getElementById("convert-btn").addEventListener("click",conFun);
    function conFun(){
        document.getElementById("camel-case").innerText=camelCase(st);
        document.getElementById("pascal-case").innerText=pascalCase(st);
        document.getElementById("snake-case").innerText=snakeCase(st);
        document.getElementById("screaming-snake-case").innerText=screamingSnakeCase(st);
        document.getElementById("kebab-case").innerText=kebabCase(st);
        document.getElementById("screaming-kebab-case").innerText=screamingKebabCase(st);
    }
}






document.getElementById("text").addEventListener("input",converter);
