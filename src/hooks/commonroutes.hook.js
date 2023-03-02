import { useNavigate } from "react-router-dom";

export function useCommonRoutes() {
    const history = useNavigate();

    function playOffline() {
        history("/playoffline");
    }

    function playOnline() {
        history("/playonline");
    }

    function goToHome() {
        history("/home");
    }


    return {
        playOffline,
        playOnline,
        home: goToHome,
    }

}