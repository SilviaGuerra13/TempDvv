import { css } from 'glamor';
// import homeimg from '../Assets/img/background.png'; 

const styles = (homeimg) => css({
    ' h2': {
        color: '#fff',
        paddingTop: 40
    },
    ' h3': {
        color: '#6D6D71',
        fontSize: '2em',
        fontWeight: 900,
        lineheight: 38
    },
    ' .home': {
        '&__image': {
            backgroundImage: `url(${homeimg})`,
            backgroundRepeat: 'no-repeat',
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            ' > input:placeholder': {
                color: '#8F9BA6'
            }
        },
        '&__cards': {
            padding: '60px 50px',
            '&-padding': {
                padding: '20px 1px'
            }
        }
    }
});

export default styles;
