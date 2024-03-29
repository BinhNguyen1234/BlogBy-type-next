import { ReactElement, useEffect, FormEventHandler } from 'react';
import Style from '../../styles/components/SearchBar/SearchBar.module.sass';
interface Props {
   dispatch?: any;
   filter?: {
      title?: string;
      fields: Array<string>;
   };
   stateCheck?: string;
   onSubmit: FormEventHandler<HTMLFormElement>;
   defaultValue?: string;
}
export default function SearchBar({
   filter,
   dispatch,
   stateCheck,
   defaultValue,
   onSubmit,
}: Props): ReactElement {
   useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
   }, []);
   return (
      <form onSubmit={onSubmit} id={Style.SearchBar}>
         <input
            defaultValue={defaultValue}
            onInput={(e) => {
               const target = e.target as HTMLInputElement;
               const invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
               dispatch({
                  type: 'Filter',
                  payload: { keyFilter: target.value.replace(invalid, "") },
               });
            }}
            type="text"
            placeholder='Press enter or click "Find" button for search more'
         ></input>
         {filter ? (
            <div className="dropdown ">
               <button
                  style={{
                     borderRadius: '0',
                     borderRight: '1px solid black',
                  }}
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
               >
                  Filter
               </button>
               <ul className="dropdown-menu">
                  {filter.title ? <li>{filter.title}</li> : null}
                  {filter.title ? <hr></hr> : null}
                  {filter.fields.map((field, index): ReactElement => {
                     return (
                        <li
                           key={index}
                           style={{
                              display: 'flex',
                              justifyContent: 'center',
                              paddingLeft: '5%',
                              paddingRight: 0,
                           }}
                           className="dropdown-item "
                        >
                           <label
                              htmlFor={field}
                              style={{ width: '100%' }}
                              className="form-check"
                           >
                              <input
                                 onChange={() => {
                                    dispatch({
                                       type: 'Checked',
                                       payload: { filter: field },
                                    });
                                 }}
                                 defaultChecked={field == stateCheck}
                                 className="form-check-input"
                                 name="flexRadioDefault"
                                 type="radio"
                                 value={`${field}`}
                                 id={field}
                              ></input>
                              <label
                                 style={{ width: '100%' }}
                                 className="form-check-label"
                                 htmlFor={field}
                              >
                                 {field}
                              </label>
                           </label>
                        </li>
                     );
                  })}
               </ul>
            </div>
         ) : null}
         <button type="submit" className="btn btn-primary">
            <span>&#128270;</span>
            <span>Find</span>
         </button>
      </form>
   );
}
