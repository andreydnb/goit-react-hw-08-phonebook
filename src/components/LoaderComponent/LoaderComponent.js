import {ThreeDots} from 'react-loader-spinner';
import s from './LoaderComponent.module.css';

function LoaderComponent() {
    return (
        <div className={s.overlay}>
            <ThreeDots color="#f50057" height="35" />
        </div>
    );
}

export default LoaderComponent;