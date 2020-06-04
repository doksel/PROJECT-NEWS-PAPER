import { loadable } from "../../../utils/loadable";

export default {
  list: loadable(() => import("./List")),
  review: loadable(() => import("./View")),
  edit: loadable(() => import("./Edit")),
  profile: loadable(() => import("./Profile"), { review: true })
};
