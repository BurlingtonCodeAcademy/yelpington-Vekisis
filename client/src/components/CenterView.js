//Component allows for the map to center

import { useMap } from "react-leaflet";
export default function CenterView(props) {
    const map = useMap()
    map.setView(props.center)
    return null
}