import axios from 'axios';

class Module {
  public toolbarOptions = [
    ['bold', 'italic', 'underline'],
    ['link', 'image'],
    [{size: ['small', 'normal', 'large', 'huge']}],
    [{color: []}, {background: []}],
    [{font: []}],
    [{align: []}],
    [{header: [2, 3, 4, 5, 6, false]}],
    ['clean'],
  ];
}
export default new Module();
