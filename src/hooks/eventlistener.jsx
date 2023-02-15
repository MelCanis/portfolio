import { useEffect } from "react";
import { _ } from "../res/mijikai";

function useEventListener(object, event, listener, stateful) {
    useEffect(() => {
        object && object.addEventListener(event, listener);
        return () => object && object.removeEventListener(event, listener);
    }, stateful?[object]:[]);   
}
export default useEventListener;