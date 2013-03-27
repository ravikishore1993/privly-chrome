/**
 * @fileOverview Grabs the data URL for this application and sends it to the
 * extension to make a cross-domain request for content.
 */

/**
 * @namespace
 */
var privlyParameters = {
  
  /**
   * Converts a string to an associative array.
   *
   * @param string parameter_string String containing parameters
   *
   * @return object
   */
  parameterStringToHash: function(parameterString)
  {
    var parameterHash = {};
    var parameterArray = parameterString.split("&");
    for (var i = 0; i < parameterArray.length; i++) {
      var pair = parameterArray[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      parameterHash[key] = value;
    }

    return parameterHash;
  },
  
  /**
   * Get an associative array of the parameters found in the anchor
   *
   * @param {string} url The original href for the currently injected
   * application.
   *
   * @return {object} An associative array of parameters derived from the url.
   **/
  getParameterHash: function(url)
  {
    if (url.indexOf("privlyOriginalURL=") >= 0) {
      url = href.substr(href.indexOf("privlyOriginalURL=") + 18);
    }
    var hashIndex = url.indexOf("#");
    if (hashIndex >= 0) {
      return privlyParameters.parameterStringToHash(url.substring(hashIndex + 1));
    } else {
      return {};
    }
  }
  
  
};
