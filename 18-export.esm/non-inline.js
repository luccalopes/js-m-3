function group() {
    console.log('export nomeado non-inline (agrupadp)')
}

function exportDefault() {
    console.log('export default não inline')
}

export {group}

export default exportDefault