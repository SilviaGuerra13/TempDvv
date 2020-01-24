import { css } from 'glamor';

const styles = css({
    ' > div': { // el div del col
        position: 'relative',
        ' > i': {
            position: 'absolute',
            top: 35,
            left: 25,
            color: '#C8CED3',
        },
        ' > div > input': {
            paddingLeft: 40
        },
        ' > div > input::placeholder': {
            color: '#8F9BA6',
            paddingLeft: 4
        }
    },


});

export default styles;
