import kaboom from "kaboom";
import { scale } "./constants";

export const k = kaboom({
    width: 256 * scale,
    height: 144 * scale,
    scale,
    letterbox: true,
    global: false,
})