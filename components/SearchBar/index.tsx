import axios from 'axios';
import { ReactElement } from 'react';
import Style from '../../styles/components/SearchBar/SearchBar.module.sass';
interface Props {
   dispatch: any;
   filter?: {
      title?: string;
      fields: Array<string>;
   };
   href?: string;
   stateCheck: string;
}
export default function SearchBar({
   href,
   filter,
   dispatch,
   stateCheck,
}: Props): ReactElement {
   return (
      <>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               dispatch({ type: 'Sent' });
               axios({
                  method: 'get',
                  url: href,
               })
                  .then((res) => {
                     let data = res.data.map((object: any) => {
                        return {
                           ...object,
                           date: new Date(object.date).toLocaleDateString([
                              'ban',
                              'id',
                           ]),
                        };
                     });
                     dispatch({ type: 'Done', payload: { posts: data } });
                  })
                  .catch((e) => {
                     console.log(e);
                  });
               // console.log(href)
               const target = e.target as HTMLFormElement;
               // console.log((target[0] as HTMLInputElement).value);
               console.log({ target });
            }}
            id={Style.SearchBar}
         >
            <input
               onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  dispatch({
                     type: 'Filter',
                     payload: { keyFilter: target.value },
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
                           <>
                              <li className="dropdown-item ">
                                 <div className="form-check">
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
                                       className="form-check-label"
                                       htmlFor={field}
                                    >
                                       {field}
                                    </label>
                                 </div>
                              </li>
                           </>
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
      </>
   );
}
