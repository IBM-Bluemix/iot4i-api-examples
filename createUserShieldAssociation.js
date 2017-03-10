/**
 * Copyright 2016, 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var shieldAssociation = require( './bl/shieldAssociation.js');
var config = require( './config.js');

// user1: the id of the shield from createUser.js
// 2: the id of the shield from createShield.js
shieldAssociation.createUserShieldAssociation(  config, "user1", 10, function( data, err) {
	if ( err) {
		console.log( err);
	} else {
		console.log( "Succesfully created associated shield and user: " + data.username + " - " + data.shieldid);
	}
	
})