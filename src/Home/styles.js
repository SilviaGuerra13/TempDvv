import { css } from 'glamor';

const styles = css({
    ' .home': {
        '&__image': {
            backgroundImage: 'url("https://image.freepik.com/foto-gratis/vista-cerca-coche-concesionario_23-2148130086.jpg")',
            backgroundRepeat: 'no-repeat',
            width: '110%',
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0px 0px 85% 166px'
        },
        '&__cards': {
            padding: '10px 50px',
            '&-padding': {
                padding: '20px 1px'
            }
        }
    }
});

export default styles;
