/**
 * @param {string} url -
 */
export const get = async (url: string) => {
    try {
      const result = await fetch(`http://localhost:3001/v1/${url}`, {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
      });
      const responseJSON = await result.json();
      if (responseJSON && responseJSON?.success) {
        return responseJSON;
      } else {
        throw Error('an error occurred');
      }
    } catch(error) {
      throw Error('an error occurred');
    }
  };
  
  /**
   * @param {string} url -
   * @param {object} data -
   */
  export const post = async (url: string, data: any) => {
    try {
      const result = await fetch(`http://localhost:3001/v1/${url}`, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const responseJSON = await result.json();
      if (responseJSON && responseJSON?.success) {
        return responseJSON;
      } else {
        const message = responseJSON?.error || 'an error occurred';
        return { success: false, error: message };
      }
    } catch(error) {
      throw Error('an error occurred');
    }
  };

  /**
   * @param {string} url -
   */
  export const remove = async (url: string) => {
    try {
      const result = await fetch(`http://localhost:3001/v1/${url}`, {
        method: 'DELETE',
        cache: 'no-cache',
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
      });
      const responseJSON = await result.json();
      if (responseJSON && responseJSON?.success) {
        return responseJSON;
      } else {
        throw Error('an error occurred');
      }
    } catch(error) {
      throw Error('an error occurred');
    }
  };