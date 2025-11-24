export const srcSet = (src, type) => {
    const bareSrc = src.replace(/\.jpe?g$/, '')
    return tuples
        .map(([ext, spec]) => `${bareSrc}${ext}.${type} ${spec}`)
        .join(',\n')
}

const tuples = [
    ['', '1x'],
    ['@2x', '2x'],
    ['@3x', '3x'],
]