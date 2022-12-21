import { ReactElement, useEffect } from 'react';

export default function test(): ReactElement {
   return (
      <>
         <a
            tabIndex={0}
            data-bs-placement="right"
            className="btn btn-lg btn-danger"
            role="button"
            data-bs-toggle="popover"
            data-bs-trigger="focus"
            data-bs-title="Dismissible popover"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
         >
            Dismissible popover
         </a>
      </>
   );
}
