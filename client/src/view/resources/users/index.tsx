import { loadable } from "../../../utils/loadable";

export default {
  list: loadable(() => import("./List")),
  review: loadable(() => import("./View")),
  profile: loadable(() => import("./Profile"), { review: true })
};
