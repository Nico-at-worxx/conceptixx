/**
 * @project : modula.js
 * @package : core
 * @internal : functions.isArray
 * @type : function
 * @dependencies : type
 *
 * @description :
 * isArray checks if an object is an array
 */


	/**
	 * checks if object is an Array
	 */
	var
	isArray = Array.prototype.isArray || function( obj ) {
		return type( obj ) === 'Array';
	};

