import { css } from 'glamor';

const styles = css({
    ' > div': {
        boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.54)',
    },
    ' div > a > img': {
        width: 80,
        height: 60,
        objectFit: 'cover',
        borderRadius: '10px',
        padding: '5px'
    }
});

export default styles;
