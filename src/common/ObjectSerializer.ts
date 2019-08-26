/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Object serializer
 */

export class ObjectSerializer {
  /**
   * Given an object with functions and values, serialize them properly so that
   * functions are properly converted to their strings counter part.
   *
   * @param {any} obj               Object to serialize.
   *
   * @returns {string} result       String with serialized object..
   */
  serialize( obj: any ): string {
    return JSON.stringify( obj, function SerializeReplacer( key, value ) {
      // If the value is a function, return its string form.
      if ( typeof value === 'function' ) {
        return value.toString();
      }
      return value;
    });
  }

  /**
   * De-serialize a string to an object such that the functions are restored.
   *
   * @param {string} objStr         Serialized string for object.
   *
   * @returns {any} obj             De-serialized object.
   */
  deserialize( objStr: string ): any {
    return JSON.parse( objStr, function DeserializeReviver( key, value ) {
      if ( typeof value === 'string' && value.match( /^function *(?:anonymous)?\(/ ) ) {
        let fn;
        eval( 'fn=' + value );
        return fn;
      }

      return value;
    });
  }
}
