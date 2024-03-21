export function encrypt(stringToEncode){
    const encodedString = Buffer.from(stringToEncode).toString('base64');
    return encodedString
}

export function decrypt(stringToDecode){
    const decodedString = Buffer.from(stringToDecode, 'base64').toString('utf-8');
    return decodedString
}

export function toSnippet(s){
    const res = s.split("\n");
    res_json = JSON.stringify(res)
    return res.replace(new RegExp('","', "g"), '",\n"')
}