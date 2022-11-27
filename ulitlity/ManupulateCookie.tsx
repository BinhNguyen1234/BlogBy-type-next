export function getCookie(name: string) {
   try {
      let Cookies: string[] = document.cookie.split('; ');
      let Cookie = Cookies.filter((valueName) => {
         return valueName.match(`${name}`) != null;
      });
      return Cookie[0].replace(`${name}=`, '');
   } catch (e) {
      return null;
   }
}

export function deleteCookie(name: string) {
   try {
      document.cookie =
         name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   } catch (e) {
      return null;
   }
}
