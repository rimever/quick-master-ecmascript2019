function e(templates, ...values) {
    let result = "";
    for (let i = 0; i < templates.raw.length; i++) {
        result += templates.raw[i] + (values[i] ? values[i] : '');
    }
    return result;
}

let name = 'Yamada';
const msg = e`\uName is \use${name}.`;
console.log(msg);