if (tmpObject.hasOwnProperty(tmpStr[2])) {
    if (tmpObject[tmpStr[2]].hasOwnProperty(tmpStr[3])) {
        if (tmpObject[tmpStr[2]][tmpStr[3]].hasOwnProperty(tmpStr[4])) {
            if (!(tmpStr[5] in tmpObject[tmpStr[2]][tmpStr[3]][tmpStr[4]])) {
                var tmpVal = tmpObject[tmpStr[2]][tmpStr[3]][tmpStr[4]]
                var filename = tmpStr[5]
                tmpVal.push({filename:element})
                tmpObject[tmpStr[2]][tmpStr[3]][tmpStr[4]] = tmpVal
            } 
        } else {
            tmpObject[tmpStr[2]][tmpStr[3]][tmpStr[4]] = []
        }
    } else {
        tmpObject[tmpStr[2]][tmpStr[3]] = {}
    }
} else {
    tmpObject[tmpStr[2]] = {}
}