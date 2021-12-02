import './Overlay.css'
import { useGlobalContext } from '../../context';
const Overlay = () => {
    const {closeMailForm} = useGlobalContext();
    return <div className="overlay-mail" onClick={closeMailForm}>

    </div>
}
export default Overlay;