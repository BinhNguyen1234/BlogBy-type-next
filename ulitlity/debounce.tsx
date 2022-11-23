export { debounceChangeTitle, debounceChangeContent };

function debounceChangeTitle(fn: any, delay: number) {
   let timer: any;
   return (e: Event) => {
      const input = e.target as HTMLTextAreaElement;
      if (timer) {
         clearTimeout(timer);
         timer = null;
      }
      timer = setTimeout(() => {
         fn(input.value);
      }, delay);
   };
}

function debounceChangeContent(fn: any, delay: number) {
   let timer: any;
   return (value: any, delta: any, source: any, editor: any) => {
      if (timer) {
         clearTimeout(timer);
         timer = null;
      }
      timer = setTimeout(() => {
         fn(editor.getText());
      }, delay);
   };
}
