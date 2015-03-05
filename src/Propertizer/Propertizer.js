/**
* @project : modula.js
* @package : 
* @internal : Propertizer.Propertizer
* @type : function
* @dependencies :	Cache.Cache
*
* @description :
* the Propertizer is used to store a reference to variables in any scope of the modula.js
* so it can be reached by extending functions
*/


	/**
	 * define Propertizer
	 */
	var
	Propertizer = function( propertyName , propertyValue ) {
		// check if property is already in cache or store propertyValue to cache
		return Cache.Properties[ propertyName ] || ( Cache.Properties[ propertyName ] = propertyValue );
	};

