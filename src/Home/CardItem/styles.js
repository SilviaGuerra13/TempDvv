import { css } from 'glamor';

const styles = css({
    borderRadius: '14px !important',
    cursor: 'pointer',
    margin: '5px',
    ' > a': {
        textDecoration: 'none',
        color: '#6D6D71',
    },
    ' > a:hover': {
        textDecoration: 'none',
    },
    ' > div': {
        boxShadow: '0px 4px 15px rgba(172, 180, 188, 0.15)',
        borderRadius: '8px'
    },
    ' div > a > img': {
        width: 80,
        height: 60,
        objectFit: 'cover',
        borderRadius: '15px',
        padding: '5px 10px 5px 5px '
    },
    ' .media': {
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        lineHeight: '22px',
        borderRadius: 14,
        padding: '5px 0px'
    }
});

export default styles;
