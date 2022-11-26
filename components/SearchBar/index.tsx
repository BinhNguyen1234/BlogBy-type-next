
import { ReactElement, useEffect, memo } from 'react';
import Style from '../../styles/components/SearchBar/SearchBar.module.sass';
import APIAuth from '../../ulitlity/callApiWAuth';
interface Props {
   dispatch?: any;
   filter?: {
      title?: string;
      fields: Array<string>;
   };
   href?: string;
   stateCheck?: string;
}
export default memo(function SearchBar({
   href,
   filter,
   dispatch,
   stateCheck,
}: Props): ReactElement {
   useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
   }, []);
   const API = new APIAuth()
   return (
      <>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               dispatch({ type: 'Sent' });
               API.callAPI({
                  method: 'get',
                  url: href as string,
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
})
