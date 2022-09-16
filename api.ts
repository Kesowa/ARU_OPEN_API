import { api, config, securityHeader} from "@airtasker/spot";

import "./endpoints/alert";
import "./endpoints/asset";

@api({ name: "ARU API", version: "1.4.11" })
@config({
  paramSerializationStrategy: {
    query: {
      array: "comma"
    }
  }
})
class Api {
  /**Session-based auth using bearer token */
  @securityHeader
  "Authorization": string
}
