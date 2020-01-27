import { css } from 'glamor';

const styles = css({
    width: '100%',
    height: 60,
    color: '#fff',
    background: '#6D6D71',
    padding: '20px 80px',

    ' .footer': {
        '&__img': {
            ' > div': {
                width: 200,
                ' > img': {
                    width: '100%'
                }
            },
        },
        '&__text': {
            ' h6': {
                fontWeight: 900
            }
        }
    }
});

export default styles;
