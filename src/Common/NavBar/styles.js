import { css } from 'glamor';

const styles = css({
    ' .nav': {
        '&-link': {
            color: '#fff !important',
            textDecoration: 'underline'
        },
        '&-link:hover': {
            /* color: #E28413 !important; */
            color: '#F18F01 !important'
        }
    },
    ' .navbar': {
        '&-brand': {
            width: 252,
            paddingLeft: 40,
            ' > img': {
                width: '100%'
            },
            ' > a': {
                color: '#fff',
                fontWeight: 900,
                padding: '22px'
            }
        }
    }
    // ' .nav': {
    //     '&-link': {
    //         color: '#fff !important',
    //         textDecoration: 'underline'
    //     },
    //     ' .nav-link:hover': {
    //         /* color: #E28413 !important; */
    //         color: '#F18F01 !important'
    //     }
    // },
    // ' .navbar': {
    //     '&-brand': {
    //         width: 270,
    //         paddingLeft: 40,
    //         ' > img': {
    //             width: '100%'
    //         }
    //     }
    // }
})

export default styles;
