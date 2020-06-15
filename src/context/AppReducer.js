
export default (state, action) => {

    switch (action) {
        case 'INCREAMNENT':
            return state + 1

        case 'DECREAMNENT':
            return state - 1

        case 'RESET':
            return 0

        default:
            console.log('Default')
    }

}