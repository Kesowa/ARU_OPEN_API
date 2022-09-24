import { api, config, securityHeader } from "@airtasker/spot";
import { oa3server } from "@airtasker/spot/build/lib/src/syntax/oa3server";
import { oa3serverVariables } from "@airtasker/spot/build/lib/src/syntax/oa3serverVariables";

import "./endpoints/alert";
// import "./endpoints/asset";
// import "./endpoints/assetClass";
import "./endpoints/auth";
// import "./endpoints/baseLayer";
import "./endpoints/document";
import "./endpoints/vod";

@api({ name: "ARU API", version: "1.4.11" })
@config({
  paramSerializationStrategy: {
    query: {
      array: "comma"
    }
  }
})
class Api {
  /**
   * Session-based auth using Bearer token
   * 
   * Get token from /auth/login
   * 
   * @example
   * "Bearer 507f1f77bcf86cd799439011"
   */
  @securityHeader
  "Authorization": string
  @oa3server({
    url: "https://aru.kesowa.com/apis/v1"
  })

  productionServer(
    @oa3serverVariables
    variables: {}
  ) { }

  @oa3server({
    url: "http://localhost:5011/apis/v1"
  })
  devServer(
    @oa3serverVariables
    variables: {}
  ) { }
}
