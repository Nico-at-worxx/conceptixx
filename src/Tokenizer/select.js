/**
 * @project : modula.js
 * @package : 
 * @internal : Select.Tokenizer.select
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					Cache.Cache
 * 					Tokenizer.Tokenizer
 * 				(	simplify.simplify	)
 */


	/**
	 * workout for combinators (">","~","+" and " ") 
	 */
	_(
		false ,
		[ 'Objects' , 'Selector' , 'Tokenizer' , 'COMBINATOR' ] ,
		function( regexMatch ) {
			// set nextParts as true for Tokenizer
			this.nextParts = true;
			// return unchanged argument
			return regexMatch;
		},


	/**
	 * workout for seperator ","
	 */
		false ,
		[ 'Objects' , 'Selector' , 'Tokenizer' , 'SEPERATOR' ] ,
		function( regexMatch ) {
			// set nextGroup as true for Tokenizer
			this.nextGroup = true;
			// return unchanged argument
			return regexMatch;
		}
	);


