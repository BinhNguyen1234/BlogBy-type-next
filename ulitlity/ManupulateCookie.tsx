export function getCookie(name: string) {
   try {
      let Cookies: string[] = document.cookie.split('; ');
      let Cookie = Cookies.filter((valueName) => {
         return valueName.match(`${name}`) != null;
      });
      return Cookie[0].replace(`${name}=`, '');
   } catch (e) {
      console.log(e);
      return null;
   }
}

export function deleteCookie(name: string) {
   try {
      let Cookies: string[] = document.cookie.split('; ');
      let Cookie: string[] = Cookies.filter((valueName) => {
         return valueName.match(`${name}=`) != null;
      });
      const cookieAfterDelete = document.cookie.replace(
         `${Cookie}`,
         `${name}=; expires=${new Date().toUTCString()}; path=/;`
      );
      document.cookie = cookieAfterDelete;
   } catch (e) {
      return null;
   }
}
