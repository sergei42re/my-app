import {useState} from "react";


export function useToggleDetails() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return { showDetails, toggleDetails};
}