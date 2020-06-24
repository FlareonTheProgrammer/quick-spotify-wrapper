/* 
 *  Simple nodejs wrapper for the Spotify API that was developed for Woof discord bot by Chat&Share
 *  Copyright (C) 2020 Puyodead1
 *  
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published
 *  by the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *  
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *  
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

class Artist {
  /**
   * creates a new artist
   * @constructor
   * @param {Object} object
   */
  constructor(object) {
    this.external_urls = object.external_urls;
    this.href = object.href;
    this.id = object.id;
    this.name = object.name;
    this.type = object.type;
    this.uri = object.uri;
  }
}

module.exports = Artist;
