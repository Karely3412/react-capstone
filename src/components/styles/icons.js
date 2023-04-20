import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function initIcons() {
  return library.add(faEnvelope, faPhone);
}

export default initIcons;
