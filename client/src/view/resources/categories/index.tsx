import { loadable } from "../../../utils/loadable";

export default {
  list: loadable(() => import("./List")),
  review: loadable(() => import("./View"), { review: true })
};
