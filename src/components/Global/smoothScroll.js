import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';

var options = {
    damping: 0.05,
}
const SmoothScrollbar = () => {
    useEffect(() => {
        Scrollbar.init(document.querySelector('.Home') , options)
    }, [])

    return null;
}

export default SmoothScrollbar;

