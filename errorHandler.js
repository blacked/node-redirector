/**
*	Author: Alexey Dubkov
*	Email:  alexey.dubkov@gmail.com
*	Web:    http://dubkov.com
*
*	This program is free software: you can redistribute it and/or modify
*	it under the terms of the GNU General Public License as published by
*	the Free Software Foundation, either version 3 of the License, or
*	(at your option) any later version.
*
*	This program is distributed in the hope that it will be useful,
*	but WITHOUT ANY WARRANTY; without even the implied warranty of
*	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*	GNU General Public License for more details.
*
*	You should have received a copy of the GNU General Public License
*	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/

var view = require('./view');

exports.get = function(req, res, err) {
	// DEBUG
	process.env['DEBUG'] && console.log('errorHandler: ' + err.err_code + '\n MSG: ' + err.err_msg);

	// Respond to client
	err.err_msg = 'We\'re sorry, but shit happened :(\nWe logged it, and hope to fix it soon!';
	view.show(req, res, 'error', 'index', err);
}