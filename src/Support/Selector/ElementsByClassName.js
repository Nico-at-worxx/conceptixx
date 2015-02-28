/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.ElementsByClassName
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support for getElementsByClassName
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'ElementsByClassName' ] ,
		!isNative( doc.getElementsByClassName )
	);


	/**
	 * same Support but Opera < 10 and Safari < 4 safe
	 */
	_(
			true ,
			[ 'Support' , 'Selector' , 'ElementsByClassName' ] ,
			!isNative( doc.getElementsByClassName ) ||
			!Support(
				function( div ) {
					div.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>';
					// Support: Safari<4
					div.firstChild.className = 'i';
					// Support: Opera<10
					return div.getElementsByClassName( 'i' ).length === 2;
				}
			)
		);	


